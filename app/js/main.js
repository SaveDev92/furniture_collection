$(function () {
    $('.top__slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows:false
      });

      $('.contact-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 10,
        slidesToScroll: 10,
        arrows:false
        });

})



let mixer = mixitup('.gallery__list');

let btn1 =document.querySelector('.gallery__link1');
btn1.click();



let allBtns = document.querySelectorAll('.btns');

allBtns.forEach(function(btn) {
  btn.addEventListener('click', () => {
    allBtns.forEach(e => e.classList.remove('active'));
    btn.classList.add('active');
  });
});


