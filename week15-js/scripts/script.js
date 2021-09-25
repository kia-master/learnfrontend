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

function getNumberOne() {
    let num1 = Number(document.getElementById('num1').value);
    return num1;
}

function getNumberTwo() {
    let num2 = Number(document.getElementById('num2').value);
    return num2;
}

let result = document.querySelector('#result > p');
let sum = () => result.textContent = getNumberOne() + getNumberTwo();
let subtract = () => result.innerHTML = getNumberOne() - getNumberTwo();
let multiply = () => result.innerHTML = getNumberOne() * getNumberTwo();
let divide = () => {
    if (getNumberTwo() == 0) {
        result.textContent = 'На ноль делить нельзя!';
        result.style.color = "red";
        result.style.fontWeight = "bolder";
    } else {
        result.innerHTML = getNumberOne() / getNumberTwo();
    }
}
function resetInputCalc() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    result.textContent = 'Здесь будет результат';
    result.style.color = "";
    result.style.fontWeight = "";
}
