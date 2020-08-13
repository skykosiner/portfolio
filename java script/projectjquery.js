$(document).ready(function () {
    $("#hamburger").click(function () {
      $(".hamburger").toggleClass("is-opened");
      $(".inside").fadeToggle();
      $(".all").fadeToggle();
      $(".inside").animate({ scrollTop: 69});
    });
  });