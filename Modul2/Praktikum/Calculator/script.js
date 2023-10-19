document.addEventListener("DOMContentLoaded", function () {
  const screen = document.querySelector(".calculator-screen");
  const buttons = document.querySelectorAll("button");

  let currentInput = "";
  let currentOperator = "";
  let firstNumber = null;

  const updateScreen = () => {
    screen.value = currentInput;
  };

  const calculate = () => {
    const secondNumber = parseFloat(currentInput);

    switch (currentOperator) {
      case "+":
        currentInput = (firstNumber + secondNumber).toString();
        break;
      case "-":
        currentInput = (firstNumber - secondNumber).toString();
        break;
      case "*":
        currentInput = (firstNumber * secondNumber).toString();
        break;
      case "/":
        currentInput = (firstNumber / secondNumber).toString();
        break;
      case "%":
        currentInput = (firstNumber % secondNumber).toString();
        break;
      case "^":
        currentInput = Math.pow(firstNumber, secondNumber).toString();
        break;
    }

    currentOperator = "";
    firstNumber = null;
  };

  // Event listener For Button
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.value;

      if (!isNaN(value) || value === ".") {
        currentInput += value;
        updateScreen();
      } else if (value === "=") {
        if (currentOperator && firstNumber !== null) {
          calculate();
          updateScreen();
        }
      } else if (value === "AC") {
        currentInput = "";
        currentOperator = "";
        firstNumber = null;
        updateScreen();
      } else if (value === "pangkat") {
        if (currentOperator && firstNumber !== null) {
          calculate();
          updateScreen();
        }
        currentOperator = "^";
        firstNumber = parseFloat(currentInput);
        currentInput = "";
      } else {
        if (currentOperator && firstNumber !== null) {
          calculate();
          updateScreen();
        }
        currentOperator = value;
        firstNumber = parseFloat(currentInput);
        currentInput = "";
      }
    });
  });
});
