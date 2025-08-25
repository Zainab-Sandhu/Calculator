const buttons = document.querySelectorAll(".btn");
let currentDis = "0";
const display = document.querySelector("#display");
function updateDisplay() {
    display.value = currentDis;
}
function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}
function Append(value) {
    if (value === '=') {
        try {
            currentDis = eval(currentDis).toString();
        }
        catch (error) {
            currentDis = "Error";
        }
    }
    else if (value === "AC") {
        currentDis = "0";
    }
    else {
        const lastChar = currentDis.slice(-1);
        if (isOperator(value) && isOperator(lastChar)) {
            return;
        }
        if (currentDis === "0") {
            currentDis = value;
        }
        else {
            currentDis += value;
        }
    }

    updateDisplay();
}
buttons.forEach(button => {
    button.addEventListener("click", () => {
        Append(button.innerText);

    })
});
