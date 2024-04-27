// const tabs = document.querySelector(".tabs");
// const btns = document.querySelectorAll(".button");
// const articles = document.querySelectorAll(".content");
// tabs.addEventListener("click", (event)=> {
//     const id = event.target.dataset.id;

//     if(id){
//         btns.forEach((btn) =>{
//             btn.classList.remove("live");
//         });
//         event.target.classList.add("live");
//         articles.forEach((article) => {
//             article.classList.remove("live")
//         });
//         const element = document.getElementById("id");
//         element.classList.add("live");
//     }
// });

const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");
tabs.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("live");
    });
    e.target.classList.add("live");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("live");
    });
    const element = document.getElementById(id);
    element.classList.add("live");
  }
});