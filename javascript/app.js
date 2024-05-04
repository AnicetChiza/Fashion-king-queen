//Home page changing image background
let currentIndex = 0;

function changeBg() {
    const images = [
        'url("../images/home-page/img1.jpg")',
        'url("../images/home-page/img2.JPG")',
        'url("../images/home-page/img3.JPG")',
        'url("../images/home-page/img4.jpg")',
        'url("../images/home-page/img5.JPG")',
        'url("../images/home-page/img6.JPG")',
        'url("../images/home-page/img10.JPG")',
    ];

    const page = document.querySelector('.home-page');
    const bg = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
    page.style.backgroundImage = bg;
}

setInterval(changeBg, 4000);