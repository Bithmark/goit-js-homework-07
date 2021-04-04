const refs = {
  input: document.querySelector('#controls input'),
  btnRender: document.querySelector('button[data-action="render"]'),
  btnDestroy: document.querySelector('button[data-action="destroy"]'),
  boxesDiv: document.querySelector('#boxes'),
};

function createBoxes(amount) {
  const arrayBoxs = [];
  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    const boxesRef = document.createElement('div');
    boxesRef.style.backgroundColor = randomColor();
    boxesRef.style.width = `${size}px`;
    boxesRef.style.height = `${size}px`;
    arrayBoxs.push(boxesRef);
  }
  refs.boxesDiv.append(...arrayBoxs);
}

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
  refs.input.value = '';
  refs.boxesDiv.innerHTML = '';
}

refs.btnRender.addEventListener('click', () => createBoxes(refs.input.value));

refs.btnDestroy.addEventListener('click', destroyBoxes);
