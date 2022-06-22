function arithmetic() {
  let firstNumber = Number(prompt("input a number"));
  let operator = prompt("choose an operator e.g *, +, -, or /");
  let secondNumber = Number(prompt("input a second number"));
  let result;

  switch (operator) {
    case "*":
      result = firstNumber * secondNumber;
      alert(`${firstNumber} ${operator} ${secondNumber} equals ${result}`);
      break;
    case "+":
      result = firstNumber + secondNumber;
      alert(`${firstNumber} ${operator} ${secondNumber} equals ${result}`);
      break;
    case "-":
      result = firstNumber - secondNumber;
      alert(`${firstNumber} ${operator} ${secondNumber} equals ${result}`);
      break;
    case "/":
      result = firstNumber / secondNumber;
      alert(`${firstNumber} ${operator} ${secondNumber} equals ${result}`);
      break;
    default:
      alert("input is invalid, try again");
  }
  location.reload(true);
}

arithmetic();
