const input = document.querySelector('#validation-input');
input.addEventListener('focus', onInputFocus);
input.addEventListener('blur', onInputBlur);
function onInputFocus(event) {
  //   console.log('focus');
}
function onInputBlur(event) {
  // console.dir(event.currentTarget);
  // console.log('blur');
  console.log(event.currentTarget.value.length);
  if (
    event.currentTarget.value.length >=
    +event.currentTarget.getAttribute('data-length')
  ) {
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  }
}
