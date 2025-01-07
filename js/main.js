$(document).ready(function () {
  /* ======= Scrollspy ======= */
  $("body").scrollspy({ target: "#header", offset: 100 });

  /* ======= ScrollTo ======= */
  $("a.scrollto").on("click", function (e) {
    // Store hash
    var target = this.hash;
    e.preventDefault();

    // Use jQuery animate instead of scrollTo plugin
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - 60,
      },
      800
    );

    // Collapse mobile menu after clicking
    if ($(".navbar-collapse").hasClass("show")) {
      $(".navbar-collapse").removeClass("show").addClass("collapse");
    }
  });

  /* ======= Fixed Header Animation ======= */
  $(window).on("scroll load", function () {
    if ($(window).scrollTop() > 0) {
      $("#header").addClass("header-scrolled");
    } else {
      $("#header").removeClass("header-scrolled");
    }
  });
});
