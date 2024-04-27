const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector
(".trailer-container");
const vedioEl = document.querySelector("video");

btnEl.addEventListener("click", () => {
    trailerContainerEl.classList.remove("active");

});
closeIconEl.addEventListener("click",() => {
    trailerContainerEl.classList.add("active");
    vedioEl.pause();
    vedioEl.currentTime = 0;
});