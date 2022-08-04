$('.customer-list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  prevArrow:`<button type='button' class='slick-prev pull-left'><img src="./images/arrow-left.svg" alt=""></i></button>`,
  nextArrow:`<button type='button' class='slick-next pull-right'><img src="./images/arrow-right.svg" alt=""></i></button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows:false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows:false,
      }
    },
  ]
});
window.addEventListener("load", function () {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  toggle && toggle.addEventListener("click", handleToggleMenu);
  function handleToggleMenu(e) {
    menu && menu.classList.add("is-show");
  }
  document.addEventListener("click", handleClickOutside);
  function handleClickOutside(e) {
    if (e.target.matches(".menu-toggle") || e.target.matches(".menu, .menu *"))
      return;
    menu && menu.classList.remove("is-show");
  }
});