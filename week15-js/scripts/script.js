// change color for divs
function changeColorBlock() {
    var selection = document.getElementById('colors').value;
    var blockForChangeColor = document.getElementById('changeColor');

    switch (selection) {
        case "Lilac": blockForChangeColor.style.backgroundColor = '#e1d6f6';
            break;
        case "Meadowland": blockForChangeColor.style.backgroundColor = '#ebe4b4';
            break;
        case "ValleyGreen": blockForChangeColor.style.backgroundColor = '#c0e8c1';
            break;
        case "RosePoint": blockForChangeColor.style.backgroundColor = '#fbc9c7';
            break;
        case "MerionBlue": blockForChangeColor.style.backgroundColor = '#9dd1e4';
            break;
        case "Default": blockForChangeColor.style.backgroundColor = '#fdeabd';
            break;
        default: blockForChangeColor.style.backgroundColor = '#fdeabd';
            break;
    }
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
