const number = document.querySelector(".number");
const inc = document.querySelector(".increase");
const dec = document.querySelector(".decrease");
const res = document.querySelector(".reset");

let number1 = 0;
number.textContent = number1;

res.addEventListener("click", function () {
  number1 = 0;
  number.textContent = number1;
});

inc.addEventListener("click", function () {
  number1 += 1;
  number.textContent = number1;
});

dec.addEventListener("click", function () {
  number1 -= 1;
  number.textContent = number1;
});
