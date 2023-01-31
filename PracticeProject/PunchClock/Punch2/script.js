const clockInBtn = document.querySelector("#clockIn");
const clockOutBtn = document.querySelector("#clockOut");
const timeTable = document.querySelector("#timeTable");
const targetWorkHours = 8;

let timeData = [];

let currentDate;
let clockInTime;
let clockOutTime;

clockInBtn.addEventListener("click", () => {
  time = new Date();
  currentDate = time.toLocaleDateString();
  clockInTime = time.toLocaleTimeString();

  timeData.push({
    date: currentDate,
    timeIn: clockInTime,
  });

  localStorage.setItem("timeData", JSON.stringify(timeData));

  console.log(timeData);
});

clockOutBtn.addEventListener("click", () => {
  alert("Test");
});
