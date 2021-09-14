// change color for divs

function changeColorRed() {
    let div = document.getElementById('color-red');
    let text = document.getElementById('text-red');
    div.style.backgroundColor = 'orange';
    text.textContent = 'Orange';
}

function changeColorGreen() {
    let div = document.getElementById('color-green');
    let text = document.getElementById('text-green');
    div.style.backgroundColor = 'gray';
    text.textContent = 'Gray';
}

function changeColorBlue() {
    let div = document.getElementById('color-blue');
    let text = document.getElementById('text-blue');
    div.style.backgroundColor = 'purple';
    text.textContent = 'Purple';
}

// gallery

let img = document.querySelector('.gallery-image > img');

function getNextImg() {
    img.setAttribute("src", "assets/images/img2.jpg")
}

function getPreviousImg() {
    img.setAttribute("src", "assets/images/img3.jpg")
}

// calculator

let num1 = Number(document.getElementById('num1').value);
let num2 = Number(document.getElementById('num2').value);
let result = document.querySelector('#result > p');

let sum = () => result.innerHTML = num1 + num2;
let subtract = () => result.innerHTML = num1 - num2;
let multiply = () => result.innerHTML = num1 * num2;
let divide = () => result.innerHTML = num1 / num2;

// function resetInputCalc() {
//     document.getElementById('num1').value = '';
//     document.getElementById('num2').value = '';
// }
