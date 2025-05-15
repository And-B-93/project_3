new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
});

let btn = document.querySelector('.button-show-more');
let desktop = document.querySelector('.block-desktop');
let img = document.querySelector('.icon-btn');
let text = document.querySelector('.text-btn');
let isShow = false;

btn.addEventListener('click', function() {
  if (isShow) {
    desktop.classList.remove("block-desktop-show");
    btn.classList.remove("button-show-more-reverse");
    text.innerHTML = "Показать всё";
    img.classList.remove("icon-btn-reverse");
  } else {
    desktop.classList.add("block-desktop-show");
    btn.classList.add("button-show-more-reverse");
    text.innerHTML = "Скрыть";
    img.classList.add("icon-btn-reverse");
  }
   isShow = !isShow;
})
