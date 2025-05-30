document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        " Eu te amo muito! Você é a pessoa mais incrível do mundo.",
        " Cada momento ao seu lado é um presente. Meu amor por você cresce a cada dia.",
        " Seu sorriso ilumina meu dia. Você é a razão da minha felicidade.",
        "Não há palavras suficientes para expressar o quanto eu te adoro.",
        " Você me completa de uma forma que eu nunca imaginei ser possível. Amo você!",
        " Meu coração é seu, hoje e sempre. Te amo além das estrelas.",
        " Você é a minha melodia favorita em meio ao caos do mundo. Amo você!",
        " Com você, cada dia é uma nova aventura cheia de amor e alegria.",
        " Sua existência torna o mundo um lugar muito mais bonito. Eu te amo infinitamente.",
        " tudo isso ´´e pa mstrou, horas ki bu odja pa bu fla el alguem ki mas aman na vida",
        "bu beojo bu toke, bu sorriso, bu risada, bu tudo, nkrel mas um bes",
    ];
    

    const message1Element = document.getElementById('message1');
    const message2Element = document.getElementById('message2');
    const message3Element = document.getElementById('message3');
    const newMessageBtn = document.getElementById('newMessageBtn');

    function getRandomMessages() {
        const selectedMessages = new Set();
        while (selectedMessages.size < 1) {
            const randomIndex = Math.floor(Math.random() * messages.length);
            selectedMessages.add(messages[randomIndex]);
        }
        return Array.from(selectedMessages);
    }

    function displayMessages() {
        const [msg1, msg2, msg3] = getRandomMessages();
        message1Element.textContent = msg1;
        //message2Element.textContent = msg2;
        //message3Element.textContent = msg3;
    }

    // Display messages on page load
    displayMessages();

    // Event listener for the button
    newMessageBtn.addEventListener('click', displayMessages);
});