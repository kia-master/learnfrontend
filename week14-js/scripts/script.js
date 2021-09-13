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
