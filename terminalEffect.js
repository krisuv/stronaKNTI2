const spanText = document.querySelector(".span-text");
const cursor = document.querySelector(".cursor");
const terminalText = 'echo ”Witaj na stronie Koła Naukowego Technologii Informacyjnych!”';

let currentLetter = 0;
const typingTime = 70;

// const addLetter = () => {
//   spanText.textContent += terminalText[currentLetter];
//   currentLetter++;
//   if(currentLetter >= terminalText.length) {
//     clearInterval(terminalInterval);
//     clearInterval(cursorInterval);
//   }
// }

const cursorAnimation = () => {
  cursor.classList.toggle("cursor-active");
}

const addLetter = () => {
  spanText.textContent += terminalText[currentLetter];
  currentLetter++;
  if(currentLetter < terminalText.length) {
    return setTimeout(addLetter, typingTime);
  }
  clearInterval(cursorAnimation);
  return setTimeout(nextCommand, 3000);
}

const nextCommand = () => {
  const secondCursorInterval = setInterval(cursorAnimation,400);
}

const cursorInterval = setInterval(cursorAnimation, 400);

//const terminalInterval = setInterval(addLetter, typingTime);
setTimeout(addLetter, 2000);