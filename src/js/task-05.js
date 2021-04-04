const input = document.querySelector('#name-input');

const inputName = document.querySelector('#name-output');

input.addEventListener('input', function onInputChange(event) {
  //   inputName.textContent = event.currentTarget.value;

  // if (!inputName.textContent) {
  //   inputName.textContent = 'незнакомец';
  // }
  inputName.textContent = event.currentTarget.value || 'незнакомец';
});
