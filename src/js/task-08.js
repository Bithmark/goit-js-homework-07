const refs = {
  input: document.querySelector('#controls input'),
  btnRender: document.querySelector('button[data-action="render"]'),
  btnDestroy: document.querySelector('button[data-action="destroy"]'),
  boxesDiv: document.querySelector('#boxes'),
};

function createBoxes(amount) {
  refs.boxesDiv.innerHTML = '';
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
  
    const random = (min, max) => Math.round(Math.random() * (max - min) + min);

    const red = random(0, 255);
    const green = random(0, 255);
    const blue = random(0, 255);

    return `rgb(${red},${green},${blue})`;
}

function destroyBoxes() {
  refs.input.value = '';
  refs.boxesDiv.innerHTML = '';
}

refs.btnRender.addEventListener('click', () => createBoxes(refs.input.value));

refs.btnDestroy.addEventListener('click', destroyBoxes);
