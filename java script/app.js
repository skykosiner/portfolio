$(document).ready(function () {
  $("#hamburger").click(function () {
    $(".hamburger").toggleClass("is-opened");
    $(".inside").fadeToggle();
    $(".hello").fadeToggle();
    $(".list").fadeToggle();
    $(".logo").fadeToggle();
    $(".social").fadeToggle();
    $(".me").fadeToggle();
    $("body, html").animate({ scrollTop: 0 });
    $(".inside").animate({ scrollTop: 69 });
  });
});

$(window).scroll(function () {
  $("body, html").animate({ scrollTop: 0 });
});
