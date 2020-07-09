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
  //top btn, list button and header
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {
      $("#top-btn").addClass("scale");
      $("#menu").addClass("scale");
      $("header").addClass("header-bg");
      $("header .logo").addClass("header-link");
      $("header a").addClass("header-link");
      $("header").addClass("header-scale");
    } else {
      $("#top-btn").removeClass("scale");
      $("header").removeClass("header-bg");
      $("header .logo").removeClass("header-link");
      $("header a").removeClass("header-link");
      $("header").removeClass("header-scale");
      $("#menu").removeClass("scale");
    }
  });
});
//collapse loader
$(window).on("load", function() {
  setTimeout(() => {
    $("#loader").addClass("collapse");
  }, 1500);
  setTimeout(() => {
    $("#loader").remove();
  }, 2000);
});
