const currentUTCTimeElement = document.querySelector(
  '[data-testid="currentUTCTime"]'
);

const currentUTCTimeMilliseconds = new Date().getTime();

currentUTCTimeElement.textContent = currentUTCTimeMilliseconds;

function formatDay(date) {
  let dayWeek = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayWeek];

  return day;
}

let dateElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
let currentTime = new Date();
dateElement.textContent = formatDay(currentTime);
