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
