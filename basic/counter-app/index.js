let result = document.querySelector(".result");
let increaseButton = document.getElementById("increase-btn");
let decreaseButton = document.getElementById("decrease-btn");
let resetButton = document.getElementById("reset-btn");
let count = 0;
increaseButton.onclick = function () {
    count++;
    result.textContent = count;
};
decreaseButton.onclick = function () {
  result.textContent = count -= 1;
};
resetButton.onclick = function () {
  result.textContent = count = 0;
};
