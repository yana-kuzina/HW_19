console.log("calculator.js imported");

let value = 0;

function set(number) {
  value = number;
}

function add(number) {
  return (value = value + number);
}

function mult(number) {
  return (value = value * number);
}

function sub(number) {
  return (value = value - number);
}

function div(number) {
  return (value = value / number);
}

module.exports = {
  set,
  add,
  mult,
  sub,
  div,
};
