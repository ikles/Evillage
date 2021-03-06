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





$('.projects__slider').slick({
  infinite: true,    
  speed: 600,
  slidesToScroll: 1,  
  slidesToShow: 1,
  cssEase: 'linear',
  autoplay: false,
  autoplaySpeed: 0,  
  arrows: true,
  dots: true,
  pauseOnHover: true,  
  adaptiveHeight: true
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
popup('.top__btn, .footer__btn', '.modal-overlay_2', '.modal-close_2');


$('.popinfo__btn').click(function (e) {  
  e.preventDefault()
  $('.popinfo__form').hide();
$('.popthanks').fadeIn();
});


$('.popcallback__btn').click(function (e) {  
  e.preventDefault()
  $('.popcallback__content').hide();
$('.popcallback__thanks').fadeIn();
});



$('.popthanks__check-btn').click(function () {
  $('.modal-overlay_1').fadeOut();
});

$('.popcallback__btn-2').click(function () {
  $('.modal-overlay_2').fadeOut();
});

$('a[href*=\\#]:not([href=\\#])').click(function () {
  elementClick = $(this).attr("href");
  destination = $(elementClick).offset().top;
  $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 0}, 1100);
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
  if ( ! $(this).val().match('^[??-????-??]{3,16}$') ) {  
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


/*23.06.2022*/

$(window).resize(function() {
  if( $(window).width() > 991 ) {
    tabs('.advloctabs');
  }
});

if( $(window).width() > 991 ) {
  tabs('.advloctabs');
}

/*end 23.06.2022*/


$('.cont__tab').click(function () {
  
  const self = $(this);
  let num = $(this).index();

$('.cont__tab').removeClass('active');
    $(this).addClass('active');    

  $('.cont__tabs-content-list-1').find('.tabs__content-list-item').removeClass('active')
  .eq(num).addClass('active');
  $('.cont__tabs-content-list-2').find('.tabs__content-list-item').removeClass('active')
  .eq(num).addClass('active');
});


$('.accordion-header').click(function () {
  $(this).toggleClass('active-header');
  $(this).next().slideToggle().toggleClass('open-content');
});


$(".phone_mask").mask("+7 (999) 999-99-99");
$(".phone_mask-2").mask("(999) 999-99-99");


  $(window).resize(function() {
    min_992()
  });


function min_992() {
  /*if ($(window).width() < 992 ) {
    let widthT = $('.advloctabs').width();
    $('.tabs__content-list-item').css('width', widthT);
  }*/
}

min_992();


}); //ready