const terminalCommandSpan = document.querySelector(".echo-command-type");
const newCommand = document.querySelector(".new-command");
const echoCommandOut = document.querySelector(".echo-command-out");

const echoText = "echo ”Witaj na stronie Koła Naukowego Technologii Informacyjnych!”";

// zmienna wskazująca na następną literę do wypisania w terminalu
let i = 0;

const terminalType = () => {
  if(echoText[i]){
    terminalCommandSpan.textContent += echoText[i];
    i++;
  } else {  
    clearInterval(terminalInterval);
    setTimeout(nextCommand, 600);
  }
}

const nextCommand = () => {
  if(terminalCommandSpan.textContent.length === echoText.length) {
    newCommand.style.display = "block";
    echoCommandOut.style.display = "block";
  }
}
// setTimeout(() => {
//   const terminalInterval = window.setInterval(terminalType,80);
//},1000)
const terminalInterval = window.setInterval(terminalType,80);
