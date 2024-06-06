const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secoundEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

const updateClock = function(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h -12;
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secoundEl.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(() => {
        updateClock();
    }, 1000)
}
updateClock() 