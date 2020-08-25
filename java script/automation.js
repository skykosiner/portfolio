// For hamburger menu
$(document).ready(function () {
  $("#hamburger").click(function () {
    $(".hamburger").toggleClass("is-opened");
    $(".inside").fadeToggle();
    $(".logo").fadeToggle();
    $(".inside").animate({ scrollTop: 69 });
  });
});
// Get home kit text appear when i press home kit
$(document).ready(function () {
  $(".home-kit").click(function () {
    $(".home-text").fadeToggle();
    $(".Multi-room-music").fadeToggle();
    $(".google").fadeToggle();
    $(".alexa").fadeToggle();
  });
});
//  When user scroll's after the being of the home description
$(window).scroll(function () {
  if ($(".home-text").css("display") == ("none")) {
    $(".second-paragraph").fadeToggle();
  }
});