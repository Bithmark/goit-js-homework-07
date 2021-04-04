// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const getIngredientsEl = document.querySelector('body');

const getUlEl = document.querySelector('ul');

const getItemPotatoeEl = document.createElement('li');
getItemPotatoeEl.textContent = 'Картошка';

const getItemMushroomsEl = document.createElement('li');
getItemMushroomsEl.textContent = 'Грибы';

const getItemGarlicEl = document.createElement('li');
getItemGarlicEl.textContent = 'Чеснок';

const getItemTomatoeEl = document.createElement('li');
getItemTomatoeEl.textContent = 'Помидоры';

const getItemGreenEl = document.createElement('li');
getItemGreenEl.textContent = 'Зелень';

const getItemCondimentsEl = document.createElement('li');
getItemCondimentsEl.textContent = 'Приправы';

getUlEl.append(
  getItemPotatoeEl,
  getItemMushroomsEl,
  getItemGarlicEl,
  getItemTomatoeEl,
  getItemGreenEl,
  getItemCondimentsEl,
);
