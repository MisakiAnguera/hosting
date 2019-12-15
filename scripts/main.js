let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3');

function setUserName() {
  let myName = prompt('Antes de ser bienvenido al Misakismo, rellena el campo con tus últimas palabras como pagano.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Existes, piensas, dices, y yo veo que has realizado ese proceso sin aportar yo nada. ' + myName + ' Lo has vuelto a hacer.';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Existes, piensas, dices, y yo veo que has realizado ese proceso sin aportar yo nada. ' + storedName + ' Lo has vuelto a hacer.';
}

myButton.onclick = function() {
  setUserName();
}
