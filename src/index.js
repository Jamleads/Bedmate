const navMobile = document.querySelector(".mobile-nav");
const navToggle = document.querySelector(".nav-toggle");
const closeNavMobile = document.querySelector(".close-btn");

navToggle.addEventListener("click", () => {
  navMobile.classList.remove("hidden");
});
closeNavMobile.addEventListener("click", () => {
  navMobile.classList.add("hidden");
});

const targetBlocks = document.querySelectorAll(".target-block");
const containers = document.querySelectorAll(".cont");

window.addEventListener("scroll", () => {
  targetBlocks.forEach((targetBlock, index) => {
    const blockPosition = targetBlock.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (blockPosition < screenHeight / 2) {
      containers[index].classList.add("animate");
    } else containers[index].classList.remove("animate");
  });
});
