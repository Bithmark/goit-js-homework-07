const input = document.querySelector('#font-size-control');

const slider = document.querySelector('#text');

input.addEventListener('input', function changeSlider(event) {
  const size = event.currentTarget.value + 'px';
  slider.style.fontSize = size;
});
