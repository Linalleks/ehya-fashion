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

  var storiesSlider = new Swiper(".stories-slider", {
    // Optional parameters
    loop: true,

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    navigation: {
      nextEl: ".stories__button--next",
      prevEl: ".stories__button--prev",
    },
  });

  // Обработка форм
  $(".subscribe").validate({
    errorClass: "invalid",
    messages: {
      email: {
        required: "We need your email address to contact you",
        email: "Email address must be in the format of name@domain.com",
      },
    },
  });
});
