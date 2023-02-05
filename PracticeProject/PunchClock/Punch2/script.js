const clockInBtn = document.querySelector("#clockIn");
const clockOutBtn = document.querySelector("#clockOut");
const timeTable = document.querySelector("#timeTable");
const targetWorkHours = 8;

let timeData = [];

let currentDate;
let clockInTime;
let clockOutTime;

clockInBtn.addEventListener("click", () => {
  // time = new Date();
  // currentDate = time.toLocaleDateString();
  // clockInTime = time.toLocaleTimeString();

  // timeData.push({
  //   date: currentDate,
  //   timeIn: clockInTime,
  // });

  // localStorage.setItem("timeData", JSON.stringify(timeData));

  // console.log(timeData);

  time = new Date();
  currentDate = time.toLocaleDateString();
  clockInTime = time.toLocaleTimeString();

  timeData = {
    date: currentDate,
    timeIn: clockInTime,
  };

  console.log(timeData);

  const timeDataJSON = JSON.stringify(timeData);
  localStorage.setItem("timeData", timeDataJSON);
});

clockOutBtn.addEventListener("click", () => {
  console.log("hello");

  // // Retrieve the JSON string from local storage
  // const myDataJSON = localStorage.getItem("timeData");
  // // console.log(myDataJSON);

  // // Convert the JSON string back to an object
  // const myData = JSON.parse(myDataJSON);

  // // Access the properties of the object
  // console.log(myData.date);
  // console.log(myData.timeIn);

  const timeDataJSON = localStorage.getItem("timeData");
  const timeData = JSON.parse(timeDataJSON);

  console.log(timeData);
});
