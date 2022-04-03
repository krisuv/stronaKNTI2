const spanText = document.querySelector(".span-text");
const commandOut = document.querySelector(".echo-command-out");
const newCommand = document.querySelector(".new-command");
const terminalUser = document.querySelector(".terminal-user");
const terminalText = 'echo ”Witaj na stronie Koła Naukowego Technologii Informacyjnych!”';

const cursor = document.createElement("span");
cursor.setAttribute("class","cursor");
cursor.textContent = "|";
spanText.after(cursor);

let currentLetter = 0;
const typingTime = 70;


const cursorAnimation = () => {
  cursor.classList.toggle("cursor-active");
}

const addLetter = () => {
  spanText.textContent += terminalText[currentLetter];
  currentLetter++;
  if(currentLetter < terminalText.length) {
    return setTimeout(addLetter, typingTime);
  }
  return setTimeout(acceptCommand, 1500);
}

const acceptCommand = () => {
  clearInterval(cursorInterval);
  terminalUser.after(cursor);
  setInterval(cursorAnimation, 400)
  commandOut.style.display = "block";
  newCommand.style.display = "block";
}

let cursorInterval = setInterval(cursorAnimation, 400);
setTimeout(addLetter, 2000);