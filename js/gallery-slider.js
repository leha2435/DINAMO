// DOTS BOTTOM SLIDER
let currentIndex = 0;

function showSlide(index) {
	const sliderTop = document.querySelector(".slider-top");
	const sliderBottom = document.querySelector(".slider-bottom");
	const slideWidth = document.querySelector(".slider-container").offsetWidth;
	const dots = document.querySelectorAll(".dot");

	sliderTop.style.transform = `translateX(${-index * slideWidth}px)`;
	sliderBottom.style.transform = `translateX(${-index * slideWidth}px)`;

	dots.forEach((dot) => dot.classList.remove("active"));
	dots[index].classList.add("active");
}

function currentSlide(index) {
	currentIndex = index;
	showSlide(index);
}

// Initial display
showSlide(currentIndex);

function showSlide(index) {
	const sliderTop = document.querySelector(".slider-top");
	const sliderBottom = document.querySelector(".slider-bottom");
	const slideWidth = document.querySelector(
		".gallery__slider-container"
	).offsetWidth;
	const dots = document.querySelectorAll(".dot");

	sliderTop.style.transform = `translateX(${-index * slideWidth}px)`;
	sliderBottom.style.transform = `translateX(${-index * slideWidth}px)`;

	dots.forEach((dot) => dot.classList.remove("active"));
	dots[index].classList.add("active");
}

function currentSlide(index) {
	currentIndex = index;
	showSlide(index);
}

// Initial display
showSlide(currentIndex);
