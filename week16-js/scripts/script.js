// task 1. input number
// - Asks the user to enter values using `prompt` and saves them to an array
// - Finishes prompting for values when the user enters a non-numeric value, an empty string, or clicks "Cancel"
// - Displays the resulting array in ascending order
// - Counts and returns the sum of array elements

function sumInput() {
    let number = prompt('Введите число: ');
    let array = [];
    let sum = 0;
    while (+ number) {
        number = prompt('Введите число: ');
        if (+ number) {
            array.push(number);
        }
        sum += Number(number);
    }
    alert("Отсортированный массив: " + array.sort((a, b) => a - b) + "\n" + "Число элементов: " + array.length + "\n" + "Сумма чисел: " + sum);
}

document.getElementById("input-number").addEventListener("click", sumInput);
