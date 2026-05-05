let slideIndex = 1;

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlide");
    const dots = document.getElementsByClassName("dot");

    if (slides.length === 0) {
        console.warn("No slides found yet – waiting...");
        return; 
    }

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";

    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function initSlideshow() {
    if (document.getElementsByClassName("mySlide").length > 0) {
        slideIndex = 1;
        showSlides(slideIndex);

        
        setInterval(() => {
            plusSlides(1);
        }, 5000);
    } else {
        
        const interval = setInterval(() => {
            if (document.getElementsByClassName("mySlide").length > 0) {
                slideIndex = 1;
                showSlides(slideIndex);
                setInterval(() => plusSlides(1), 5000);
                clearInterval(interval);
            }
        }, 300);

        
        setTimeout(() => clearInterval(interval), 5000);
    }
}


if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSlideshow);
} else {
    
    setTimeout(initSlideshow, 100);
}


window.plusSlides = plusSlides;
window.currentSlide = currentSlide;