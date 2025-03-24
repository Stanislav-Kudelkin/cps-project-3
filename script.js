const brandLogos = [
    { image: "./assets/images/Bitmap (1).svg", alt: "Логотип - Lenovo" },
    { image: "./assets/images/Bitmap (2).svg", alt: "Логотип - Samsung" },
    { image: "./assets/images/Bitmap (3).svg", alt: "Логотип - Appl" },
    { image: "./assets/images/Bitmap (4).svg", alt: "Логотип - ViewSonic" },
    { image: "./assets/images/Bitmap (5).svg", alt: "Логотип - Bosch" },
    { image: "./assets/images/Bitmap (6).svg", alt: "Логотип - HP" },
    { image: "./assets/images/Bitmap (7).svg", alt: "Логотип - Acer" },
    { image: "./assets/images/Bitmap (8).svg", alt: "Логотип - Sony" },
    { image: "./assets/images/Bitmap (1).svg", alt: "Логотип - Lenovo" },
    { image: "./assets/images/Bitmap (2).svg", alt: "Логотип - Samsung" },
    { image: "./assets/images/Bitmap (3).svg", alt: "Логотип - Appl" },
];

let buttonTemplate = document.querySelector('#button-template').content;
let newSwiperSlide = buttonTemplate.querySelector('.swiper-slide');
let swiper = document.querySelector('.swiper');
let listSwipers = swiper.querySelector('.swiper-wrapper');
let swiperInstance = null;
let showButton = document.querySelector('.content__show-button');


for (let i = 0; i < brandLogos.length; i++) {
    let cloneItemTemplate = newSwiperSlide.cloneNode(true);
    let img = cloneItemTemplate.querySelector('.button-icon');
    img.src = brandLogos[i].image;
    img.alt = brandLogos[i].alt;

    listSwipers.appendChild(cloneItemTemplate);
};

const initSwiper = function () {
    if (window.innerWidth < 768) {
        if (!swiperInstance) {
            swiperInstance = new Swiper('.swiper', {
                direction: 'horizontal',
                loop: true,
                slidesPerView: 'auto',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet',
                },
                touchEventsTarget: 'container',
            });
        }
    } else {
        if (swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }
    }
}

initSwiper();
window.addEventListener('resize', initSwiper);

if (showButton) {
    showButton.addEventListener('click', function () {

        swiper.classList.toggle('show-all');
        showButton.classList.toggle('coup');

        if (swiper.classList.contains('show-all')) {
            showButton.textContent = 'Скрыть';
        } else {
            showButton.textContent = 'Показать все';
        }
    });
}