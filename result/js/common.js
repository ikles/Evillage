jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu").slideToggle();
    return false;
  });

  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
    $('.bfilter__label').removeClass('open');
    $('.bfilter__country-open').fadeOut(50);
  });


  $(".top-mnu, .bfilter__label").click(function (e) {
    e.stopPropagation();
  });













$('.slider-1').slick({
  infinite: true,    
  speed: 6900,
  slidesToScroll: 1,
  autoplay: true,    
  slidesToShow: 4,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 0,  
  arrows: false,
  pauseOnHover: true,  
});




/************************************/

/*$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/404.jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/404.jpg')");
  $('body:not(.active)').css('background-image', "unset");

});*/

/************************************/



function popup(openLink, windowEl, closeEl) {  
  $(openLink).click(function(e) {
    e.preventDefault();
    $(windowEl).fadeIn();
    $('body').addClass('ohi');
  });
  $(closeEl).click(function(e) {
    e.preventDefault();
    $(windowEl).fadeOut();
    $('body').removeClass('ohi');
  });
  $('.modal-overlay').click(function () {
    $(this).fadeOut();
    $('body').removeClass('ohi');
  });
  $('.modal-form__block').click(function (e) {
    e.stopPropagation();  
  });
  
}

popup('.projects__btn-2', '.modal-overlay_1', '.modal-close_1');


$('.popinfo__btn').click(function (e) {  
  e.preventDefault()
  $('.popinfo__form').hide();
$('.popthanks').fadeIn();
});


$('.popthanks__check-btn').click(function () {
  $('.modal-overlay_1').fadeOut();
});


$('a[href*=\\#]:not([href=\\#])').click(function () {
  elementClick = $(this).attr("href");
  destination = $(elementClick).offset().top;
  $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 85}, 1100);
  return false;
});


$(window).scroll(function(){
  var wt = $(window).scrollTop();  
  var wh = $(window).height();    
  if (wt > 600) {
    $('.serv-arr-up').show(400);
  }
  else {
   $('.serv-arr-up').hide();
 }
});


  $('[data-fancybox="gallery"]').fancybox({
    arrows: true,
    infobar: false,
    smallBtn: true,
    toolbar: false,
    iframe : {
      css : {
        width : '950px'
      }
    },    
    slideClass: "myClass",
    baseClass: "myclass"
  });



$('.bfilter__select').fancySelect();
$('.choose__select').fancySelect();


$('.bfilter__label .fancy-select').click(function () {
  $(this).parent().toggleClass('open');
});


$('.bfilter__input').focus(function() {
  $(this).parent().addClass('open')
});

$('.bfilter__input').blur(function () {
  $(this).parent().removeClass('open')
});


$('[name="name"]').on("blur", function() {
  const self = $(this);
  if ( ! $(this).val().match('^[а-яА-Я]{3,16}$') ) {  
    self.parent().addClass('valid');
  }
  else {
   self.parent().removeClass('valid'); 
  }
});

const final_class = $('.bfilter__input-country-code i');
const final_code = $('.bfilter__input-country-code span');
const final_input = $('.bfilter__input-country');

$('.bfilter__input-country-code').click(function () {
  $('.bfilter__country-open').fadeIn(50);
  $(this).parent().parent().addClass('open')
});

$('.bfilter__country-open li').click(function () {
  let current_class = $(this).find('i').attr('class');
  let current_code = $(this).find('span').text();
  let current_mask = $(this).attr('data-mask');
  final_class.attr('class', current_class);
  final_code.text(current_code);
  final_input.attr('placeholder', current_mask);
  $('.bfilter__country-open').fadeOut(50);
  $(this).parent().parent().removeClass('open')
});


function tabs(element) {    
  $(element).find('.tabs__list-item').click(function () {
    $(element).find('.tabs__list-item').removeClass('active');
    $(this).addClass('active');    
    let num = $(this).index();
    $(element).find('.tabs__content-list-item').removeClass('active');
    $(element).find('.tabs__content-list-item').eq(num).addClass('active');    
  });
}

tabs('.advloctabs');
tabs('.cont__tabs');


$('.accordion-header').click(function () {
  $(this).toggleClass('active-header');
  $(this).next().slideToggle().toggleClass('open-content');
});


}); //ready

