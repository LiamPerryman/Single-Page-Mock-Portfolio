const next = document.querySelector(".btn-right");
const prev = document.querySelector(".btn-left");
const slider = document.querySelector(".slider");
const img = document.querySelector(".img");
let direction;

let imgWidth = img.offsetWidth + 20;
window.addEventListener("resize", () => {
  imgWidth = img.offsetWidth + 20;
});

next.addEventListener("click", () => {
  if (direction === -1) direction = 1;
  direction = -1;
  slider.style.transform = `translate(-${imgWidth}px)`;
});

prev.addEventListener("click", () => {
  direction = 1;
  if (direction === -1) {
    slider.appendChild(slider.firstElementChild);
  }

  slider.style.transform = `translate(${imgWidth}px)`;
});

slider.addEventListener("transitionend", () => {
  if (direction === -1) {
    slider.appendChild(slider.firstElementChild);
  } else if (direction === 1) {
    slider.prepend(slider.lastElementChild);
  }
  slider.style.transition = "none";
  slider.style.transform = "translate(0)";
  setTimeout(() => {
    slider.style.transition = "all .5s";
  });
});
