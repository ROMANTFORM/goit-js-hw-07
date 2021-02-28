const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', e => {
    if (e.currentTarget.value.length === 6) {
        return inputEl.classList.add('valid');
    };
    return inputEl.classList.add('invalid');
});