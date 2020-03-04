console.log("test");

const hoursPointer = document.querySelector(".hour");
const minutesPointer = document.querySelector(".minute");
const secondsPointer = document.querySelector(".second");
const pointers = document.querySelectorAll(".pointer");

function setTransition() {
  pointers.forEach(pointer => {
    if (pointer.style.transform === "rotate(444deg)") {
      pointer.style.transition = "none";
    } else {
      pointer.style.transition = "all 0.5s";
      pointer.style[
        "transition-timing-function"
      ] = `cubic-bezier(0, 1.64, 0, 1.86)`;
    }
  });
}

function setDate() {
  setTransition();

  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const hoursDegrees = (hours / 12) * 360 + 90;

  secondsPointer.style.transform = `rotate(${secondsDegrees}deg)`;
  minutesPointer.style.transform = `rotate(${minutesDegrees}deg)`;
  hoursPointer.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
