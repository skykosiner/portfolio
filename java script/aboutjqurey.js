$(document).ready(function () {
  $("#hamburger").click(function () {
    $(".hamburger").toggleClass("is-opened");
    $(".inside").fadeToggle();
    $('.about').fadeToggle();
    $('.title').fadeToggle();
    $(".inside").animate({ scrollTop: 69});
    $(".background").toggleClass("blur");
  });
});

// Scaling if screen is   less then 900px
$(document).ready(function () {
  if ($(window).width() > 900) {
    $(".about_title").css({"padding": "90px"});
  };
});

// When read more button is pressed show readmore text and hide footer
$(document).ready(function () {
  $('.read-more').click(function () {
    $('.footer').fadeToggle();
    $(".more").fadeToggle();
    // Set the color of the Read more button to a greyish color
    $('.read-more').css({'color': '#444444'});
  });
});



$(document).ready(function () {
  $('.read-more').click(function () {
    if ($('.read-more').css('color') === '#444444'){
      $('body, html').animate({ scrollTop: 50000});
    }
  });
});










// If at the bottom of the page and read more text is out then hide it and reveal the footer
$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() == $(document).height()) {
    $('.footer').fadeIn();
    $('.more').fadeOut();
      if ($('.more').css('display') === 'none'){
      $('body, html').animate({ scrollTop: 0});
      $('.read-more').css({'color': '#ffffff'});
    }
  }
});