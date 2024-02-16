const btnRight = document.querySelector(".btn-right");
const btnLeft = document.querySelector(".btn-left");
const slider = document.querySelector(".slider");
let width = Math.round(window.innerWidth / 2);
const move = width + "px";
const moveLeft = "-translate-x-" + `[${window}px]`;
const moveRight = "translate-x-" + `[${move}px]`;
btnRight.addEventListener("click", () => {
  slider.style.transform = `translateX(${move})`;
  width += 500;
});

btnLeft.addEventListener("click", () => {
  slider.classList.remove(moveRight);
  slider.classList.add(moveLeft);
});
