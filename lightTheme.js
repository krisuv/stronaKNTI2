const themeButton = document.querySelector(".light-theme-button");
const themeIcon =  document.querySelector(".light-theme-button i");
const moon = "fa-solid fa-moon";
const sun = "fa-solid fa-sun";
let theme = localStorage.getItem("theme");

const changeTheme = () => {
  if(theme === "light") {
    document.body.classList.remove("light");
    themeIcon.className = sun;
    theme = "dark";
  } else {
    document.body.classList.add("light");
    themeIcon.className = moon;
    theme = "light";
  }

  localStorage.setItem("theme", theme);
}

if(theme === "light") {
  document.body.classList.add("light");
  themeIcon.className = moon;
}

themeButton.addEventListener('click', changeTheme);