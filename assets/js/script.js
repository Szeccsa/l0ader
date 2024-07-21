const sentences = [
    "Hang tight! We're loading the page.",
    "Loading, please be patient...",
    "Just a moment, we're almost ready."
];

function showRandomSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const randomSentence = sentences[randomIndex];
    document.getElementById('loading-message').innerText = randomSentence;
}

showRandomSentence();

(function () {
    window.onload = function () {
        const preloader = document.querySelector('.page-loading');
        preloader.classList.remove('active');
        setTimeout(function () {
            preloader.remove();
        }, 1500);
    }
})();