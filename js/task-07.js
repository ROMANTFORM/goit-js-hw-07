
const fontSizeControlRef = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
const onInputChange = (e) => {
    text.style.fontSize = e.target.value + 'px';
}
fontSizeControlRef.addEventListener('change', onInputChange);
