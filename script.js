const slides = document.querySelectorAll('.slide');

toggleSlideActive = slideIndex => {
    slides.forEach((slide, index) => {
        let prevActive = false;
        if (slide.classList.contains('active')) {
            slide.classList.remove('active');
            prevActive = true;
        }

        if (slideIndex === index && !prevActive) {
            console.log(prevActive);
            slide.classList.add('active');
        }
    })
}

for (let slideIndex = 0; slideIndex < slides.length; slideIndex++) {
    currentSlide = slides[slideIndex];
    currentSlide.addEventListener('click', () => {
        toggleSlideActive(slideIndex);
    })
}
