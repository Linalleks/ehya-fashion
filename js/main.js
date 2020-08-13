$(document).ready(function () {
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-menu").toggleClass("navbar-menu--visible");
  });

  let menuItem = $(".navbar-menu__item");
  var menuClose = $(".navbar-menu__close");
  menuItem.on("click", closeMenu);
  menuClose.on("click", closeMenu);

  function closeMenu() {
    if ($(".navbar-menu").hasClass("navbar-menu--visible")) {
      $(".navbar-menu").removeClass("navbar-menu--visible");
    }
  }

  var testimonialSlider = new Swiper(".testimonial-slider", {
    // Optional parameters
    loop: true,

    autoplay: {
      delay: 7000,
    },

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  $(".testimonial-slider").mouseenter(function (e) {
    testimonialSlider.autoplay.stop();
  });
  $(".testimonial-slider").mouseleave(function (e) {
    testimonialSlider.autoplay.start();
  });
});
