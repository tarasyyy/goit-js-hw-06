const randomColor = document.querySelector('.widget');
const span = document.querySelector('.color');
randomColor.addEventListener('click', onButtonClick);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function onButtonClick(event) {
  
  if (!event.target.classList.contains('change-color')) {
    return;
  }
  return span.textContent = getRandomHexColor(),
    document.body.style.background = getRandomHexColor();
   
}