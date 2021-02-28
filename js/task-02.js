const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredient = ingredients.map(elem => {
    const listItem = document.createElement('li');
    listItem.textContent = elem;
    return listItem;
});

const listEl = document.querySelector('#ingredients');
listEl.append(...ingredient);


