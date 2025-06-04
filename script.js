document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        /*"😎 kz bu sa spera odja li?",
        "si bu kre sabi de verdade, continua.🧐",
        "curisidade mata gato, 🤪 mas gato tem sete vidas.",
        "xan flau, mas entre nós.🤭",
        "tudo bes kin fitxa odjou👀, vejo aquelas nadigas branquinhas😬, e uma linha vermelha.",
        "deitada ta sprean😏 pa desbrava 🙈. oiii!",
        "odja md ta rapian 👻 corpo, kkkkk", 
        "keli go bu ka esperaba. kkkk",
        "djan kreba odjaba bu rosto ta leba isso😅",*/
        "❤️❤️❤️❤️💕",
        /*"Eu te amo muito! Você é muito.",
        "Cada momento ao seu lado é um presente.",
        "Seu sorriso ilumina meu dia.  ❤️ ",*/
        "😎",
        "😂",
        /*"Não há palavras suficientes para expressar o quanto eu te adoro.",
        "Você me completa de uma forma que eu nunca imaginei ser possível. Amo você!",
        "Meu coração é seu, hoje e sempre. Te amo além das estrelas.",
        "Você é a minha melodia favorita em meio ao caos do mundo. Amo você!",
        "Com você, cada dia é uma nova aventura cheia de amor e alegria.",
        "Sua existência torna o mundo um lugar muito mais bonito. Eu te amo infinitamente.",
        "bu beijo bu toke, bu sorriso, bu risada, bu tudo, nkrel mas um bes",
        "Você é a razão do meu sorriso e da minha felicidade. Te amo profundamente.",
        "Cada dia ao seu lado é uma bênção. ",
        "Te amo mais do que palavras podem dizer.",
        "Você é a minha inspiração diária. Te amo mais do que você pode imaginar.", */
        "cada momento com você é especial.",
        /*"tudo que faço é pensando em você.",
        "voce deu sentido à minha vida. Te amo mais do que tudo.",
        "Te amo mais do que palavras podem expressar.",
        "palavras não podem descrever o quanto eu te amo.",
        "a distancia não diminui meu amor por você. Você está sempre no meu coração.",
        "todos esses anos longe, meu amor por você só cresceu.",*/
        "queria tanto poder estar com você agora. ",
        "Queria tanto poder te abraçar agora. ", 
        /*"Sentir seu cheiro é como sentir o perfume das flores mais lindas. ",
        "Seu olhar é como um farol que ilumina meu caminho.",
        "nosso encontro foi como um sonho realizado. ",*/
        "Eu nao gostei de estar com você, eu amei !.",
        /*"nosso emogis são como um reflexo do nossos sentimentos. Eles falam por nós.",
        "nossa loucura juntos foi a melhor parte dessa historia doida.",
        "Quria ser seu cinto, para te abraçar e sentir seu calor. acima de tudo, tocar essas tores.",
        "Esse olhar... que perigo bom!",
        "O encontro foi breve, o impacto não.",
        "Já estou a imaginar o próximo.",
        "Deixaste um rasto de curiosidade. E um perfume que vicia.",
        "A tua conversa tem um tempero especial.",
        "Sinto que há mais para descobrir.",
        "A noite ficou mais interessante depois de ti.",
        "Um brinde ao que começou.",
        "Tens um jeito que desarma e encanta.",
        "Ainda a decifrar os teus sinais...",
        "E a gostar do mistério.",
        "O replay do nosso encontro está em loop.",
        "Que a próxima vez não demore..",
        "Nosso encontro: um código que compilou perfeito.",
        "Teu olhar desbloqueou meu firewall.",
        "Quero um while true loop contigo.",
        "Nosso algoritmo de atração é complexo e viciante.",
        "Tens a chave de acesso ao meu sistema.",*/
        "Teu sorriso é meu bug favorito, me para por completo.",
        /*"Sinto que nossa conexão é de alta velocidade.",
        "Quero depurar cada detalhe teu.",
        "Teu input gerou o melhor output no meu dia.",
        "Minha API está pronta para teus requests.",
        "És o upgrade que minha rotina precisava.",
        "Nosso match tem a melhor heurística.",
        "Teu charme é um exploit no meu sistema de defesa.",
        "Quero ser o admin do teu coração.",
        "Nosso encontro foi só o beta test do que vem por aí.", */
    ];

const message1Element = document.getElementById('message1');
const message2Element = document.getElementById('message2');
const message3Element = document.getElementById('message3');
const newMessageBtn = document.getElementById('newMessageBtn');

// Mantém um array para armazenar as mensagens já exibidas
const shownMessages = [];
let next = 0;
function getRandomMessages() {
    const selectedMessages = new Set();

    while (selectedMessages.size < 1) {
        if (next >= messages.length) {
            next = 0; // Reinicia o índice se todas as mensagens já foram mostradas
        }
        const randomIndex = Math.floor(Math.random() * messages.length);
        //const randomIndex = Math.floor(next);
        //console.log(`Random Index: ${randomIndex}`);
        const msg = messages[randomIndex];
        selectedMessages.add(msg);
        next++;
    }
    // Adiciona a mensagem exibida ao array de mensagens já mostradas
    const [selectedMsg] = Array.from(selectedMessages);
    shownMessages.push(selectedMsg);
    return [selectedMsg];
}

function displayMessages() {
    const [msg1] = getRandomMessages();
    message1Element.textContent = msg1;
    //message2Element.textContent = msg2;
    //message3Element.textContent = msg3;
}

    // Display messages on page load
    displayMessages();

    // Event listener for the button
    newMessageBtn.addEventListener('click', displayMessages);
});