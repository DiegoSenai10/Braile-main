const carousel = document.getElementById("carousel");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

leftBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -200, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: 200, behavior: "smooth" });
});

// Swipe (touchscreen)
let startX = 0;
carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener("touchmove", (e) => {
  const moveX = e.touches[0].clientX;
  const diff = startX - moveX;

  if (Math.abs(diff) > 50) {
    carousel.scrollBy({ left: diff, behavior: "smooth" });
    startX = moveX;
  }
});