const input = document.getElementById("text_input");

//input.value = "Dima eats children";

const numbers = document.getElementsByClassName("numbers")[0]; // получаем кнопки чисел

console.log(numbers);

const operations = document.getElementsByClassName("operations")[0]; // получаем кнопки операций

console.log(operations);

const go = document.getElementById("go");
// const go = document.querySelector("#go");

function addNumber(e) {
    let number = e.target.value;
    if (number != undefined) {
    input.value = input.value + number;
    }
}

numbers.addEventListener("click", (e) => addNumber (e)); // вешаем прослушку на блок кнопок

function addOperation(e) {
    let operation = e.target.textContent;
    if (operation != undefined) {
    input.value = input.value + operation;
    }
}

operations.addEventListener("click", (e) => addOperation (e)); // вешаем прослушку на блок кнопок

function cal() {
    let result = eval(input.value);
    //console.log(result)
    input.value = result
}

go.addEventListener("click", cal);



 