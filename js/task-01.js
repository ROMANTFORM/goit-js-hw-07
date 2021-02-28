
const itemsEl = document.querySelectorAll('.item');
console.log(`В списке ${itemsEl.length} категории`);

const showInfo = () => { 
    for (let i = 0; i < itemsEl.length; i += 1){
    const titleEl = itemsEl[i].querySelector('h2');
    console.log(`Категория: ${titleEl.textContent}`);
    const itemsInCategoryEl = itemsEl[i].querySelectorAll('li');
    console.log(`Количество элементов : ${itemsInCategoryEl.length}`);
};
};

showInfo();

