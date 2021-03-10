const all = document.querySelector(".button__all");
const web = document.querySelector(".button__web-design");
const graphic = document.querySelector(".button__graphic-gesign");
const artwork = document.querySelector(".button__artwork");
const all_img = document.querySelector(".layout-4-column");
const web_img = all_img.querySelector(".portfolio_web");
const graphic_img = all_img.querySelector(".portfolio_gesign");
const artwork_img = all_img.querySelector(".portfolio_artwork");
const right_chev = document.querySelector(".slider__right-chev");
const left_chev = document.querySelector(".slider__left-chev");

all.addEventListener("click", () => {
  web_img.classList.remove("image-hide");
  graphic_img.classList.remove("image-hide");
  artwork_img.classList.remove("image-hide");
});
web.addEventListener("click", () => web_img.classList.toggle("image-hide"));
graphic.addEventListener("click", () => graphic_img.classList.toggle("image-hide"));
artwork.addEventListener("click", () => artwork_img.classList.toggle("image-hide"));
right_chev.addEventListener("click", () => {});
left_chev.addEventListener("click", () => {});
