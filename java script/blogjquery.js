$(document).ready(function () {
  $("#toggle").click(function () {
    $(".title").fadeToggle();
    $(".card_image").fadeToggle();
    $(".card").fadeToggle();
  });
});
