$(document).ready(function () {
  $("#hamburger").click(function () {
    $(".hamburger").toggleClass("is-opened");
    $(".inside").fadeToggle();
    $(".all").fadeToggle();
    $(".inside").animate({ scrollTop: 69});
    $(".background").toggleClass("blur");
    $("footer").toggleClass("footer");
  });
});


$(document).ready(function () {
  if ($(window).width() > 900) {
    $(".about_title").css({"padding": "90px"});
  };
});

