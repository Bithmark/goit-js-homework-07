const decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementBtn = document.querySelector('[data-action="increment"]');

const counterNumber = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', function () {
  counterValue -= 1;
  counterNumber.innerHTML = counterValue;
});

incrementBtn.addEventListener('click', function () {
  counterValue += 1;
  counterNumber.innerHTML = counterValue;
});
