const all = document.querySelector('.button__all');
const web = document.querySelector('.button__web-design');
const graphic = document.querySelector('.button__graphic-gesign');
const artwork = document.querySelector('.button__artwork');
const allImg = document.querySelector('.layout-4-column');
const webImg = allImg.querySelector('.portfolio_web');
const graphicImg = allImg.querySelector('.portfolio_gesign');
const artworkImg = allImg.querySelector('.portfolio_artwork');
const rightChev = document.querySelector('.slider__right-chev');
const leftChev = document.querySelector('.slider__left-chev');
console.log(webImg)

all.addEventListener('click', () => {   
  webImg.classList.remove('image-hide');
  graphicImg.classList.remove('image-hide');
  artworkImg.classList.remove('image-hide');
});
web.addEventListener('click', () => {    
  webImg.classList.toggle('image-hide');  
});
graphic.addEventListener('click', () => { 
  graphicImg.classList.toggle('image-hide');
});
artwork.addEventListener('click', () => {  
  artworkImg.classList.toggle('image-hide');
});
rightChev.addEventListener('click', () => {   
});
leftChev.addEventListener('click', () => {     
});


/* Mixed portfolio images */

// const imagesPortfolio = document.getElementById('img_portfolio');
// const filterList = document.getElementById('tab');
// let arr1 = imagesPortfolio.querySelectorAll('img');
// let a = 0;
// let arr2 = [];
// for (var i = arr1.length - 1; i >= 0; i--) {
//   arr2[i] = a;
// }
// filterList.querySelectorAll('li').forEach((el) => {
//   el.addEventListener('click', (event) => {
//     filterList
//       .querySelectorAll('li')
//       .forEach((el) => el.classList.remove('active'));
//     event.target.classList.add('active');
//     imagesPortfolio.querySelectorAll('img').forEach((el) => el.remove());
//     for (var i = arr1.length - 1; i > 0; i--) {
//       var j = Math.floor(Math.random() * (i + 1));
//       var temp = arr1[i];
//       arr1[i] = arr1[j];
//       arr1[j] = temp;
//     }
//     while (i < arr1.length) {
//       var j = Math.floor(Math.random() * arr1.length);
//       if (arr2[j] == a) {
//         arr2[j] = a + 1;
//         imagesPortfolio.prepend(arr1[j]);
//         ++i;
//       }
//     }
//     ++a;
//   });
// });