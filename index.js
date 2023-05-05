const number = document.querySelector(".number");
const inc = document.querySelector(".increase");
const dec = document.querySelector(".decrease");
const res = document.querySelector(".reset");

let number1 = 0;
number.textContent = number1;

// res.addEventListener("click", function () {
//   number1 = 0;
//   number.textContent = number1;
// });

// inc.addEventListener("click", function () {
//   number1 += 1;
//   number.textContent = number1;
// });

// dec.addEventListener("click", function () {
//   number1 -= 1;
//   number.textContent = number1;
// });

// or
const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("increase")) {
      number1++;
    } else if (btn.classList.contains("decrease")) {
      number1--;
    } else {
      number1 = 0;
    }
    number.textContent = number1;
  });
});
