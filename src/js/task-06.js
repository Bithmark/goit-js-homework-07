const input = document.querySelector('#validation-input');

input.addEventListener('focus', onInputFocus);
input.addEventListener('blur', onInputBlur);

function onInputFocus(event) {
  //   console.log('focus');
}

function onInputBlur(event) {
  //   console.dir(event.currentTarget);
  //   console.log('blur');
  if (
    event.currentTarget.getAttribute('data-length') >
    event.currentTarget.value.length
  ) {
    event.currentTarget.style.borderColor = '#valid';
  } else {
    event.currentTarget.style.borderColor = '#invalid';
  }
}
