const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const deadline = document.getElementById("deadline");

const futureTime = Date.now() + 1000 * 5;
let timeId;

const countDown = () => {
  const currentTime = Date.now();
  const timeDifference = futureTime - currentTime;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textMinute = Math.floor((timeDifference % hour) / minute);
  const textSecond = Math.floor((timeDifference % minute) / second);

  minuteEl.textContent = textMinute.toString().padStart(2, "0");
  secondEl.textContent = textSecond.toString().padStart(2, "0");
  if (textMinute === 0 && textSecond === 0) {
    clearInterval(timeId);
    deadline.textContent = "Time elapse";
  }
};

timeId = setInterval(countDown, 1000);
