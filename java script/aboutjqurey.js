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


$(document).ready(function () {
  if ($(window).width() > 900) {
    $(".about_title").css({"padding": "90px"});
  };
});

