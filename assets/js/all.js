"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
var tickets = document.querySelector('.tickets');
var body = document.querySelector('body');
var model = document.querySelector('.model');
tickets.addEventListener('click', function () {
  body.classList.toggle('show');
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true
});
//# sourceMappingURL=all.js.map
