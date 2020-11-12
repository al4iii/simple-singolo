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

all.addEventListener('click', (e) => {   
  webImg.classList.remove('image-hide');
  graphicImg.classList.remove('image-hide');
  artworkImg.classList.remove('image-hide');
});
web.addEventListener('click', (e) => {    
  webImg.classList.toggle('image-hide');  
});
graphic.addEventListener('click', (e) => { 
  graphicImg.classList.toggle('image-hide');
});
artwork.addEventListener('click', (e) => {  
  artworkImg.classList.toggle('image-hide');
});
rightChev.addEventListener('click', (e) => {   
});
leftChev.addEventListener('click', (e) => {     
});
