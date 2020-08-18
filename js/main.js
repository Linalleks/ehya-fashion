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
    autoHeight: true,

    autoplay: {
      delay: 7000,
    },

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    spaceBetween: 30,
  });

  $(".testimonial-slider").mouseenter(function (e) {
    testimonialSlider.autoplay.stop();
  });
  $(".testimonial-slider").mouseleave(function (e) {
    testimonialSlider.autoplay.start();
  });

  var tabsItem = $(".tabs__item");
  var contentItem = $(".trending-content__item");

  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("tabs__item--active");
    $(this).addClass("tabs__item--active");
    contentItem.removeClass("trending-content__item--active");
    $(activeContent).addClass("trending-content__item--active");
  });

  var storiesSlider = new Swiper(".stories-slider", {
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
