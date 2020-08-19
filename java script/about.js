$(document).ready(function () {
    $("#hamburger").click(function () {
      $(".hamburger").toggleClass("is-opened");
      $(".inside").fadeToggle();
      $(".all").fadeToggle();
      $(".inside").animate({ scrollTop: 69});
    });
  }); 

  $(window).scroll(function() {
    $("body, html").animate({ scrollTop: 0 });
  });