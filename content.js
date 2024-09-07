// content.js

let isExtracting = false;

chrome.runtime.onConnect.addListener((port) => {
    if (port.name !== 'extractionChannel') {
        console.warn(`Tentativa de conexão com um canal desconhecido: ${port.name}`);
        return;
    }

    console.log('Porta "extractionChannel" conectada.');

    port.onMessage.addListener(async (msg) => {
        if (msg.action === 'extractBets') {
            if (isExtracting) {
                console.warn('Extração já em andamento. Ignorando nova solicitação.');
                return;
            }

            isExtracting = true;
            console.log('Recebida solicitação para extrair apostas.');

            try {
                const data = await extractBets();
                console.log('Extração de apostas concluída.');

                if (port && port.sender && port.sender.tab) {
                    port.postMessage({ success: true, data });
                } else {
                    console.warn('Porta desconectada antes do envio dos dados.');
                }
                
                downloadCSV(data);
            } catch (error) {
                if (port && port.sender && port.sender.tab) {
                    port.postMessage({ success: false, error: error.message });
                } else {
                    console.warn('Porta desconectada antes do envio do erro.');
                }
            } finally {
                isExtracting = false;
                if (port && port.name === 'extractionChannel') {
                    try {
                        port.disconnect();
                        console.log('Porta "extractionChannel" desconectada.');
                    } catch (e) {
                        console.warn('Porta já estava desconectada.');
                    }
                }
            }
        }
    });

    port.onDisconnect.addListener(() => {
        console.log('Porta "extractionChannel" foi desconectada.');
        isExtracting = false;
    });
});

async function extractBets() {
    const bets = [];
    const betRows = document.querySelectorAll('tr.fn-bet-summary-record');

    console.log(`Encontrados ${betRows.length} registros de apostas.`);

    for (const betRow of betRows) {
        const selectionElement = betRow.querySelector('.selection');
        const selectionText = selectionElement ? selectionElement.innerText.trim() : '';
        console.log(`Texto da seleção: ${selectionText}`);

        const [prefix, rawOdds] = selectionText.split(' @');
        let odds = rawOdds ? rawOdds.trim() : '0.00';
        
        // Remove o ponto dos milhares e substitui a vírgula por ponto
        odds = odds.replace(/\./g, '').replace(',', '.');
        
        // Certifica-se de que a odd está em formato decimal
        if (!isNaN(parseFloat(odds))) {
            odds = parseFloat(odds).toFixed(2); // Garantindo duas casas decimais
        } else {
            console.warn("Formato de odd inválido:", odds);
            odds = "0.00"; // Valor padrão se a odd for inválida
        }
        
        console.log(`Prefixo extraído: ${prefix}`);
        console.log(`Odds extraídas e formatadas: ${odds}`);
        

        console.log(`Prefixo extraído: ${prefix}`);
        console.log(`Odds extraídas e formatadas: ${odds}`);

        const dateTimeElement = betRow.querySelector('.bet-summary-placement-date');
        const dateTime = dateTimeElement ? dateTimeElement.innerText.trim() : '';
        console.log(`Data/Hora encontrada: ${dateTime}`);

        const stakeElement = betRow.querySelector('.bet-summary-total-stake');
        const stakeText = stakeElement ? stakeElement.innerText.trim() : '';
        const stake = stakeText.replace(/[^\d,]/g, '').replace(',', '.');
        console.log(`Valor da aposta encontrado: ${stake}`);

        const returnElement = betRow.querySelector('.bet-summary-return .bet-summary-detail-amounts-return-value');
        const returnText = returnElement ? returnElement.innerText.trim() : '';
        const betReturn = returnText.replace('Retorno R$', '').replace(',', '.');
        console.log(`Retorno encontrado: ${betReturn}`);

        const betData = {
            date: dateTime,
            type: 'S',
            sport: 'eSport',
            label: prefix,
            odds: odds || '',  // Odds pode estar ausente, portanto garantir que a variável odds exista
            stake: stake,
            state: 'W',
            bookmaker: 'Bet365',
            tipster: '',
            category: 'ML',
            competition: '',
            betType: '',
            closing: '',
            comment: prefix,
            live: '',
            freebet: '',
            cashout: '',
            eachWay: '',
            extraDetails: betRow.getAttribute('data-betid')
        };

        console.log(`Aposta extraída: ${JSON.stringify(betData)}`);

        bets.push(betData);
    }

    const validBets = [];

    for (const bet of bets) {
        if (bet.extraDetails) {
            console.log(`Tentando extrair detalhes adicionais para aposta com ID: ${bet.extraDetails}`);
            try {
                const isValid = await clickAndExtractDetails(bet);
                if (isValid) {
                    validBets.push(bet);
                }
            } catch (error) {
                console.error(`Erro ao extrair detalhes adicionais para aposta ID ${bet.extraDetails}: ${error.message}`);
            }
        }
    }

    console.log(`Total de apostas válidas extraídas: ${validBets.length}`);
    return validBets.map(formatBetData);
}

async function clickAndExtractDetails(bet) {
    const detailsButton = document.querySelector(`tr[data-betid="${bet.extraDetails}"] .fn-sports-show-bet-confirmation`);

    if (!detailsButton) {
        throw new Error(`Botão de detalhes não encontrado para a aposta com ID: ${bet.extraDetails}`);
    }

    console.log(`Clicando no botão de detalhes para a aposta ID: ${bet.extraDetails}`);
    detailsButton.click();

    await new Promise(resolve => setTimeout(resolve, 7000)); // Aumentado para 6 segundos

    const detailsSelector = `tr.bet-summary-bet-confirmation-area[data-betid="${bet.extraDetails}"]`;
    let detailsRow;

    try {
        detailsRow = await waitForElement(detailsSelector, 9000); // Aguardar até 9 segundos
    } catch (error) {
        throw new Error(`Timeout esperando pelos detalhes da aposta com ID: ${bet.extraDetails}`);
    }

    if (!detailsRow || detailsRow.style.display === 'none') {
        throw new Error(`Detalhes não carregados corretamente para a aposta com ID: ${bet.extraDetails}`);
    }

    console.log(`Detalhes da aposta carregados para ID: ${bet.extraDetails}`);

    const resultElement = detailsRow.querySelector('.bet-confirmation-table-body-result');
    const resultText = resultElement ? resultElement.innerText.trim() : '';
    console.log(`Resultado da aposta: ${resultText}`);

    if (resultText === 'Anulado') {
        console.log(`Aposta ID: ${bet.extraDetails} foi anulada e será ignorada.`);
        return false;  // Ignorar apostas anuladas
    }

    let eventText = '';
    let selectionsText = '';

    // Lógica específica para casos simples
    const eventElement = detailsRow.querySelector('.bet-confirmation-table-body-event');
    const selectionElement = detailsRow.querySelector('.bet-confirmation-table-body-selections');

    if (eventElement && selectionElement) {
        eventText = eventElement.innerText.trim().replace(/\n/g, ' ');
        selectionsText = selectionElement.innerText.trim().replace(/\n/g, ' ');
    } else {
        // Lógica alternativa, caso seja um cenário mais complexo
        const eventElementAlt = detailsRow.querySelector('.events-header span');
        const selectionElementsAlt = detailsRow.querySelectorAll('.selection-wrap .selection');

        if (eventElementAlt) {
            eventText = eventElementAlt.innerText.trim().replace(/\n/g, ' ');
        }

        selectionElementsAlt.forEach(element => {
            const text = element.innerText.trim().replace(/\n/g, ' ');
            if (text) {
                selectionsText += text + ' - ';
            }
        });

        selectionsText = selectionsText.slice(0, -3); // Remover o último ' - '
    }

    const concatenatedText = `${eventText} - ${selectionsText}`.trim().replace(/\s+/g, ' ');
    console.log(`Texto concatenado (evento + seleções): ${concatenatedText}`);

    // Concatenar o label com o evento e limitar a 100 caracteres
    bet.label = concatenatedText.length > 100 ? concatenatedText.substring(0, 100) + '...' : concatenatedText;
    
    // Atualizar o comentário com o texto completo (sem limitação)
    bet.comment = concatenatedText;

    // Definir a categoria com base na presença da palavra "vencedor"
    if (concatenatedText.toLowerCase().includes('vencedor')) {
        bet.category = 'ML';
    } else {
        bet.category = 'MS';
    }

    const oddsElement = detailsRow.querySelector('.bet-confirmation-table-body-odds div');
    if (oddsElement) {
        let odds = oddsElement.innerText.trim();

        // Remove o ponto dos milhares e substitui a vírgula por ponto
        odds = odds.replace(/\./g, '').replace(',', '.');

        // Certifica-se de que a odd está em formato decimal
        if (!isNaN(parseFloat(odds))) {
            odds = parseFloat(odds).toFixed(2); // Garantindo duas casas decimais
        } else {
            console.warn("Formato de odd inválido:", odds);
            odds = "0.00"; // Valor padrão se a odd for inválida
        }

        bet.odds = odds;
        console.log(`Odds atualizada para: ${bet.odds}`);
    }

    if (resultText === 'Perdeu' || bet.comment.includes('0.00')) {
        bet.state = 'L';
    } else {
        bet.state = 'W';
    }

    console.log(`Estado atualizado da aposta: ${bet.state}`);

    return true;
}

function waitForElement(selector, timeout = 10000) {
    return new Promise((resolve, reject) => {
        const interval = 100;
        const endTime = Date.now() + timeout;

        function check() {
            const element = document.querySelector(selector);
            if (element) {
                resolve(element);
            } else if (Date.now() > endTime) {
                reject(new Error(`Timeout esperando pelo elemento: ${selector}`));
            } else {
                setTimeout(check, interval);
            }
        }

        check();
    });
}

function formatBetData(bet) {
    const formattedBet = [
        bet.date,
        bet.type,
        bet.sport,
        bet.label,
        bet.odds,
        bet.stake,
        bet.state,
        bet.bookmaker,
        bet.tipster,
        bet.category,
        bet.competition,
        bet.betType,
        bet.closing,
        bet.comment,
        bet.live,
        bet.freebet,
        bet.cashout,
        bet.eachWay
    ].join(';');

    console.log(`Aposta formatada para CSV: ${formattedBet}`);
    return formattedBet;
}

function downloadCSV(data) {
    if (!data || !Array.isArray(data)) {
        console.error('Dados inválidos para o download do CSV.');
        return;
    }

    const csvHeader = "Date;Type;Sport;Label;Odds;Stake;State;Bookmaker;Tipster;Category;Competition;BetType;Closing;Comment;Live;Freebet;Cashout;EachWay";
    const csvContent = [csvHeader, ...data].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `bets_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(link);

    console.log('Iniciando o download do CSV.');
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    console.log('Download do CSV concluído.');
}
