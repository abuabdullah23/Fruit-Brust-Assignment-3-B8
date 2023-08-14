let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let amPmElement = document.getElementById("am-pm");

setInterval(() => {
  let currentTime = new Date();
  let currentHour = currentTime.getHours();

  // Determine AM or PM
  let amPm = currentHour >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  currentHour = currentHour % 12;
  currentHour = currentHour === 0 ? 12 : currentHour; // the hour '0' should be '12'

  hours.innerHTML = (currentHour < 10 ? "0" : "") + currentHour;
  minutes.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  seconds.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

  amPmElement.textContent = amPm;
}, 1000);
