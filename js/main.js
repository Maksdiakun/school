


$(document).ready(function() {
	

  $('.search >img').click( function () {
    $('.pop-up').addClass('search-act-viz');
  });

   $('.close-pop-up').click( function () {
    $('.pop-up').removeClass('search-act-viz');
  });

if ($(window).width() <=358.9) {
    $('.search >img').click( function () {
    $('.carousel-indicators').hide();
    });
     $('.close-pop-up').click( function () {
    $('.carousel-indicators').show();
  });
  } 
 




   $('.search-icon').click( function () {
    $('.top-search').toggleClass('search-act-viz');

  });
 
 

   $('.type-work span').click( function () {
    $('.info-open').fadeIn();
     $(this).addClass('change-color');
     $('.container').addClass('not-active');

  });
  $('.close-info').click(function(){
  	$('.info-open').fadeOut();
  	 $('.type-work span').removeClass('change-color');
  	  $('.container').removeClass('not-active');
  });


   $('.menu__btn').on('click', function () {
    $(this).toggleClass('menu__btn_active');
    $('.menu').slideToggle(600).toggleClass('open');
    $('.nav').addClass('bg-green');
    if ($('.nav').hasClass('bg-green') && $('.menu').hasClass('open')) {
      $(".nav").addClass('bg-green');
    } else {
      setTimeout(function () {
        $(".nav").removeClass('bg-green');
      }, 500);
    }
  });

  $(window).resize(function () {
    if ($(window).width() >= 992) {
      $('.menu').addClass('d-flex');
    } else if ($(window).width() <= 991.8) {
      $('.menu').removeClass('d-flex');
    }
  });

  $('.info-btn').click( function () {
    $('.info-corner').fadeIn();
});
  $('.closer').click(function(){
  	$('.info-corner').fadeOut();
  	 $('.type-work span').removeClass('change-color');
  	  $('.container').removeClass('not-active');
  });

$(function() {
  initStickBar();
});


function initStickBar(){
  $(".info-corner").stick_in_parent();
};

});




function initStickBar(){
  $(".info-corner").stick_in_parent();
};
