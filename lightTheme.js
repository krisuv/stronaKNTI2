const themeButton = document.querySelector(".light-theme-button");

const changeTheme = () => {
  document.body.classList.toggle("light");
}
themeButton.addEventListener('click', changeTheme);