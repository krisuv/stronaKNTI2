const hamburger = document.querySelector(".hamburger-container");
const backgroundBlur = document.createElement("div");

const smallDekstopScreen = 950;
const tabletScreen = 820;
const mobileScreen = 400;

backgroundBlur.setAttribute("class","background-blur")
document.body.appendChild(backgroundBlur);

const showMenu = () => {
  backgroundBlur.classList.toggle("background-blur-active");
  hamburger.classList.toggle('hamburger-active');
}

const checkViewportWIdth = () => {
  if(window.innerWidth > tabletScreen) {
    if(backgroundBlur.classList.contains("background-blur-active")) {
      backgroundBlur.classList.remove("background-blur-active");
    }
  }
}
hamburger.addEventListener('click', showMenu);
window.addEventListener("resize", checkViewportWIdth);