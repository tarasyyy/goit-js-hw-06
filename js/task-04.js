const decrement = document.querySelector('[data-action="decrement"]');
const textValue = document.querySelector("#value");
const increment = document.querySelector('[data-action="increment"]');


let counterValue  = 0;

decrement.addEventListener("click", decrement => {
    return textValue.textContent = counterValue  -= 1;
});

increment.addEventListener("click", increment => {
   return textValue.textContent  = counterValue  += 1;
});