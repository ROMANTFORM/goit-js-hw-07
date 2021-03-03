const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', e => {
    const length = +e.currentTarget.dataset.length;
    // console.log(e.currentTarget.value.length === length);
    if (e.currentTarget.value.length === length) {
        
        return inputEl.classList.add('valid');
    };
    return inputEl.classList.add('invalid');
});