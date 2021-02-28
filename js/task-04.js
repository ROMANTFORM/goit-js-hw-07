const btnMinusEl = document.querySelector('.btn-minus');
const btnPlusEl = document.querySelector('.btn-plus');
const valueEl = document.querySelector('#value');


let counterValue = 0;
btnMinusEl.addEventListener("click", e => {
    counterValue = counterValue - 1;
    return valueEl.innerHTML = `<span id="value">${counterValue}</span>`;
});

btnPlusEl.addEventListener("click", e => {
    counterValue = counterValue + 1;
    return valueEl.innerHTML = `<span id="value">${counterValue}</span>`;
});

