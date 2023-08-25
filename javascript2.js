let slideindex = 1;
showSlides1(slideindex);

// Next/previous controls
function plusSlide(n) {
    showSlides1(slideindex += n);
}

// Thumbnail image controls
function currentSlides(n) {
    showSlides1(slideindex = n);
}

function showSlides1(n) {
    let i;
    let slides = document.getElementsByClassName("mySlide");
    let dots1 = document.getElementsByClassName("dots");

    if (n > slides.length) { slideindex = 1; }
    if (n < 1) { slideindex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(" active", "");
    }

    slides[slideindex - 1].style.display = "block";
    dots1[slideindex - 1].className += " active";

    // Increase slide index and call the function again after a delay
    slideindex++;
    if (slideindex > slides.length) { slideindex = 1; }
    setTimeout(showSlides1, 5000);
}
