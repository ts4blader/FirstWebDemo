$(window).on("load", function() {
  setTimeout(() => {
    $("#loader").addClass("collapse");
  }, 1500);
  setTimeout(() => {
    $("#loader").remove();
  }, 2000);
});
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {
      $("#top-btn").addClass("scale");
      $(".menu-btn").addClass("scale");
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
      $(".menu-btn").removeClass("scale");
    }
  });
  //open menu overlay
  $("#open-btn").click(function() {
    $("#overlay-menu").addClass("slide");
    $(".nav-in-btn")
      .find("li")
      .addClass("fade-in");
  });
  //close menu overlay
  $("#close-btn").click(function() {
    $("#overlay-menu").removeClass("slide");
    $(".nav-in-btn")
      .find("li")
      .removeClass("fade-in");
  });
});
