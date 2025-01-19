document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".carouselImage .slide");
    const indicators = document.querySelectorAll(".carouselImage .indicator");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('show');
        });
        slides[index].classList.add("show");

        indicators.forEach(indicator => {
            indicator.classList.remove("active");
        });
        indicators[index].classList.add("active");

        currentIndex = index;
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => showSlide(index));
    });

    const nextSlide = () => {
        let nextIndex = (currentIndex + 1) % slides.length;
        if (nextIndex === 0 && currentIndex === slides.length - 1) {
            setTimeout(() => showSlide(nextIndex), 5000); // 等待5秒后切换到第一张图
        } else {
            showSlide(nextIndex);
        }
    };

    const interval = setInterval(nextSlide, 5000); // 5秒切换一次

    document.querySelector(".carouselImage").addEventListener("mouseenter", () => {
        clearInterval(interval);
    });

    document.querySelector(".carouselImage").addEventListener("mouseleave", () => {
       const interval = setInterval(nextSlide, 5000);
    });

    showSlide(0);
});