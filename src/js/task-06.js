const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if (input.value.length >= +input.dataset.length) {
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  }
}