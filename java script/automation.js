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
// Get div automation to move when apple home kit is clicked
$(document).ready(function () {
  if ($(".home-text").css("display") == ("block")) {
    alert("The paragraph  is visible.");
  } else {
    alert("The paragraph  is hidden.");
  }
});
