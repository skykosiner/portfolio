$(document).ready(function () {
    $("#hamburger").click(function () {
      $(".hamburger").toggleClass("is-opened");
      $(".inside").fadeToggle();
      $(".logo").fadeToggle();
      $(".inside").animate({ scrollTop: 69});
    });
  }); 