$(document).ready(function() {
  var items = $("#showcase-box").find(".item");
  items.addClass("normal");
  items.find(".caption").addClass("long");
  var btn = $("#showcase-box").find(".overlay");
  // showcase box setting
  btn.click(function() {
    var item = $(this).parent();
    item.toggleClass("full");
    item.find(".caption").toggleClass("short");
    item.find("#add-btn").toggleClass("open");

    $(this).toggleClass("overlay-mini");

    item.mouseleave(function() {
      item.removeClass("full");
      item.find(".caption").removeClass("short");
      item.find("#add-btn").removeClass("open");
      $(this)
        .find(".overlay")
        .removeClass("overlay-mini");
    });
  });
});
