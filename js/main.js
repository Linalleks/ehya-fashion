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
});
