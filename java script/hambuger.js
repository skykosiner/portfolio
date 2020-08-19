$(document).ready(function () {
    $("#hamburger").click(function () {
      $(".hamburger").toggleClass("is-opened");
      $(".inside").fadeToggle();
      $("body, html").animate({ scrollTop: 0 });
      $(".inside").animate({ scrollTop: 69});
    });
  });
  