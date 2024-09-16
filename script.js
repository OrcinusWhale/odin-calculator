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

function operate() {
  if (stage == 3) {
    switch (op) {
      case "+":
        a = add(a, b);
        break;

      case "-":
        a = substract(a, b);
        break;

      case "x":
        a = multiply(a, b);
        break;

      case "÷":
        if (b == 0) {
          display.innerText = "wtf bro";
          a = 0;
          op = null;
          b = 0;
          stage = 1;
          return;
        }
        a = Math.round(divide(a, b) * 1000) / 1000;
        break;
    }
    b = 0;
    stage = 2;
    if (a == 69) display.innerText = String(a) + " - matty sexy yes ;)";
    else display.innerText = String(a);
  }
}

function number(event) {
  let input = Number(event.target.innerText);
  if (stage == 1) {
    a = a * 10 + input;
    display.innerText = String(a);
  } else {
    stage = 3;
    b = b * 10 + input;
    display.innerText = String(b);
  }
}

function operation(event) {
  if (stage == 3) operate();
  stage = 2;
  op = event.target.innerText;
}

function clearCalc() {
  a = 0;
  op = null;
  b = 0;
  stage = 1;
  display.innerText = "0";
}

let a = 0;
let op = null;
let b = 0;
let stage = 1;
let display = document.querySelector("#display");
