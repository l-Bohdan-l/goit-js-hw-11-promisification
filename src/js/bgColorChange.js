import colors from './colors'
import refs from './refs'
const { startBtn, stopBtn, body } = refs;

startBtn.addEventListener('click', getRandomColor);
stopBtn.addEventListener('click', stopGettingRandomColor);
let intId = null;

function getRandomColor(e) {
    intId = setInterval(() => {
        let randomNum = randomIntegerFromInterval(0, colors.length);
        body.style.backgroundColor = colors[randomNum];
    }, 1000);

    startBtn.setAttribute('disabled', true)
}

function stopGettingRandomColor(e) {
    startBtn.removeAttribute('disabled')
    clearInterval(intId);
}


function randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}