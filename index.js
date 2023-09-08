const currentUTCTimeElement = document.querySelector(
  '[data-testid="currentUTCTime"]'
);
const currentUTCTime = new Date().getTime();
currentUTCTimeElement.textContent = currentUTCTime;

// Get a reference to the element with the data-testid attribute "currentDayOfTheWeek"
let currentDayOfTheWeekElement = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);

// Create an array to map day indices to day names
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Get the current date
const currentDate = new Date();

// Get the day of the week as an index (0 for Sunday, 1 for Monday, etc.)
const dayIndex = currentDate.getDay();

// Get the name of the day of the week using the array
const currentDay = daysOfWeek[dayIndex];

// Update the element's text content with the current day
currentDayOfTheWeekElement.textContent = `It's ${currentDay}`;
