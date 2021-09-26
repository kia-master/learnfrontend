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

// registration
const form = document.getElementById('form');

const welc = document.getElementById("welcome");
const info = document.getElementById("info_user");

const firstName = document.getElementById("firstname");
const firstNameError = document.getElementById("warnname");

const surname = document.getElementById("surname");
const surnameError = document.getElementById("warnsurname");

const password = document.getElementById("password");
const passwordError = document.getElementById("warnpass");

const passRepeat = document.getElementById("passrepeat");
const passrepeatError = document.getElementById("warnpassrep");

const email = document.getElementById("email");
const emailError = document.getElementById("warnmail");

var checkGender = document.querySelectorAll('input[type="radio"]:checked');
var valueGender = checkGender.length > 0 ? checkGender[0].value : null;
const checkedGenderError = document.getElementById("warngender");

const country = document.getElementById("country");
const countryError = document.getElementById("warncountry");

function checkEmpty(v, err) {
    if (v.value == "") {
        err.innerText = "Поле не должно пустым!";
    } else {
        err.innerText = "";
    }
}

function comparePass(first, second, err) {
    if (first.value !== second.value) {
        err.innerText = "Пароли не совпадают!";
    } else if (second.value == "") {
        err.innerText = "Поле не должно пустым!";
    } else {
        err.innerText = "";
    }
}

function checkSelect(sel, err) {
    let selectedCountry = sel.options[sel.selectedIndex].value;
    if (selectedCountry == 0) {
        err.innerText = "Выберите страну";
    } else {
        err.innerText = "";
    }
}

function checkRadio(box, err) {
    if (box != null) {
        err.innerText = "";
    } else {
        err.innerText = "Выберите пол";
    }
}

form.addEventListener('submit', (event) => {

    checkEmpty(firstName, firstNameError);
    checkEmpty(surname, surnameError);
    checkEmpty(password, passwordError);
    checkEmpty(passRepeat, passrepeatError);
    checkEmpty(email, emailError);

    comparePass(password, passRepeat, passrepeatError);
    checkSelect(country, countryError);
    checkRadio(valueGender, checkedGenderError);

    event.preventDefault();
});
