const slider = document.getElementById("slider");
let slideIndex = 2;

function nextSlide() {
	slideIndex += 2;
	updateSlider();
}

function prevSlide() {
	slideIndex -= 2;
	updateSlider();
}

function updateSlider() {
	if (slideIndex >= 6) {
		slideIndex = 0;
	} else if (slideIndex < 0) {
		slideIndex = 4;
	}
	const offset = -slideIndex * 310;
	slider.style.transform = `translateX(${offset}px)`;
}
updateSlider();
