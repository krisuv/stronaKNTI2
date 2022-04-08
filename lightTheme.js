const themeButton = document.querySelector(".light-theme-button");

let theme = localStorage.getItem("theme");

const changeTheme = () => {
  if(theme === "light") {
    document.body.classList.remove("light");
    theme = "dark";
  } else {
    document.body.classList.add("light");
    theme = "light";
  }

  localStorage.setItem("theme", theme);
}

if(theme === "light") {
  document.body.classList.add("light");
}

themeButton.addEventListener('click', changeTheme);