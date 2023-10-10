const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const deadline = document.getElementById("deadline");

const inputSecond = 1000;
const inputMinute = inputSecond * 60;
const inputHour = inputMinute * 60;
const inputDay = inputHour * 24;
const futureTime = Date.now() + inputDay * 2;
let timeId;

const countDown = () => {
  const currentTime = Date.now(); // Moved outside the function
  const timeDifference = futureTime - currentTime;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(timeDifference / day);
  const textHour = Math.floor((timeDifference % day) / hour);
  const textMinute = Math.floor((timeDifference % hour) / minute);
  const textSecond = Math.floor((timeDifference % minute) / second);

  dayEl.textContent =
    textDay.toString().padStart(2, "0") +
    " " +
    (textDay === 1 ? "Day" : "Days");
  hourEl.textContent =
    textHour.toString().padStart(2, "0") +
    " " +
    (textHour === 1 ? "Hour" : "Hours");
  minuteEl.textContent =
    textMinute.toString().padStart(2, "0") +
    " " +
    (textMinute === 1 ? "Minute" : "Minutes");
  secondEl.textContent =
    textSecond.toString().padStart(2, "0") +
    " " +
    (textSecond === 1 ? "Second" : "Seconds");

  if (textMinute === 0 && textSecond === 0) {
    clearInterval(timeId);
    deadline.textContent = "Time elapsed";
  }
};

timeId = setInterval(countDown, 1000);
