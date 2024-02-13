function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const websiteBody = document.querySelector('body');
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
let timerId = null;

buttonStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    const newColor = getRandomHexColor();
    websiteBody.style.backgroundColor = newColor;
    localStorage.setItem('backgroundColor', newColor);
  }, 1000);
  buttonStart.disabled = true;
});

buttonStop.addEventListener('click', () => {
  clearInterval(timerId);
  const savedColor = localStorage.getItem('backgroundColor');
  buttonStart.disabled = false;
});
