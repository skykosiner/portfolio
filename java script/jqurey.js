$(document).ready(function () {
  $("#hamburger").click(function () {
    $(".hamburger").toggleClass("is-opened");
    $(".inside").fadeToggle();
    $(".all").fadeToggle();
    $("body, html").animate({ scrollTop: 0 });
    $(".background").toggleClass("blur");
    $("footer").toggleClass("footer");
    $(".inside").animate({ scrollTop: 69});
  });
});

