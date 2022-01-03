let spans = document.querySelectorAll(".skill span");
let skillsSection = document.querySelector(".skills");
let stateSection = document.querySelector(".state");
let numbers = document.querySelectorAll(".number");
let started = false;
let menu = document.querySelector(".bars");
let menulist = document.querySelector(".bars + ul");
menu.onclick = () => menulist.classList.add("show");
window.onscroll = function () {
  if (this.scrollY >= skillsSection.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }

  if (this.scrollY >= stateSection.offsetTop - 400) {
    if (!started) {
      numbers.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
