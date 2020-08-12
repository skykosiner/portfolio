$(document).ready(function () {
  $("#hamburger").click(function () {
    $(".hamburger").toggleClass("is-opened");
    $(".inside").fadeToggle();
    $(".all").fadeToggle();
    $("body, html").animate({ scrollTop: 0 });
    $(".background").toggleClass("blur");
    $("footer").toggleClass("footer");
  });
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $(".button").fadeIn().one();
  } else {
    $(".button").fadeOut().one();
  }
});

$(document).ready(function () {
  $(".button").click(function () {
    $("body,html").animate({ scrollTop: 0 });
  });
})


$(window).scroll(function () {
  $(".image").css("opacity", 1 - $(window).scrollTop() / 250);
});


//For Image coming in when scroll up
$(window).scroll(function () {
if ($(".image").css("opacity") == 1){
    $(".image").css("display", "block")
    $(".about").css("display", "none");
  }
});

// For image on mobile
$(document).ready(function () {
  if ($(window).width() < 960) {
    $(".image").css("display", "none");
    $(".about").css("display", "block");
  }
});

//For footer conming in and out
$(document).ready(function () {
  if ($(window).width() < 960) {
    $(".footer").fadeIn().one;
    $("body, html").animate({ scrollTop: 0 });
  } else {
    $(".footer").fadeOut().one;
  }
});

$(window).scroll(function () {
  $(".footer").fadeIn().one();
});
