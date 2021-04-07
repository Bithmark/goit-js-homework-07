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

const getUlEl = document.querySelector('ul');

const getIngredientsEl = ingredients => {
  return ingredients.map(ingredient => {
    const createLiEl = document.createElement('li');
    createLiEl.textContent = ingredient;
    return createLiEl;
  });
};

const element = getIngredientsEl(ingredients);

getUlEl.append(...element);
