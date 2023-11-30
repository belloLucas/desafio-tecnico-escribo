"use strict";

const inputNumber = document.getElementById("number");
const inputSubmit = document.getElementById("submit");
const pSum = document.querySelector(".sum");

let sumValue = 0;

inputSubmit.addEventListener("click", () => {
  const sum = function (number) {
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sumValue += i;
      }
    }
    inputNumber.value = "";
    pSum.innerText = `Somatório: ${sumValue}`;
    return sumValue;
  };
  sumValue = 0;
  sum(inputNumber.value);
});
