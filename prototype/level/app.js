$(document).ready(function() {});
//collapse loader
$(window).on("load", function() {
  setTimeout(() => {
    $("#loader").addClass("collapse");
  }, 1500);
  setTimeout(() => {
    $("#loader").remove();
  }, 2000);
});
