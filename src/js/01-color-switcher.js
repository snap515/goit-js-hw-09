function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onColorChange() {
  document.body.style.backgroundColor = getRandomHexColor();
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;

startBtn.addEventListener('click', onStartBtnPress);
stopBtn.addEventListener('click', onStopBtnPress);

function btnDisableToggle(startBtn, stopBtn) {
  startBtn.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled');
}

function onStartBtnPress() {
  btnToggle(startBtn, stopBtn);
  onColorChange();
  timerId = setInterval(onColorChange, 1000);
}

function onStopBtnPress() {
  btnDisableToggle(stopBtn, startBtn);
  clearInterval(timerId);
}
