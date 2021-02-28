const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const listImageEl = document.querySelector('#gallery');
listImageEl.classList.add('style');
// for (let i = 0; i < images.length; i += 1) {
//   const el = images[i];
//   listImageEl.insertAdjacentHTML('afterbegin', `<li><img width='200px' src=${el.url} alt=${el.alt}></li>`);
// };
images.map(({ url, alt }) => {
  return listImageEl.insertAdjacentHTML('afterbegin', `<li><img width='200px' src=${url} alt=${alt}></li>`);
});