/* burgerMenu */
const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body;

if (burger && menu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        body.classList.toggle('_lock');
    })
}
/* /burgerMenu */

/* Filter */

const filter = document.querySelector('.filter');

if (filter) {
	const items = filter.querySelectorAll('.block-filter')

	items.forEach(item => {
		item.addEventListener('click', event => {
			item.querySelector('.block-filter__dropdown').classList.toggle('_active');
			item.querySelector('.block-filter__icon').classList.toggle('_active');

			if (event.target.classList.contains('block-filter__item')) {
				item.querySelector('.block-filter__value').textContent = event.target.textContent;
			}
		})
	})
}

/* /Filter */

/* Swiper (use library swiper.js)*/

const popularSlider = new Swiper('.popular-slider', {
	spaceBetween: 20,
	slidesPerView: 1,
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		992: {
			slidesPerView: 3,
		},
		660: {
			slidesPerView: 2,
		}
	}
});

const reviewsSlider = new Swiper('.slider-reviews', {
	spaceBetween: 20,
	slidesPerView: 1,
	autoHeight: true,
	navigation: {
		nextEl: '.swiper-btn-next',
		prevEl: '.swiper-btn-prev',
	},
});

  /* /Swiper */

/*Gallery*/ 
const galleryItems = document.querySelectorAll(".gallery__item");

if (galleryItems.length > 0) {
	galleryItems.forEach(item => {
		new Swiper(item, {
			slidesPerView: 1, 
			autoplay: {
				delay: 5000,
			},
			effect: 'fade',
		})
	})
}



/*/Gallery*/ 





































































/*=============================Native JS delay auto slider================================= */
// const slider = document.querySelector('.gallery__item');
// const sliderLine = document.querySelector('.gallery__line')
// const sliderImages = document.querySelectorAll('.gallery__img')

// let sliderCount = 0;
// let sliderWidth = slider.offsetWidth;

// function rollSlider(){
// 	sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
// }


// function nextSlide() {
// 	sliderCount++;

// 	if(sliderCount >= sliderImages.length){
// 		sliderCount = 1;
// 	}

// 	rollSlider();
// }





// setInterval(() => {
// 	nextSlide()
// }, 1000);

/*=============================Native JS delay auto slider================================= */