const terminalUser = document.querySelector(".terminal-user");

const cursor = document.createElement("span");
cursor.setAttribute("class","cursor");
cursor.textContent = "|";
terminalUser.after(cursor);

const cursorAnimation = () => {
  cursor.classList.toggle("cursor-active");
}

let cursorInterval = setInterval(cursorAnimation, 400);