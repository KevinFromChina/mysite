let myImg = document.querySelector('img')

myImg.onclick = function(){
    let mySrc = myImg.getAttribute('src')
    if (mySrc === './images/rabbit.png') {
        myImg.setAttribute('src', './images/snake.png')
    }
    else {
        myImg.setAttribute('src', './images/rabbit.png')
    }
}

let myHeading = document.querySelector('h1')
myHeading.textContent = 'Welcome Kevin';

// adding personalized welcome message
let myButton = document.querySelector('button')

function setUserName() {
    let myName = prompt('please enter your name.', 'Kevin')
    localStorage.setItem('mySite-name', myName)
    myHeading.textContent = 'Welcome ' + myName
}

if (!localStorage.getItem('mySite-name')) {
    setUserName()
}
else {
    let storedName = localStorage.getItem('mySite-name');
    myHeading.textContent = 'Welcome ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

