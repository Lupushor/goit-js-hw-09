const changeColor = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

changeColor.stopBtn.disabled = true;
let id = null;

const onColorChange = () => {
  id = setInterval(() => {
    changeColor.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  changeColor.startBtn.disabled = true;
  changeColor.stopBtn.disabled = false;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const offColorChange = () => {
  clearInterval(id);
  changeColor.stopBtn.disabled = true;
  changeColor.startBtn.disabled = false;
};

changeColor.startBtn.addEventListener('click', onColorChange);
changeColor.stopBtn.addEventListener('click', offColorChange);
