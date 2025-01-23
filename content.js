/********************************************************
 * content.js - Exemplo Completo
 * 
 * - Define 'isExtracting' apenas uma vez no escopo global.
 * - Traz stakeToTipster COMPLETO conforme solicitado.
 * - Trata "meio ganho" (Half-Win) em apostas.
 * - Diferencia apostas simples e múltiplas (“Criar Aposta”)
 *   para capturar corretamente o "Retorno" final.
 ********************************************************/

// Variável global, declarada uma única vez:
let isExtracting = false;

// -------------------------------------------------------
// 1) Mapeamentos stake -> { tipster, sport } (Completo)
// -------------------------------------------------------
const stakeToTipster = {
    // Mapeamentos para 'Cabreloa' - Esporte: Futebol
    '12.26': { tipster: 'Cabreloa', sport: 'Futebol' },
    '9.26':  { tipster: 'Cabreloa', sport: 'Futebol' },
    '6.13':  { tipster: 'Cabreloa', sport: 'Futebol' },
    '4.13':  { tipster: 'Cabreloa', sport: 'Futebol' },
    '3.13':  { tipster: 'Cabreloa', sport: 'Futebol' },
    '2.13':  { tipster: 'Cabreloa', sport: 'Futebol' },
    '1.13':  { tipster: 'Cabreloa', sport: 'Futebol' },
    '0.93':  { tipster: 'Cabreloa', sport: 'Futebol' },

    // Mapeamentos para 'Bluzera Tips (FREE)' - Esporte: Esports
    '12.7':  { tipster: 'Bluzera Tips (FREE)', sport: 'Esports' },
    '9.7':   { tipster: 'Bluzera Tips (FREE)', sport: 'Esports' },
    '6.35':  { tipster: 'Bluzera Tips (FREE)', sport: 'Esports' },
    '4.35':  { tipster: 'Bluzera Tips (FREE)', sport: 'Esports' },
    '3.35':  { tipster: 'Bluzera Tips (FREE)', sport: 'Esports' },
    '2.35':  { tipster: 'Bluzera Tips (FREE)', sport: 'Esports' },
    '1.35':  { tipster: 'Bluzera Tips (FREE)', sport: 'Esports' },
    '1.15':  { tipster: 'Bluzera Tips (FREE)', sport: 'Esports' },

    // Mapeamentos para 'Iago Garcia Props' - Esporte: Futebol
    '12.04': { tipster: 'Iago Garcia Props', sport: 'Futebol' },
    '9.04':  { tipster: 'Iago Garcia Props', sport: 'Futebol' },
    '6.02':  { tipster: 'Iago Garcia Props', sport: 'Futebol' },
    '4.02':  { tipster: 'Iago Garcia Props', sport: 'Futebol' },
    '3.02':  { tipster: 'Iago Garcia Props', sport: 'Futebol' },
    '2.02':  { tipster: 'Iago Garcia Props', sport: 'Futebol' },
    '1.02':  { tipster: 'Iago Garcia Props', sport: 'Futebol' },
    '0.82':  { tipster: 'Iago Garcia Props', sport: 'Futebol' },

    // Mapeamentos para 'Vip Rei Milionário' - Esporte: Futebol
    '12.06': { tipster: 'Vip Rei Milionário', sport: 'Futebol' },
    '9.06':  { tipster: 'Vip Rei Milionário', sport: 'Futebol' },
    '6.03':  { tipster: 'Vip Rei Milionário', sport: 'Futebol' },
    '4.03':  { tipster: 'Vip Rei Milionário', sport: 'Futebol' },
    '3.03':  { tipster: 'Vip Rei Milionário', sport: 'Futebol' },
    '2.03':  { tipster: 'Vip Rei Milionário', sport: 'Futebol' },
    '1.03':  { tipster: 'Vip Rei Milionário', sport: 'Futebol' },
    '0.83':  { tipster: 'Vip Rei Milionário', sport: 'Futebol' },

    // Mapeamentos para 'VIP ALAVANCAGEM TIPS (VIP)' - Esporte: Futebol
    '12.08': { tipster: 'VIP ALAVANCAGEM TIPS (VIP)', sport: 'Futebol' },
    '9.08':  { tipster: 'VIP ALAVANCAGEM TIPS (VIP)', sport: 'Futebol' },
    '6.04':  { tipster: 'VIP ALAVANCAGEM TIPS (VIP)', sport: 'Futebol' },
    '4.04':  { tipster: 'VIP ALAVANCAGEM TIPS (VIP)', sport: 'Futebol' },
    '3.04':  { tipster: 'VIP ALAVANCAGEM TIPS (VIP)', sport: 'Futebol' },
    '2.04':  { tipster: 'VIP ALAVANCAGEM TIPS (VIP)', sport: 'Futebol' },
    '1.04':  { tipster: 'VIP ALAVANCAGEM TIPS (VIP)', sport: 'Futebol' },
    '0.84':  { tipster: 'VIP ALAVANCAGEM TIPS (VIP)', sport: 'Futebol' },

    // Mapeamentos para 'Rei das Tips Odds Alta' - Esporte: Futebol
    '12.1':  { tipster: 'Rei das Tips Odds Alta', sport: 'Futebol' },
    '9.1':   { tipster: 'Rei das Tips Odds Alta', sport: 'Futebol' },
    '6.05':  { tipster: 'Rei das Tips Odds Alta', sport: 'Futebol' },
    '4.05':  { tipster: 'Rei das Tips Odds Alta', sport: 'Futebol' },
    '3.05':  { tipster: 'Rei das Tips Odds Alta', sport: 'Futebol' },
    '2.05':  { tipster: 'Rei das Tips Odds Alta', sport: 'Futebol' },
    '1.05':  { tipster: 'Rei das Tips Odds Alta', sport: 'Futebol' },
    '0.85':  { tipster: 'Rei das Tips Odds Alta', sport: 'Futebol' },

    // Mapeamentos para 'GreenTips Free' - Esporte: Futebol
    '12.12': { tipster: 'GreenTips Free', sport: 'Futebol' },
    '9.12':  { tipster: 'GreenTips Free', sport: 'Futebol' },
    '6.06':  { tipster: 'GreenTips Free', sport: 'Futebol' },
    '4.06':  { tipster: 'GreenTips Free', sport: 'Futebol' },
    '3.06':  { tipster: 'GreenTips Free', sport: 'Futebol' },
    '2.06':  { tipster: 'GreenTips Free', sport: 'Futebol' },
    '1.06':  { tipster: 'GreenTips Free', sport: 'Futebol' },
    '0.86':  { tipster: 'GreenTips Free', sport: 'Futebol' },

    // Mapeamentos para 'Otti Bets' - Esporte: Futebol
    '12.14': { tipster: 'Otti Bets', sport: 'Futebol' },
    '9.14':  { tipster: 'Otti Bets', sport: 'Futebol' },
    '6.07':  { tipster: 'Otti Bets', sport: 'Futebol' },
    '4.07':  { tipster: 'Otti Bets', sport: 'Futebol' },
    '3.07':  { tipster: 'Otti Bets', sport: 'Futebol' },
    '2.07':  { tipster: 'Otti Bets', sport: 'Futebol' },
    '1.07':  { tipster: 'Otti Bets', sport: 'Futebol' },
    '0.87':  { tipster: 'Otti Bets', sport: 'Futebol' },

    // Mapeamentos para 'Bingos Stk' - Esporte: Futebol
    '12.16': { tipster: 'Bingos Stk', sport: 'Futebol' },
    '9.16':  { tipster: 'Bingos Stk', sport: 'Futebol' },
    '6.08':  { tipster: 'Bingos Stk', sport: 'Futebol' },
    '4.08':  { tipster: 'Bingos Stk', sport: 'Futebol' },
    '3.08':  { tipster: 'Bingos Stk', sport: 'Futebol' },
    '2.08':  { tipster: 'Bingos Stk', sport: 'Futebol' },
    '1.08':  { tipster: 'Bingos Stk', sport: 'Futebol' },
    '0.88':  { tipster: 'Bingos Stk', sport: 'Futebol' },

    // Mapeamentos para 'STK - VIP FUTEBOL' - Esporte: Futebol
    '12.68': { tipster: 'STK - VIP FUTEBOL', sport: 'Futebol' },
    '9.68':  { tipster: 'STK - VIP FUTEBOL', sport: 'Futebol' },
    '6.34':  { tipster: 'STK - VIP FUTEBOL', sport: 'Futebol' },
    '4.34':  { tipster: 'STK - VIP FUTEBOL', sport: 'Futebol' },
    '3.34':  { tipster: 'STK - VIP FUTEBOL', sport: 'Futebol' },
    '2.34':  { tipster: 'STK - VIP FUTEBOL', sport: 'Futebol' },
    '1.34':  { tipster: 'STK - VIP FUTEBOL', sport: 'Futebol' },
    '1.14':  { tipster: 'STK - VIP FUTEBOL', sport: 'Futebol' },

    // Mapeamentos para 'Leozin Tips Props' - Esporte: Futebol
    '12.36': { tipster: 'Leozin Tips Props', sport: 'Futebol' },
    '9.36':  { tipster: 'Leozin Tips Props', sport: 'Futebol' },
    '6.18':  { tipster: 'Leozin Tips Props', sport: 'Futebol' },
    '4.18':  { tipster: 'Leozin Tips Props', sport: 'Futebol' },
    '3.18':  { tipster: 'Leozin Tips Props', sport: 'Futebol' },
    '2.18':  { tipster: 'Leozin Tips Props', sport: 'Futebol' },
    '1.18':  { tipster: 'Leozin Tips Props', sport: 'Futebol' },
    '0.98':  { tipster: 'Leozin Tips Props', sport: 'Futebol' },

    // Mapeamentos para 'Cabreloa Europa' - Esporte: Futebol
    '12.26': { tipster: 'Cabreloa Europa', sport: 'Futebol' },
    '9.26':  { tipster: 'Cabreloa Europa', sport: 'Futebol' },
    '6.13':  { tipster: 'Cabreloa Europa', sport: 'Futebol' },
    '4.13':  { tipster: 'Cabreloa Europa', sport: 'Futebol' },
    '3.13':  { tipster: 'Cabreloa Europa', sport: 'Futebol' },
    '2.13':  { tipster: 'Cabreloa Europa', sport: 'Futebol' },
    '1.13':  { tipster: 'Cabreloa Europa', sport: 'Futebol' },
    '0.93':  { tipster: 'Cabreloa Europa', sport: 'Futebol' },

    // Mapeamentos para 'DiKa Tip's' - Esporte: Futebol
    '12.62': { tipster: "DiKa Tip's", sport: 'Futebol' },
    '9.62':  { tipster: "DiKa Tip's", sport: 'Futebol' },
    '6.31':  { tipster: "DiKa Tip's", sport: 'Futebol' },
    '4.31':  { tipster: "DiKa Tip's", sport: 'Futebol' },
    '3.31':  { tipster: "DiKa Tip's", sport: 'Futebol' },
    '2.31':  { tipster: "DiKa Tip's", sport: 'Futebol' },
    '1.31':  { tipster: "DiKa Tip's", sport: 'Futebol' },
    '1.11':  { tipster: "DiKa Tip's", sport: 'Futebol' },

    // Mapeamentos para 'sout0 TIPS' - Esporte: Futebol
    '12.76': { tipster: 'sout0 TIPS', sport: 'Futebol' },
    '9.76':  { tipster: 'sout0 TIPS', sport: 'Futebol' },
    '6.38':  { tipster: 'sout0 TIPS', sport: 'Futebol' },
    '4.38':  { tipster: 'sout0 TIPS', sport: 'Futebol' },
    '3.38':  { tipster: 'sout0 TIPS', sport: 'Futebol' },
    '2.38':  { tipster: 'sout0 TIPS', sport: 'Futebol' },
    '1.38':  { tipster: 'sout0 TIPS', sport: 'Futebol' },
    '1.18':  { tipster: 'sout0 TIPS', sport: 'Futebol' },

    // Mapeamentos para 'VF Tips' - Esporte: Futebol
    '12.78': { tipster: 'VF Tips', sport: 'Futebol' },
    '9.78':  { tipster: 'VF Tips', sport: 'Futebol' },
    '6.39':  { tipster: 'VF Tips', sport: 'Futebol' },
    '4.39':  { tipster: 'VF Tips', sport: 'Futebol' },
    '3.39':  { tipster: 'VF Tips', sport: 'Futebol' },
    '2.39':  { tipster: 'VF Tips', sport: 'Futebol' },
    '1.39':  { tipster: 'VF Tips', sport: 'Futebol' },
    '1.19':  { tipster: 'VF Tips', sport: 'Futebol' },

    // Mapeamentos para 'LeozinTipsBot' - Esporte: Futebol
    '12.74': { tipster: 'LeozinTipsBot', sport: 'Futebol' },
    '9.74':  { tipster: 'LeozinTipsBot', sport: 'Futebol' },
    '6.37':  { tipster: 'LeozinTipsBot', sport: 'Futebol' },
    '4.37':  { tipster: 'LeozinTipsBot', sport: 'Futebol' },
    '3.37':  { tipster: 'LeozinTipsBot', sport: 'Futebol' },
    '2.37':  { tipster: 'LeozinTipsBot', sport: 'Futebol' },
    '1.37':  { tipster: 'LeozinTipsBot', sport: 'Futebol' },
    '1.17':  { tipster: 'LeozinTipsBot', sport: 'Futebol' },

    // Mapeamentos para 'LirouTips' - Esporte: Futebol
    '12.28': { tipster: 'LirouTips', sport: 'Futebol' },
    '9.28':  { tipster: 'LirouTips', sport: 'Futebol' },
    '6.14':  { tipster: 'LirouTips', sport: 'Futebol' },
    '4.14':  { tipster: 'LirouTips', sport: 'Futebol' },
    '3.14':  { tipster: 'LirouTips', sport: 'Futebol' },
    '2.14':  { tipster: 'LirouTips', sport: 'Futebol' },
    '1.14':  { tipster: 'LirouTips', sport: 'Futebol' },
    '0.94':  { tipster: 'LirouTips', sport: 'Futebol' },

    // Mapeamentos para 'Kutter Tips NFL - Free' - Esporte: Futebol Americano
    '12.38': { tipster: 'Kutter Tips NFL - Free', sport: 'Futebol Americano' },
    '9.38':  { tipster: 'Kutter Tips NFL - Free', sport: 'Futebol Americano' },
    '6.19':  { tipster: 'Kutter Tips NFL - Free', sport: 'Futebol Americano' },
    '4.19':  { tipster: 'Kutter Tips NFL - Free', sport: 'Futebol Americano' },
    '3.19':  { tipster: 'Kutter Tips NFL - Free', sport: 'Futebol Americano' },
    '2.19':  { tipster: 'Kutter Tips NFL - Free', sport: 'Futebol Americano' },
    '1.19':  { tipster: 'Kutter Tips NFL - Free', sport: 'Futebol Americano' },
    '0.99':  { tipster: 'Kutter Tips NFL - Free', sport: 'Futebol Americano' },

    // Mapeamentos para 'PROPS [NFL] | Fábio Guilherme' - Esporte: Futebol Americano
    '12.64': { tipster: 'PROPS [NFL] | Fábio Guilherme', sport: 'Futebol Americano' },
    '9.64':  { tipster: 'PROPS [NFL] | Fábio Guilherme', sport: 'Futebol Americano' },
    '6.32':  { tipster: 'PROPS [NFL] | Fábio Guilherme', sport: 'Futebol Americano' },
    '4.32':  { tipster: 'PROPS [NFL] | Fábio Guilherme', sport: 'Futebol Americano' },
    '3.32':  { tipster: 'PROPS [NFL] | Fábio Guilherme', sport: 'Futebol Americano' },
    '2.32':  { tipster: 'PROPS [NFL] | Fábio Guilherme', sport: 'Futebol Americano' },
    '1.32':  { tipster: 'PROPS [NFL] | Fábio Guilherme', sport: 'Futebol Americano' },
    '1.12':  { tipster: 'PROPS [NFL] | Fábio Guilherme', sport: 'Futebol Americano' },

    // Mapeamentos para 'NFL | Fábio Guilherme' - Esporte: Futebol Americano
    '12.66': { tipster: 'NFL | Fábio Guilherme', sport: 'Futebol Americano' },
    '9.66':  { tipster: 'NFL | Fábio Guilherme', sport: 'Futebol Americano' },
    '6.33':  { tipster: 'NFL | Fábio Guilherme', sport: 'Futebol Americano' },
    '4.33':  { tipster: 'NFL | Fábio Guilherme', sport: 'Futebol Americano' },
    '3.33':  { tipster: 'NFL | Fábio Guilherme', sport: 'Futebol Americano' },
    '2.33':  { tipster: 'NFL | Fábio Guilherme', sport: 'Futebol Americano' },
    '1.33':  { tipster: 'NFL | Fábio Guilherme', sport: 'Futebol Americano' },
    '1.13':  { tipster: 'NFL | Fábio Guilherme', sport: 'Futebol Americano' },

    // Mapeamentos para 'Rei do college/NFL football' - Esporte: Futebol Americano
    '12.84': { tipster: 'Rei do college/NFL football', sport: 'Futebol Americano' },
    '9.84':  { tipster: 'Rei do college/NFL football', sport: 'Futebol Americano' },
    '6.42':  { tipster: 'Rei do college/NFL football', sport: 'Futebol Americano' },
    '4.42':  { tipster: 'Rei do college/NFL football', sport: 'Futebol Americano' },
    '3.42':  { tipster: 'Rei do college/NFL football', sport: 'Futebol Americano' },
    '2.42':  { tipster: 'Rei do college/NFL football', sport: 'Futebol Americano' },
    '1.42':  { tipster: 'Rei do college/NFL football', sport: 'Futebol Americano' },

    // Mapeamentos para 'Raphael Schon - NBA Vip' - Esporte: Basquetebol
    '12.18': { tipster: 'Raphael Schon - NBA Vip', sport: 'Basquetebol' },
    '9.18':  { tipster: 'Raphael Schon - NBA Vip', sport: 'Basquetebol' },
    '6.09':  { tipster: 'Raphael Schon - NBA Vip', sport: 'Basquetebol' },
    '4.09':  { tipster: 'Raphael Schon - NBA Vip', sport: 'Basquetebol' },
    '3.09':  { tipster: 'Raphael Schon - NBA Vip', sport: 'Basquetebol' },
    '2.09':  { tipster: 'Raphael Schon - NBA Vip', sport: 'Basquetebol' },
    '1.09':  { tipster: 'Raphael Schon - NBA Vip', sport: 'Basquetebol' },
    '0.89':  { tipster: 'Raphael Schon - NBA Vip', sport: 'Basquetebol' },

    // Mapeamentos para 'Leozin Tips Nba' - Esporte: Basquetebol
    '12.2':  { tipster: 'Leozin Tips Nba', sport: 'Basquetebol' },
    '9.2':   { tipster: 'Leozin Tips Nba', sport: 'Basquetebol' },
    '6.1':   { tipster: 'Leozin Tips Nba', sport: 'Basquetebol' },
    '4.1':   { tipster: 'Leozin Tips Nba', sport: 'Basquetebol' },
    '3.1':   { tipster: 'Leozin Tips Nba', sport: 'Basquetebol' },
    '2.1':   { tipster: 'Leozin Tips Nba', sport: 'Basquetebol' },
    '1.1':   { tipster: 'Leozin Tips Nba', sport: 'Basquetebol' },
    '0.9':   { tipster: 'Leozin Tips Nba', sport: 'Basquetebol' },

    // Mapeamentos para 'CABRELOA - NBA' - Esporte: Basquetebol
    '12.6':  { tipster: 'CABRELOA - NBA', sport: 'Basquetebol' },
    '9.6':   { tipster: 'CABRELOA - NBA', sport: 'Basquetebol' },
    '6.3':   { tipster: 'CABRELOA - NBA', sport: 'Basquetebol' },
    '4.3':   { tipster: 'CABRELOA - NBA', sport: 'Basquetebol' },
    '3.3':   { tipster: 'CABRELOA - NBA', sport: 'Basquetebol' },
    '2.3':   { tipster: 'CABRELOA - NBA', sport: 'Basquetebol' },
    '1.3':   { tipster: 'CABRELOA - NBA', sport: 'Basquetebol' },
    '1.1':   { tipster: 'CABRELOA - NBA', sport: 'Basquetebol' },

    // Mapeamentos para 'NBA - Pre Leozin Tips' - Esporte: Basquetebol
    '12.8':  { tipster: 'NBA - Pre Leozin Tips', sport: 'Basquetebol' },
    '9.8':   { tipster: 'NBA - Pre Leozin Tips', sport: 'Basquetebol' },
    '6.4':   { tipster: 'NBA - Pre Leozin Tips', sport: 'Basquetebol' },
    '4.4':   { tipster: 'NBA - Pre Leozin Tips', sport: 'Basquetebol' },
    '3.4':   { tipster: 'NBA - Pre Leozin Tips', sport: 'Basquetebol' },
    '2.4':   { tipster: 'NBA - Pre Leozin Tips', sport: 'Basquetebol' },
    '1.4':   { tipster: 'NBA - Pre Leozin Tips', sport: 'Basquetebol' },

    // Mapeamentos para 'NBA - Leozin Tips' - Esporte: Basquetebol
    '12.82': { tipster: 'NBA - Leozin Tips', sport: 'Basquetebol' },
    '9.82':  { tipster: 'NBA - Leozin Tips', sport: 'Basquetebol' },
    '6.41':  { tipster: 'NBA - Leozin Tips', sport: 'Basquetebol' },
    '4.41':  { tipster: 'NBA - Leozin Tips', sport: 'Basquetebol' },
    '3.41':  { tipster: 'NBA - Leozin Tips', sport: 'Basquetebol' },
    '2.41':  { tipster: 'NBA - Leozin Tips', sport: 'Basquetebol' },
    '1.41':  { tipster: 'NBA - Leozin Tips', sport: 'Basquetebol' },

    // Mapeamentos para 'LeozinTipsBot' - Esporte: Futebol
    '12.74': { tipster: 'LeozinTipsBot', sport: 'Futebol' },
    '9.74':  { tipster: 'LeozinTipsBot', sport: 'Futebol' },
    '6.37':  { tipster: 'LeozinTipsBot', sport: 'Futebol' },
    '4.37':  { tipster: 'LeozinTipsBot', sport: 'Futebol' },
    '3.37':  { tipster: 'LeozinTipsBot', sport: 'Futebol' },
    '2.37':  { tipster: 'LeozinTipsBot', sport: 'Futebol' },
    '1.37':  { tipster: 'LeozinTipsBot', sport: 'Futebol' },
    '1.17':  { tipster: 'LeozinTipsBot', sport: 'Futebol' },

    // Mapeamentos para 'LirouTips' - Esporte: Futebol
    '12.28': { tipster: 'LirouTips', sport: 'Futebol' },
    '9.28':  { tipster: 'LirouTips', sport: 'Futebol' },
    '6.14':  { tipster: 'LirouTips', sport: 'Futebol' },
    '4.14':  { tipster: 'LirouTips', sport: 'Futebol' },
    '3.14':  { tipster: 'LirouTips', sport: 'Futebol' },
    '2.14':  { tipster: 'LirouTips', sport: 'Futebol' },
    '1.14':  { tipster: 'LirouTips', sport: 'Futebol' },
    '0.94':  { tipster: 'LirouTips', sport: 'Futebol' },

    // Mapeamentos para 'Kutter Tips NFL - Free' - Esporte: Futebol Americano
    '12.38': { tipster: 'Kutter Tips NFL - Free', sport: 'Futebol Americano' },
    '9.38':  { tipster: 'Kutter Tips NFL - Free', sport: 'Futebol Americano' },
    '6.19':  { tipster: 'Kutter Tips NFL - Free', sport: 'Futebol Americano' },
    '4.19':  { tipster: 'Kutter Tips NFL - Free', sport: 'Futebol Americano' },
    '3.19':  { tipster: 'Kutter Tips NFL - Free', sport: 'Futebol Americano' },
    '2.19':  { tipster: 'Kutter Tips NFL - Free', sport: 'Futebol Americano' },
    '1.19':  { tipster: 'Kutter Tips NFL - Free', sport: 'Futebol Americano' },
    '0.99':  { tipster: 'Kutter Tips NFL - Free', sport: 'Futebol Americano' },

    // Mapeamentos para 'PROPS [NFL] | Fábio Guilherme' - Esporte: Futebol Americano
    '12.64': { tipster: 'PROPS [NFL] | Fábio Guilherme', sport: 'Futebol Americano' },
    '9.64':  { tipster: 'PROPS [NFL] | Fábio Guilherme', sport: 'Futebol Americano' },
    '6.32':  { tipster: 'PROPS [NFL] | Fábio Guilherme', sport: 'Futebol Americano' },
    '4.32':  { tipster: 'PROPS [NFL] | Fábio Guilherme', sport: 'Futebol Americano' },
    '3.32':  { tipster: 'PROPS [NFL] | Fábio Guilherme', sport: 'Futebol Americano' },
    '2.32':  { tipster: 'PROPS [NFL] | Fábio Guilherme', sport: 'Futebol Americano' },
    '1.32':  { tipster: 'PROPS [NFL] | Fábio Guilherme', sport: 'Futebol Americano' },
    '1.12':  { tipster: 'PROPS [NFL] | Fábio Guilherme', sport: 'Futebol Americano' },

    // Mapeamentos para 'NFL | Fábio Guilherme' - Esporte: Futebol Americano
    '12.66': { tipster: 'NFL | Fábio Guilherme', sport: 'Futebol Americano' },
    '9.66':  { tipster: 'NFL | Fábio Guilherme', sport: 'Futebol Americano' },
    '6.33':  { tipster: 'NFL | Fábio Guilherme', sport: 'Futebol Americano' },
    '4.33':  { tipster: 'NFL | Fábio Guilherme', sport: 'Futebol Americano' },
    '3.33':  { tipster: 'NFL | Fábio Guilherme', sport: 'Futebol Americano' },
    '2.33':  { tipster: 'NFL | Fábio Guilherme', sport: 'Futebol Americano' },
    '1.33':  { tipster: 'NFL | Fábio Guilherme', sport: 'Futebol Americano' },
    '1.13':  { tipster: 'NFL | Fábio Guilherme', sport: 'Futebol Americano' },

    // Mapeamentos para 'Rei do college/NFL football' - Esporte: Futebol Americano
    '12.84': { tipster: 'Rei do college/NFL football', sport: 'Futebol Americano' },
    '9.84':  { tipster: 'Rei do college/NFL football', sport: 'Futebol Americano' },
    '6.42':  { tipster: 'Rei do college/NFL football', sport: 'Futebol Americano' },
    '4.42':  { tipster: 'Rei do college/NFL football', sport: 'Futebol Americano' },
    '3.42':  { tipster: 'Rei do college/NFL football', sport: 'Futebol Americano' },
    '2.42':  { tipster: 'Rei do college/NFL football', sport: 'Futebol Americano' },
    '1.42':  { tipster: 'Rei do college/NFL football', sport: 'Futebol Americano' },

    // Mapeamentos para 'Raphael Schon - NBA Vip' - Esporte: Basquetebol
    '12.18': { tipster: 'Raphael Schon - NBA Vip', sport: 'Basquetebol' },
    '9.18':  { tipster: 'Raphael Schon - NBA Vip', sport: 'Basquetebol' },
    '6.09':  { tipster: 'Raphael Schon - NBA Vip', sport: 'Basquetebol' },
    '4.09':  { tipster: 'Raphael Schon - NBA Vip', sport: 'Basquetebol' },
    '3.09':  { tipster: 'Raphael Schon - NBA Vip', sport: 'Basquetebol' },
    '2.09':  { tipster: 'Raphael Schon - NBA Vip', sport: 'Basquetebol' },
    '1.09':  { tipster: 'Raphael Schon - NBA Vip', sport: 'Basquetebol' },
    '0.89':  { tipster: 'Raphael Schon - NBA Vip', sport: 'Basquetebol' },

    // Mapeamentos para 'Leozin Tips Nba' - Esporte: Basquetebol
    '12.2':  { tipster: 'Leozin Tips Nba', sport: 'Basquetebol' },
    '9.2':   { tipster: 'Leozin Tips Nba', sport: 'Basquetebol' },
    '6.1':   { tipster: 'Leozin Tips Nba', sport: 'Basquetebol' },
    '4.1':   { tipster: 'Leozin Tips Nba', sport: 'Basquetebol' },
    '3.1':   { tipster: 'Leozin Tips Nba', sport: 'Basquetebol' },
    '2.1':   { tipster: 'Leozin Tips Nba', sport: 'Basquetebol' },
    '1.1':   { tipster: 'Leozin Tips Nba', sport: 'Basquetebol' },
    '0.9':   { tipster: 'Leozin Tips Nba', sport: 'Basquetebol' },

    // Mapeamentos para 'CABRELOA - NBA' - Esporte: Basquetebol
    '12.6':  { tipster: 'CABRELOA - NBA', sport: 'Basquetebol' },
    '9.6':   { tipster: 'CABRELOA - NBA', sport: 'Basquetebol' },
    '6.3':   { tipster: 'CABRELOA - NBA', sport: 'Basquetebol' },
    '4.3':   { tipster: 'CABRELOA - NBA', sport: 'Basquetebol' },
    '3.3':   { tipster: 'CABRELOA - NBA', sport: 'Basquetebol' },
    '2.3':   { tipster: 'CABRELOA - NBA', sport: 'Basquetebol' },
    '1.3':   { tipster: 'CABRELOA - NBA', sport: 'Basquetebol' },
    '1.1':   { tipster: 'CABRELOA - NBA', sport: 'Basquetebol' },

    // Mapeamentos para 'NBA - Pre Leozin Tips' - Esporte: Basquetebol
    '12.8':  { tipster: 'NBA - Pre Leozin Tips', sport: 'Basquetebol' },
    '9.8':   { tipster: 'NBA - Pre Leozin Tips', sport: 'Basquetebol' },
    '6.4':   { tipster: 'NBA - Pre Leozin Tips', sport: 'Basquetebol' },
    '4.4':   { tipster: 'NBA - Pre Leozin Tips', sport: 'Basquetebol' },
    '3.4':   { tipster: 'NBA - Pre Leozin Tips', sport: 'Basquetebol' },
    '2.4':   { tipster: 'NBA - Pre Leozin Tips', sport: 'Basquetebol' },
    '1.4':   { tipster: 'NBA - Pre Leozin Tips', sport: 'Basquetebol' },

    // Mapeamentos para 'NBA - Leozin Tips' - Esporte: Basquetebol
    '12.82': { tipster: 'NBA - Leozin Tips', sport: 'Basquetebol' },
    '9.82':  { tipster: 'NBA - Leozin Tips', sport: 'Basquetebol' },
    '6.41':  { tipster: 'NBA - Leozin Tips', sport: 'Basquetebol' },
    '4.41':  { tipster: 'NBA - Leozin Tips', sport: 'Basquetebol' },
    '3.41':  { tipster: 'NBA - Leozin Tips', sport: 'Basquetebol' },
    '2.41':  { tipster: 'NBA - Leozin Tips', sport: 'Basquetebol' },
    '1.41':  { tipster: 'NBA - Leozin Tips', sport: 'Basquetebol' },

    // Outros mapeamentos podem ser adicionados aqui...
};

// -------------------------------------------------------
// Retorna { tipster, sport } conforme valor da stake
// -------------------------------------------------------
function getTipsterInfo(stakeValue) {
    if (stakeToTipster[stakeValue]) {
        return stakeToTipster[stakeValue];
    }
    return { tipster: 'Outros', sport: 'Outro esporte' };
}

// -------------------------------------------------------
// Listener principal da extensão (recebe 'extractBets')
// -------------------------------------------------------
chrome.runtime.onConnect.addListener((port) => {
    if (port.name !== 'extractionChannel') {
        console.warn(`Tentativa de conexão com canal desconhecido: ${port.name}`);
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

                // Faz download do CSV
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

// -------------------------------------------------------
// 2) Função principal de extração das apostas
// -------------------------------------------------------
async function extractBets() {
    const bets = [];

    // Cada aposta está em um <tr class="fn-bet-summary-record">
    const betRows = document.querySelectorAll('tr.fn-bet-summary-record');
    console.log(`Encontrados ${betRows.length} registros de apostas.`);

    for (const betRow of betRows) {
        // 1) Texto da seleção (ex.: "Fulano faz gol @ 2,50")
        const selectionElement = betRow.querySelector('.selection');
        const selectionText = selectionElement ? selectionElement.innerText.trim() : '';
        console.log(`Texto da seleção: ${selectionText}`);

        // Extrair prefix + odd
        let prefix = '';
        let rawOdds = '0.00';
        if (selectionText.includes('@')) {
            [prefix, rawOdds] = selectionText.split('@');
            prefix = prefix.trim();
            rawOdds = rawOdds.trim();
        }

        // Ajuste da odd (remoção de pontos, vírgula -> ponto)
        rawOdds = rawOdds.replace(/\./g, '').replace(',', '.');
        let odds = parseFloat(rawOdds);
        if (isNaN(odds)) {
            odds = 0.00;
        }
        odds = odds.toFixed(2);

        // 2) Data/Hora
        const dateTimeElement = betRow.querySelector('.bet-summary-placement-date');
        const dateTime = dateTimeElement ? dateTimeElement.innerText.trim() : '';

        // 3) Stake
        const stakeElement = betRow.querySelector('.bet-summary-total-stake');
        const stakeText = stakeElement ? stakeElement.innerText.trim() : '0,00';
        const numericStake = parseFloat(stakeText.replace(/[^\d,]/g, '').replace(',', '.')) || 0.00;

        // 4) Tipo da aposta => Simples ou Múltipla
        const stakeTypeElement = betRow.querySelector('.bet-summary-bet-confirmation-stake');
        let stakeTypeText = stakeTypeElement ? stakeTypeElement.innerText.trim() : '';
        stakeTypeText = stakeTypeText.replace(/\s+/g, ' ');

        let betType = 'S'; // default
        if (stakeTypeText.toLowerCase().includes('criar aposta')) {
            betType = 'M';
        }

        // 5) Retorno provisório
        //    Em apostas simples, podemos pegar direto.
        //    Em múltiplas, costumamos pegar 0.00 aqui e buscar valor real nos detalhes.
        let betReturn = '0.00';
        if (betType === 'S') {
            const returnElement = betRow.querySelector('.bet-summary-return .bet-summary-detail-amounts-return-value');
            if (returnElement) {
                betReturn = returnElement.innerText
                    .replace('Retorno R$', '')
                    .replace(',', '.');
            }
        }

        // 6) Buscar tipster com base na stake
        const tipsterInfo = getTipsterInfo(numericStake.toFixed(2));

        // 7) Monta objeto com dados básicos
        const betData = {
            date: dateTime,
            type: betType,
            sport: tipsterInfo.sport,
            label: prefix,
            odds: odds,
            stake: numericStake.toFixed(2),
            totalValue: betReturn,
            state: 'L',             // será ajustado no detalhe
            bookmaker: 'Bet365',
            tipster: tipsterInfo.tipster,

            // Campos adicionais (adaptar se precisar)
            category: 'ML',
            competition: '',
            betType: '',
            closing: '',
            comment: prefix,
            live: '',
            freebet: '',
            cashout: '',
            eachWay: '',

            // ID da aposta
            extraDetails: betRow.getAttribute('data-betid') || ''
        };

        console.log(`Aposta extraída (parcial): ${JSON.stringify(betData)}`);
        bets.push(betData);
    }

    // ---------------------------------------------------
    // Abre detalhes para apostas que tenham ID
    // ---------------------------------------------------
    const validBets = [];
    for (const bet of bets) {
        if (!bet.extraDetails) {
            // Se não tem ID, não dá para abrir detalhes
            // Você pode decidir se inclui essa aposta mesmo assim
            validBets.push(bet);
            continue;
        }

        try {
            const isValid = await clickAndExtractDetails(bet);
            if (isValid) {
                validBets.push(bet);
            }
        } catch (error) {
            console.error(`Erro ao extrair detalhes (ID ${bet.extraDetails}):`, error);
        }
    }

    console.log(`Total de apostas válidas: ${validBets.length}`);
    return validBets.map(formatBetData); // converte para CSV (array de strings)
}

// -------------------------------------------------------
// 3) clickAndExtractDetails: abre popup/detalhe e coleta
//    retorno REAL de múltiplas + ID da aposta, etc.
// -------------------------------------------------------
async function clickAndExtractDetails(bet) {
    const detailsButton = document.querySelector(
        `tr[data-betid="${bet.extraDetails}"] .fn-sports-show-bet-confirmation`
    );
    if (!detailsButton) {
        console.warn(`Botão de detalhes não encontrado (ID: ${bet.extraDetails})`);
        // Se não achou, não invalidamos a aposta, retornamos true com dados parciais
        return true;
    }

    detailsButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
    detailsButton.click();

    // Espera 7s para abrir/expandir os detalhes
    await new Promise((resolve) => setTimeout(resolve, 7000));

    // Selecionamos a <tr> expandida
    const detailsSelector = `tr.bet-summary-bet-confirmation-area[data-betid="${bet.extraDetails}"]`;
    let detailsRow = null;
    try {
        detailsRow = await waitForElement(detailsSelector, 9000);
    } catch (error) {
        console.warn(`Timeout aguardando detalhes da aposta ID: ${bet.extraDetails}`);
        return true;
    }

    if (!detailsRow || detailsRow.style.display === 'none') {
        console.warn(`Detalhes não carregados (ou display:none) p/ ID: ${bet.extraDetails}`);
        return true;
    }

    // (A) Extrair ID
    const idElement = detailsRow.querySelector('.bet-confirmation-details-ref');
    if (idElement) {
        const fullText = idElement.innerText.trim();
        const match = fullText.match(/Confirmação de Aposta - ([A-Z0-9]+) - Internet/);
        if (match && match[1]) {
            bet.id = match[1];
        }
    }

    // (B) Anulado?
    const resultElement = detailsRow.querySelector('.bet-confirmation-table-body-result');
    const resultText = resultElement ? resultElement.innerText.trim() : '';
    if (resultText === 'Anulado') {
        console.log(`Aposta ID ${bet.extraDetails} - Anulada. Ignorando.`);
        return false; // não incluímos
    }

    // (C) Retorno real
    //     Em múltiplas ou criar aposta, aparece em .bet-confirmation-amounts-right
    const finalAmountsRight = detailsRow.querySelector('.bet-confirmation-amounts-right');
    if (finalAmountsRight) {
        let rawReturn = finalAmountsRight.innerText || '';
        // Ex.: "Retorno: R$56,31"
        rawReturn = rawReturn.replace(/[^\d,\.]/g, ''); // ex.: "56,31"
        rawReturn = rawReturn.replace(',', '.');        // vira "56.31"
        if (!isNaN(parseFloat(rawReturn))) {
            bet.totalValue = parseFloat(rawReturn).toFixed(2);
        }
    }

    // (D) Label + Comment com base em evento + seleções
    let eventText = '';
    let selectionsText = '';

    // Tenta modo "Simples"
    const eventElement = detailsRow.querySelector('.bet-confirmation-table-body-event');
    const selectionElement = detailsRow.querySelector('.bet-confirmation-table-body-selections');
    if (eventElement && selectionElement) {
        eventText = eventElement.innerText.replace(/\n/g, ' ').trim();
        selectionsText = selectionElement.innerText.replace(/\n/g, ' ').trim();
    } else {
        // Tenta modo "Bet Builder"/Múltipla
        const eventElementAlt = detailsRow.querySelector('.events-header span');
        const selectionElementsAlt = detailsRow.querySelectorAll('.selection-wrap .selection');
        if (eventElementAlt) {
            eventText = eventElementAlt.innerText.replace(/\n/g, ' ').trim();
        }
        selectionElementsAlt.forEach((el) => {
            const txt = el.innerText.replace(/\n/g, ' ').trim();
            if (txt) selectionsText += txt + ' - ';
        });
        selectionsText = selectionsText.slice(0, -3); // remove último ' - '
    }

    const combined = (eventText + ' - ' + selectionsText).trim();
    bet.label = combined.length > 100 ? combined.slice(0, 100) + '...' : combined;
    bet.comment = combined;

    // (E) Eventual atualização da odd
    const oddsElement = detailsRow.querySelector('.bet-confirmation-table-body-odds div');
    if (oddsElement) {
        let newOddsText = oddsElement.innerText.replace(/\./g, '').replace(',', '.');
        let newOdds = parseFloat(newOddsText);
        if (!isNaN(newOdds)) {
            bet.odds = newOdds.toFixed(2);
        }
    }

    // (F) Ajustar state: W, L ou HW (meio ganho)
    const numericReturn = parseFloat(bet.totalValue) || 0;
    const numericStake = parseFloat(bet.stake) || 0;

    if (numericReturn === 0) {
        bet.state = 'L';
    } else if (numericReturn < numericStake) {
        bet.state = 'HW'; // half-win
        const newOdds = numericReturn / numericStake;
        bet.odds = newOdds.toFixed(2);
    } else {
        bet.state = 'W';
    }

    return true; // aposta válida
}

// -------------------------------------------------------
// Espera elemento aparecer no DOM
// -------------------------------------------------------
function waitForElement(selector, timeout = 10000) {
    return new Promise((resolve, reject) => {
        const interval = 200;
        const endTime = Date.now() + timeout;

        function check() {
            const el = document.querySelector(selector);
            if (el) {
                resolve(el);
            } else if (Date.now() > endTime) {
                reject(new Error(`Timeout aguardando elemento: ${selector}`));
            } else {
                setTimeout(check, interval);
            }
        }
        check();
    });
}

// -------------------------------------------------------
// 4) formatBetData: gera linha CSV em string
// -------------------------------------------------------
function formatBetData(bet) {
    return [
        bet.id || '',
        bet.date || '',
        bet.type || '',
        bet.sport || '',
        bet.label || '',
        bet.odds || '0.00',
        bet.stake || '0.00',
        bet.totalValue || '0.00',
        bet.state || '',
        bet.bookmaker || '',
        bet.tipster || '',
        bet.category || '',
        bet.competition || '',
        bet.betType || '',
        bet.closing || '',
        bet.comment || '',
        bet.live || '',
        bet.freebet || '',
        bet.cashout || '',
        bet.eachWay || ''
    ].join(';');
}

// -------------------------------------------------------
// 5) downloadCSV: gera e faz download do arquivo CSV
// -------------------------------------------------------
function downloadCSV(data) {
    if (!data || !Array.isArray(data)) {
        console.error('Dados inválidos para download do CSV.');
        return;
    }

    // Ajuste o cabeçalho conforme a ordem de formatBetData
    const csvHeader = "ID;Date;Type;Sport;Label;Odds;Stake;TotalValue;State;Bookmaker;Tipster;Category;Competition;BetType;Closing;Comment;Live;Freebet;Cashout;EachWay";
    const csvContent = [csvHeader, ...data].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `bets_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(link);

    console.log('Iniciando download do CSV...');
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    console.log('Download do CSV concluído.');
}
