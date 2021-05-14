const rightButton = document.getElementById("right");
const leftButton = document.getElementById("left");
const cardContainer = document.getElementsByClassName(
  "carousal-card-container"
)[0];
function activateCarousal() {
  rightButton.click();
}
rightButton.addEventListener("click", (e) => {
  cardContainer.scrollTo({
    top: 0,
    left: cardContainer.scrollLeft + 300,
    behavior: "smooth",
  });
});

leftButton.addEventListener("click", (e) => {
  cardContainer.scrollTo({
    top: 0,
    left: cardContainer.scrollLeft - 300,
    behavior: "smooth",
  });
});
