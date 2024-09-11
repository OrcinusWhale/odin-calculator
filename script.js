function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, op, b) {
  switch (op) {
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

function number(event) {
  let input = Number(event.target.innerText);
  if (stage == 1) {
    a = a * 10 + input;
    display.innerText = String(a);
  }
}

let a = 0;
let op;
let b = 0;
let stage = 1;
let display = document.querySelector("#display");
