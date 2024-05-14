function digitalClock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes().toString().padStart(2, 0);
  let seconds = date.getSeconds().toString().padStart(2, 0);
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  let meridiem = hours >= 12 ? "AM" : "PM";
  let currentTime = `${hours}:${minutes}:${seconds} ${meridiem}`;

  document.querySelector(".clock").innerHTML = currentTime;
}

digitalClock();
setInterval(digitalClock, 1000);
