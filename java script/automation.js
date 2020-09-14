// For hamburger menu
$(document).ready(function () {
  $("#hamburger").click(function () {
    $(".hamburger").toggleClass("is-opened");
    $(".inside").fadeToggle();
    $(".logo").fadeToggle();
    $(".inside").animate({ scrollTop: 69 });
  });
});

// All for  home kit button
// Get home kit text appear when i press home kit
$(document).ready(function () {
  $(".home-kit").click(function () {
    $(".home-text").fadeToggle();
    $(".Multi-room-music").fadeToggle();
    $(".google").fadeToggle();
    $(".alexa").fadeToggle();
  });
});
//  When user scroll's after the being of the home description` 1
window.onscroll = function (e) {
  var x = document.getElementById("third-paragraph");
  if (window.getComputedStyle(x).display == "none") {
    x.style.display = "block";
    $(".first-paragraph").fadeToggle();
    $(".second-paragraph").fadeToggle();
  }
}
// ALl for alexa button
