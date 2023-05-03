function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startBtn = document.querySelector('[data-start');
const stopBtn = document.querySelector('[data-stop');
const body = document.body;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

stopBtn.disabled = true;
let interval = null;

function onStartBtnClick(event) {
  stopBtn.disabled = false;
  event.target.disabled = true;
  interval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopBtnClick(event) {
  startBtn.disabled = false;
  event.target.disabled = true;
  clearInterval(interval);
}
