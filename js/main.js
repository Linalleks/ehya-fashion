$(document).ready(function () {
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  let menuLink = $(".navbar-menu__link");
  menuLink.on("click", function () {
    if ($(".navbar-bottom").hasClass("navbar-bottom--visible")) {
      $(".navbar-bottom").removeClass("navbar-bottom--visible");
    }
  });

  var hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,
    autoHeight: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  var modalButton = $('[data-toggle="modal"]');
  var closeModalButton = $(".modal__close");
  var modalOverlay = $(".modal__overlay");
  modalOverlay.on("click", closeModal);
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  $(document).keydown(function (eventObject) {
    if (
      (eventObject.which == 27) &
      $(".modal__dialog").hasClass("modal__dialog--visible")
    ) {
      closeModal();
    }
  });

  function openModal() {
    $(".modal__overlay").addClass("modal__overlay--visible");
    $(".modal__dialog").addClass("modal__dialog--visible");
  }
  function closeModal() {
    event.preventDefault();
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Your Name must be at least 2 letters long",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Email address must be in the format of name@domain.com",
        },
        phone: {
          required: "We need your phone number to contact you",
          minlength: "Phone number must be full",
        },
      },
    });
  });

  // Обработка маски телефона
  $(".input-phone").mask("+7 (999) 999-99-99", { autoclear: false });

  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });

  AOS.init();
});
