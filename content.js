// content.js

let isExtracting = false;

// Declarar stakeToTipster no escopo global
const stakeToTipster = {
    // Mapeamentos para 'Cabreloa' - Esporte: Futebol
    '12.26': { tipster: 'Cabreloa', sport: 'Futebol' },
    '9.26': { tipster: 'Cabreloa', sport: 'Futebol' },
    '6.13': { tipster: 'Cabreloa', sport: 'Futebol' },
    '4.13': { tipster: 'Cabreloa', sport: 'Futebol' },
    '3.13': { tipster: 'Cabreloa', sport: 'Futebol' },
    '2.13': { tipster: 'Cabreloa', sport: 'Futebol' },
    '1.13': { tipster: 'Cabreloa', sport: 'Futebol' },
    '0.93': { tipster: 'Cabreloa', sport: 'Futebol' },

    // Mapeamentos para 'Bluzera Tips (FREE)' - Esporte: Esports
    '12.7': { tipster: 'Bluzera Tips (FREE)', sport: 'Esports' },
    '9.7': { tipster: 'Bluzera Tips (FREE)', sport: 'Esports' },
    '6.35': { tipster: 'Bluzera Tips (FREE)', sport: 'Esports' },
    '4.35': { tipster: 'Bluzera Tips (FREE)', sport: 'Esports' },
    '3.35': { tipster: 'Bluzera Tips (FREE)', sport: 'Esports' },
    '2.35': { tipster: 'Bluzera Tips (FREE)', sport: 'Esports' },
    '1.35': { tipster: 'Bluzera Tips (FREE)', sport: 'Esports' },
    '1.15': { tipster: 'Bluzera Tips (FREE)', sport: 'Esports' },

    // Mapeamentos para 'Iago Garcia Props' - Esporte: Futebol
    '12.04': { tipster: 'Iago Garcia Props', sport: 'Futebol' },
    '9.04': { tipster: 'Iago Garcia Props', sport: 'Futebol' },
    '6.02': { tipster: 'Iago Garcia Props', sport: 'Futebol' },
    '4.02': { tipster: 'Iago Garcia Props', sport: 'Futebol' },
    '3.02': { tipster: 'Iago Garcia Props', sport: 'Futebol' },
    '2.02': { tipster: 'Iago Garcia Props', sport: 'Futebol' },
    '1.02': { tipster: 'Iago Garcia Props', sport: 'Futebol' },
    '0.82': { tipster: 'Iago Garcia Props', sport: 'Futebol' },

    // Mapeamentos para 'Vip Rei Milionário' - Esporte: Futebol
    '12.06': { tipster: 'Vip Rei Milionário', sport: 'Futebol' },
    '9.06': { tipster: 'Vip Rei Milionário', sport: 'Futebol' },
    '6.03': { tipster: 'Vip Rei Milionário', sport: 'Futebol' },
    '4.03': { tipster: 'Vip Rei Milionário', sport: 'Futebol' },
    '3.03': { tipster: 'Vip Rei Milionário', sport: 'Futebol' },
    '2.03': { tipster: 'Vip Rei Milionário', sport: 'Futebol' },
    '1.03': { tipster: 'Vip Rei Milionário', sport: 'Futebol' },
    '0.83': { tipster: 'Vip Rei Milionário', sport: 'Futebol' },

    // Mapeamentos para 'VIP ALAVANCAGEM TIPS (VIP)' - Esporte: Futebol
    '12.08': { tipster: 'VIP ALAVANCAGEM TIPS (VIP)', sport: 'Futebol' },
    '9.08': { tipster: 'VIP ALAVANCAGEM TIPS (VIP)', sport: 'Futebol' },
    '6.04': { tipster: 'VIP ALAVANCAGEM TIPS (VIP)', sport: 'Futebol' },
    '4.04': { tipster: 'VIP ALAVANCAGEM TIPS (VIP)', sport: 'Futebol' },
    '3.04': { tipster: 'VIP ALAVANCAGEM TIPS (VIP)', sport: 'Futebol' },
    '2.04': { tipster: 'VIP ALAVANCAGEM TIPS (VIP)', sport: 'Futebol' },
    '1.04': { tipster: 'VIP ALAVANCAGEM TIPS (VIP)', sport: 'Futebol' },
    '0.84': { tipster: 'VIP ALAVANCAGEM TIPS (VIP)', sport: 'Futebol' },


    // Mapeamentos para 'Rei das Tips Odds Alta' - Esporte: Futebol
    '12.1': { tipster: 'Rei das Tips Odds Alta', sport: 'Futebol' },
    '9.1': { tipster: 'Rei das Tips Odds Alta', sport: 'Futebol' },
    '6.05': { tipster: 'Rei das Tips Odds Alta', sport: 'Futebol' },
    '4.05': { tipster: 'Rei das Tips Odds Alta', sport: 'Futebol' },
    '3.05': { tipster: 'Rei das Tips Odds Alta', sport: 'Futebol' },
    '2.05': { tipster: 'Rei das Tips Odds Alta', sport: 'Futebol' },
    '1.05': { tipster: 'Rei das Tips Odds Alta', sport: 'Futebol' },
    '0.85': { tipster: 'Rei das Tips Odds Alta', sport: 'Futebol' },

    // Mapeamentos para 'GreenTips Free' - Esporte: Futebol
    '12.12': { tipster: 'GreenTips Free', sport: 'Futebol' },
    '9.12': { tipster: 'GreenTips Free', sport: 'Futebol' },
    '6.06': { tipster: 'GreenTips Free', sport: 'Futebol' },
    '4.06': { tipster: 'GreenTips Free', sport: 'Futebol' },
    '3.06': { tipster: 'GreenTips Free', sport: 'Futebol' },
    '2.06': { tipster: 'GreenTips Free', sport: 'Futebol' },
    '1.06': { tipster: 'GreenTips Free', sport: 'Futebol' },
    '0.86': { tipster: 'GreenTips Free', sport: 'Futebol' },

    // Mapeamentos para 'Otti Bets' - Esporte: Futebol
    '12.14': { tipster: 'Otti Bets', sport: 'Futebol' },
    '9.14': { tipster: 'Otti Bets', sport: 'Futebol' },
    '6.07': { tipster: 'Otti Bets', sport: 'Futebol' },
    '4.07': { tipster: 'Otti Bets', sport: 'Futebol' },
    '3.07': { tipster: 'Otti Bets', sport: 'Futebol' },
    '2.07': { tipster: 'Otti Bets', sport: 'Futebol' },
    '1.07': { tipster: 'Otti Bets', sport: 'Futebol' },
    '0.87': { tipster: 'Otti Bets', sport: 'Futebol' },

    // Mapeamentos para 'Bingos Stk' - Esporte: Futebol
    '12.16': { tipster: 'Bingos Stk', sport: 'Futebol' },
    '9.16': { tipster: 'Bingos Stk', sport: 'Futebol' },
    '6.08': { tipster: 'Bingos Stk', sport: 'Futebol' },
    '4.08': { tipster: 'Bingos Stk', sport: 'Futebol' },
    '3.08': { tipster: 'Bingos Stk', sport: 'Futebol' },
    '2.08': { tipster: 'Bingos Stk', sport: 'Futebol' },
    '1.08': { tipster: 'Bingos Stk', sport: 'Futebol' },
    '0.88': { tipster: 'Bingos Stk', sport: 'Futebol' },

    // Mapeamentos para 'STK - VIP FUTEBOL' - Esporte: Futebol
    '12.68': { tipster: 'STK - VIP FUTEBOL', sport: 'Futebol' },
    '9.68': { tipster: 'STK - VIP FUTEBOL', sport: 'Futebol' },
    '6.34': { tipster: 'STK - VIP FUTEBOL', sport: 'Futebol' },
    '4.34': { tipster: 'STK - VIP FUTEBOL', sport: 'Futebol' },
    '3.34': { tipster: 'STK - VIP FUTEBOL', sport: 'Futebol' },
    '2.34': { tipster: 'STK - VIP FUTEBOL', sport: 'Futebol' },
    '1.34': { tipster: 'STK - VIP FUTEBOL', sport: 'Futebol' },
    '1.14': { tipster: 'STK - VIP FUTEBOL', sport: 'Futebol' },

    // Mapeamentos para 'Leozin Tips Props' - Esporte: Futebol
    '12.36': { tipster: 'Leozin Tips Props', sport: 'Futebol' },
    '9.36': { tipster: 'Leozin Tips Props', sport: 'Futebol' },
    '6.18': { tipster: 'Leozin Tips Props', sport: 'Futebol' },
    '4.18': { tipster: 'Leozin Tips Props', sport: 'Futebol' },
    '3.18': { tipster: 'Leozin Tips Props', sport: 'Futebol' },
    '2.18': { tipster: 'Leozin Tips Props', sport: 'Futebol' },
    '1.18': { tipster: 'Leozin Tips Props', sport: 'Futebol' },
    '0.98': { tipster: 'Leozin Tips Props', sport: 'Futebol' },

    // Mapeamentos para 'Cabreloa Europa' - Esporte: Futebol
    '12.26': { tipster: 'Cabreloa Europa', sport: 'Futebol' },
    '9.26': { tipster: 'Cabreloa Europa', sport: 'Futebol' },
    '6.13': { tipster: 'Cabreloa Europa', sport: 'Futebol' },
    '4.13': { tipster: 'Cabreloa Europa', sport: 'Futebol' },
    '3.13': { tipster: 'Cabreloa Europa', sport: 'Futebol' },
    '2.13': { tipster: 'Cabreloa Europa', sport: 'Futebol' },
    '1.13': { tipster: 'Cabreloa Europa', sport: 'Futebol' },
    '0.93': { tipster: 'Cabreloa Europa', sport: 'Futebol' },

    // Mapeamentos para 'DiKa Tip's' - Esporte: Futebol
    '12.62': { tipster: "DiKa Tip's", sport: 'Futebol' },
    '9.62': { tipster: "DiKa Tip's", sport: 'Futebol' },
    '6.31': { tipster: "DiKa Tip's", sport: 'Futebol' },
    '4.31': { tipster: "DiKa Tip's", sport: 'Futebol' },
    '3.31': { tipster: "DiKa Tip's", sport: 'Futebol' },
    '2.31': { tipster: "DiKa Tip's", sport: 'Futebol' },
    '1.31': { tipster: "DiKa Tip's", sport: 'Futebol' },
    '1.11': { tipster: "DiKa Tip's", sport: 'Futebol' },

    // Mapeamentos para 'sout0 TIPS' - Esporte: Futebol
    '12.76': { tipster: 'sout0 TIPS', sport: 'Futebol' },
    '9.76': { tipster: 'sout0 TIPS', sport: 'Futebol' },
    '6.38': { tipster: 'sout0 TIPS', sport: 'Futebol' },
    '4.38': { tipster: 'sout0 TIPS', sport: 'Futebol' },
    '3.38': { tipster: 'sout0 TIPS', sport: 'Futebol' },
    '2.38': { tipster: 'sout0 TIPS', sport: 'Futebol' },
    '1.38': { tipster: 'sout0 TIPS', sport: 'Futebol' },
    '1.18': { tipster: 'sout0 TIPS', sport: 'Futebol' },

    // Mapeamentos para 'VF Tips' - Esporte: Futebol
    '12.78': { tipster: 'VF Tips', sport: 'Futebol' },
    '9.78': { tipster: 'VF Tips', sport: 'Futebol' },
    '6.39': { tipster: 'VF Tips', sport: 'Futebol' },
    '4.39': { tipster: 'VF Tips', sport: 'Futebol' },
    '3.39': { tipster: 'VF Tips', sport: 'Futebol' },
    '2.39': { tipster: 'VF Tips', sport: 'Futebol' },
    '1.39': { tipster: 'VF Tips', sport: 'Futebol' },
    '1.19': { tipster: 'VF Tips', sport: 'Futebol' },

    // Mapeamentos para 'LeozinTipsBot' - Esporte: Futebol
    '12.74': { tipster: 'LeozinTipsBot', sport: 'Futebol' },
    '9.74': { tipster: 'LeozinTipsBot', sport: 'Futebol' },
    '6.37': { tipster: 'LeozinTipsBot', sport: 'Futebol' },
    '4.37': { tipster: 'LeozinTipsBot', sport: 'Futebol' },
    '3.37': { tipster: 'LeozinTipsBot', sport: 'Futebol' },
    '2.37': { tipster: 'LeozinTipsBot', sport: 'Futebol' },
    '1.37': { tipster: 'LeozinTipsBot', sport: 'Futebol' },
    '1.17': { tipster: 'LeozinTipsBot', sport: 'Futebol' },

    // Mapeamentos para 'LirouTips' - Esporte: Futebol
    '12.28': { tipster: 'LirouTips', sport: 'Futebol' },
    '9.28': { tipster: 'LirouTips', sport: 'Futebol' },
    '6.14': { tipster: 'LirouTips', sport: 'Futebol' },
    '4.14': { tipster: 'LirouTips', sport: 'Futebol' },
    '3.14': { tipster: 'LirouTips', sport: 'Futebol' },
    '2.14': { tipster: 'LirouTips', sport: 'Futebol' },
    '1.14': { tipster: 'LirouTips', sport: 'Futebol' },
    '0.94': { tipster: 'LirouTips', sport: 'Futebol' },

    // Mapeamentos para 'Kutter Tips NFL - Free' - Esporte: Futebol Americano
    '12.38': { tipster: 'Kutter Tips NFL - Free', sport: 'Futebol Americano' },
    '9.38': { tipster: 'Kutter Tips NFL - Free', sport: 'Futebol Americano' },
    '6.19': { tipster: 'Kutter Tips NFL - Free', sport: 'Futebol Americano' },
    '4.19': { tipster: 'Kutter Tips NFL - Free', sport: 'Futebol Americano' },
    '3.19': { tipster: 'Kutter Tips NFL - Free', sport: 'Futebol Americano' },
    '2.19': { tipster: 'Kutter Tips NFL - Free', sport: 'Futebol Americano' },
    '1.19': { tipster: 'Kutter Tips NFL - Free', sport: 'Futebol Americano' },
    '0.99': { tipster: 'Kutter Tips NFL - Free', sport: 'Futebol Americano' },

    // Mapeamentos para 'PROPS [NFL] | Fábio Guilherme' - Esporte: Futebol Americano
    '12.64': { tipster: 'PROPS [NFL] | Fábio Guilherme', sport: 'Futebol Americano' },
    '9.64': { tipster: 'PROPS [NFL] | Fábio Guilherme', sport: 'Futebol Americano' },
    '6.32': { tipster: 'PROPS [NFL] | Fábio Guilherme', sport: 'Futebol Americano' },
    '4.32': { tipster: 'PROPS [NFL] | Fábio Guilherme', sport: 'Futebol Americano' },
    '3.32': { tipster: 'PROPS [NFL] | Fábio Guilherme', sport: 'Futebol Americano' },
    '2.32': { tipster: 'PROPS [NFL] | Fábio Guilherme', sport: 'Futebol Americano' },
    '1.32': { tipster: 'PROPS [NFL] | Fábio Guilherme', sport: 'Futebol Americano' },
    '1.12': { tipster: 'PROPS [NFL] | Fábio Guilherme', sport: 'Futebol Americano' },

    // Mapeamentos para 'NFL | Fábio Guilherme' - Esporte: Futebol Americano
    '12.66': { tipster: 'NFL | Fábio Guilherme', sport: 'Futebol Americano' },
    '9.66': { tipster: 'NFL | Fábio Guilherme', sport: 'Futebol Americano' },
    '6.33': { tipster: 'NFL | Fábio Guilherme', sport: 'Futebol Americano' },
    '4.33': { tipster: 'NFL | Fábio Guilherme', sport: 'Futebol Americano' },
    '3.33': { tipster: 'NFL | Fábio Guilherme', sport: 'Futebol Americano' },
    '2.33': { tipster: 'NFL | Fábio Guilherme', sport: 'Futebol Americano' },
    '1.33': { tipster: 'NFL | Fábio Guilherme', sport: 'Futebol Americano' },
    '1.13': { tipster: 'NFL | Fábio Guilherme', sport: 'Futebol Americano' },

    // Mapeamentos para 'Rei do college/NFL football' - Esporte: Futebol Americano
    '12.84': { tipster: 'Rei do college/NFL football', sport: 'Futebol Americano' },
    '9.84': { tipster: 'Rei do college/NFL football', sport: 'Futebol Americano' },
    '6.42': { tipster: 'Rei do college/NFL football', sport: 'Futebol Americano' },
    '4.42': { tipster: 'Rei do college/NFL football', sport: 'Futebol Americano' },
    '3.42': { tipster: 'Rei do college/NFL football', sport: 'Futebol Americano' },
    '2.42': { tipster: 'Rei do college/NFL football', sport: 'Futebol Americano' },
    '1.42': { tipster: 'Rei do college/NFL football', sport: 'Futebol Americano' },

    // Mapeamentos para 'Raphael Schon - NBA Vip' - Esporte: Basquetebol
    '12.18': { tipster: 'Raphael Schon - NBA Vip', sport: 'Basquetebol' },
    '9.18': { tipster: 'Raphael Schon - NBA Vip', sport: 'Basquetebol' },
    '6.09': { tipster: 'Raphael Schon - NBA Vip', sport: 'Basquetebol' },
    '4.09': { tipster: 'Raphael Schon - NBA Vip', sport: 'Basquetebol' },
    '3.09': { tipster: 'Raphael Schon - NBA Vip', sport: 'Basquetebol' },
    '2.09': { tipster: 'Raphael Schon - NBA Vip', sport: 'Basquetebol' },
    '1.09': { tipster: 'Raphael Schon - NBA Vip', sport: 'Basquetebol' },
    '0.89': { tipster: 'Raphael Schon - NBA Vip', sport: 'Basquetebol' },

    // Mapeamentos para 'Leozin Tips Nba' - Esporte: Basquetebol
    '12.2': { tipster: 'Leozin Tips Nba', sport: 'Basquetebol' },
    '9.2': { tipster: 'Leozin Tips Nba', sport: 'Basquetebol' },
    '6.1': { tipster: 'Leozin Tips Nba', sport: 'Basquetebol' },
    '4.1': { tipster: 'Leozin Tips Nba', sport: 'Basquetebol' },
    '3.1': { tipster: 'Leozin Tips Nba', sport: 'Basquetebol' },
    '2.1': { tipster: 'Leozin Tips Nba', sport: 'Basquetebol' },
    '1.1': { tipster: 'Leozin Tips Nba', sport: 'Basquetebol' },
    '0.9': { tipster: 'Leozin Tips Nba', sport: 'Basquetebol' },

    // Mapeamentos para 'CABRELOA - NBA' - Esporte: Basquetebol
    '12.6': { tipster: 'CABRELOA - NBA', sport: 'Basquetebol' },
    '9.6': { tipster: 'CABRELOA - NBA', sport: 'Basquetebol' },
    '6.3': { tipster: 'CABRELOA - NBA', sport: 'Basquetebol' },
    '4.3': { tipster: 'CABRELOA - NBA', sport: 'Basquetebol' },
    '3.3': { tipster: 'CABRELOA - NBA', sport: 'Basquetebol' },
    '2.3': { tipster: 'CABRELOA - NBA', sport: 'Basquetebol' },
    '1.3': { tipster: 'CABRELOA - NBA', sport: 'Basquetebol' },
    '1.1': { tipster: 'CABRELOA - NBA', sport: 'Basquetebol' },

    // Mapeamentos para 'NBA - Pre Leozin Tips' - Esporte: Basquetebol
    '12.8': { tipster: 'NBA - Pre Leozin Tips', sport: 'Basquetebol' },
    '9.8': { tipster: 'NBA - Pre Leozin Tips', sport: 'Basquetebol' },
    '6.4': { tipster: 'NBA - Pre Leozin Tips', sport: 'Basquetebol' },
    '4.4': { tipster: 'NBA - Pre Leozin Tips', sport: 'Basquetebol' },
    '3.4': { tipster: 'NBA - Pre Leozin Tips', sport: 'Basquetebol' },
    '2.4': { tipster: 'NBA - Pre Leozin Tips', sport: 'Basquetebol' },
    '1.4': { tipster: 'NBA - Pre Leozin Tips', sport: 'Basquetebol' },

    // Mapeamentos para 'NBA - Leozin Tips' - Esporte: Basquetebol
    '12.82': { tipster: 'NBA - Leozin Tips', sport: 'Basquetebol' },
    '9.82': { tipster: 'NBA - Leozin Tips', sport: 'Basquetebol' },
    '6.41': { tipster: 'NBA - Leozin Tips', sport: 'Basquetebol' },
    '4.41': { tipster: 'NBA - Leozin Tips', sport: 'Basquetebol' },
    '3.41': { tipster: 'NBA - Leozin Tips', sport: 'Basquetebol' },
    '2.41': { tipster: 'NBA - Leozin Tips', sport: 'Basquetebol' },
    '1.41': { tipster: 'NBA - Leozin Tips', sport: 'Basquetebol' },


    // Outros mapeamentos...

    // Inclua todos os outros mapeamentos aqui...
};

// Função para buscar tipster e esporte com valor de stake
function getTipsterInfo(stakeValue) {
    // Caso o valor de stake seja encontrado no mapeamento
    if (stakeToTipster[stakeValue]) {
        return stakeToTipster[stakeValue];
    }

    // Caso não seja encontrado, retorna tipster e esporte como "Outros" e "Outro esporte"
    return { tipster: 'Outros', sport: 'Outro esporte' };
}

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

            isExtracting = true; // Aqui apenas atribuímos o valor a uma variável já declarada
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
                isExtracting = false; // Variável é reutilizada, não declarada novamente
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

    // Exibir o número total de apostas encontradas na página
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

        const dateTimeElement = betRow.querySelector('.bet-summary-placement-date');
        const dateTime = dateTimeElement ? dateTimeElement.innerText.trim() : '';
        console.log(`Data/Hora encontrada: ${dateTime}`);

        const stakeElement = betRow.querySelector('.bet-summary-total-stake');
        const stakeText = stakeElement ? stakeElement.innerText.trim() : '';
        const stake = stakeText.replace(/[^\d,]/g, '').replace(',', '.');
        console.log(`Valor da aposta encontrado: ${stake}`);

        // Usar 'stake' ao invés de 'stakeValue'
        let tipsterInfo = getTipsterInfo(stake);

        const returnElement = betRow.querySelector('.bet-summary-return .bet-summary-detail-amounts-return-value');
        const returnText = returnElement ? returnElement.innerText.trim() : '';
        const betReturn = returnText.replace('Retorno R$', '').replace(',', '.');
        console.log(`Retorno encontrado: ${betReturn}`);

        const betData = {
            date: dateTime,
            type: 'S',
            sport: tipsterInfo.sport, // Define o esporte
            label: prefix,
            odds: odds || '',  // Odds pode estar ausente, portanto garantir que a variável odds exista
            stake: stake,
            state: 'W',
            bookmaker: 'Bet365',
            tipster: tipsterInfo.tipster, // Inclua o tipster aqui
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
    const invalidBets = [];

    for (const bet of bets) {
        if (bet.extraDetails) {
            console.log(`Tentando extrair detalhes adicionais para aposta com ID: ${bet.extraDetails}`);
            try {
                const isValid = await clickAndExtractDetails(bet);
                if (isValid) {
                    validBets.push(bet);
                }
            } catch (error) {
                invalidBets.push({
                    betId: bet.extraDetails,
                    reason: error.message,
                    betData: bet
                });
                console.error(`Erro ao extrair detalhes adicionais para aposta ID ${bet.extraDetails}: ${error.message}`);
            }
        } else {
            invalidBets.push({
                betId: 'N/A',
                reason: 'ID da aposta não encontrado',
                betData: bet
            });
            console.warn(`Aposta sem ID de detalhes: ${JSON.stringify(bet)}`);
        }
    }

    // Exibir quantas apostas foram extraídas com sucesso e quantas falharam
    console.log(`Total de apostas válidas extraídas: ${validBets.length}`);
    console.log(`Total de apostas falhas/não extraídas: ${invalidBets.length}`);

    return validBets.map(formatBetData);
}

async function clickAndExtractDetails(bet) {
    const detailsButton = document.querySelector(`tr[data-betid="${bet.extraDetails}"] .fn-sports-show-bet-confirmation`);

    if (!detailsButton) {
        throw new Error(`Botão de detalhes não encontrado para a aposta com ID: ${bet.extraDetails}`);
    }

    console.log(`Clicando no botão de detalhes para a aposta ID: ${bet.extraDetails}`);
    detailsButton.click();

    await new Promise(resolve => setTimeout(resolve, 7000)); // Aumentado para 7 segundos

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
        bet.category = ''; // removido ML
    } else {
        bet.category = ''; // removido MS
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
