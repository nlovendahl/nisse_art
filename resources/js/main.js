$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

var scrollTop = 0;

  $(window).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if ((scrollDistance - scrollTop) > 50) {
      var navbarHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navbarHeight}, 150);
      scrollTop = scrollDistance;
    } else if ((scrollTop - scrollDistance) > 50){
      $('.navbar').animate({top: '0px'}, 150);
      scrollTop = scrollDistance;
    }
  });
});
