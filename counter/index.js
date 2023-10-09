const titleEl = document.querySelector("#title");
const numberEl = document.querySelector("#number");
const increaseEl = document.querySelector("#increase");
const decreaseEl = document.querySelector("#decrease");

titleEl.textContent = "Javascript Counter";

let counter = 0;

numberEl.textContent = counter;
increaseEl.textContent = "Increase";
decreaseEl.textContent = "Decrease";

increaseEl.addEventListener("click", () => {
  counter = counter + 1;
  numberEl.textContent = counter;
  if (counter === 0) {
    numberEl.style.color = "black";
  } else {
    numberEl.style.color = "green";
  }
});

decreaseEl.addEventListener("click", () => {
  counter = counter - 1;
  numberEl.textContent = counter;
  if (counter === 0) {
    numberEl.style.color = "black";
  } else {
    numberEl.style.color = "red";
  }
});
