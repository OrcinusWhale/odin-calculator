function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(params) {
  return a / b;
}

function operate(a, op, b) {
  switch (opp) {
    case "+":
      add(a, b);
      break;

    case "-":
      substract(a, b);
      break;

    case "x":
      multiply(a, b);
      break;

    case "÷":
      divide(a, b);
      break;
  }
}

let a, op, b;
