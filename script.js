// script.js
const weddingDate = new Date("October 19, 2024 18:00:00").getTime(); // Wedding date

function updateCountdown() {
    const now = new Date().getTime();
    const timeDifference = weddingDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

setInterval(updateCountdown, 1000);
