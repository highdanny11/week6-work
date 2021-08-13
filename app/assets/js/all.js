$(function() {
  console.log('Hello Bootstrap5');
});
const tickets = document.querySelector('.tickets');
const body = document.querySelector('body');
const model = document.querySelector('.model');
tickets.addEventListener('click',()=>{
  body.classList.toggle('show')
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop:true
});