const bgImgEl = document.getElementById("bg-img");

window.addEventListener("scroll", () => {
    upadateImage()
});

function upadateImage(){
    bgImgEl.style.opacity = 1 - window.pageYOffset / 900;
    bgImgEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}