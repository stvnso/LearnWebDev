function displayDateTime() {
  var currentDate = new Date();
  var currentTime = currentDate.toLocaleTimeString();
  var currentDate = currentDate.toLocaleDateString();
  document.getElementById("currentTime").innerHTML = currentTime;
  document.getElementById("currentDate").innerHTML = currentDate;
}

setInterval(displayDateTime, 1000);

// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
var startTime;
var intervalId;

document.getElementById("saveDateTime").addEventListener("click", function () {
  var currentDate = new Date();
  var date = currentDate.toLocaleDateString();
  var time = currentDate.toLocaleTimeString();
  startTime = currentDate;
  intervalId = setInterval(displayElapsedTime, 1000);
  var dateTimeArray = JSON.parse(localStorage.getItem("dateTimes")) || [];
  dateTimeArray.push({ date: date, time: time });
  localStorage.setItem("dateTimes", JSON.stringify(dateTimeArray));
  displaySavedDateTime();
});

document.getElementById("clearDateTime").addEventListener("click", function () {
  localStorage.removeItem("dateTimes");
  var dateTimeTable = document.getElementById("dateTimeTable");
  dateTimeTable.innerHTML =
    "<tr><th>Date</th><th>Time</th><th>Stop Time</th><th>Elapsed Time</th></tr>";
});

document
  .getElementById("stopElapsedTime")
  .addEventListener("click", function () {
    clearInterval(intervalId);
    var stopTime = new Date();
    var elapsedTime = (stopTime - startTime) / 1000;
    var dateTimeArray = JSON.parse(localStorage.getItem("dateTimes"));
    dateTimeArray[dateTimeArray.length - 1].elapsedTime =
      elapsedTime.toFixed(2) + " sec";
    dateTimeArray[dateTimeArray.length - 1].stopTime =
      stopTime.toLocaleString();
    localStorage.setItem("dateTimes", JSON.stringify(dateTimeArray));
    displaySavedDateTime();
  });

function displayElapsedTime() {
  var currentTime = new Date();
  var elapsed = (currentTime - startTime) / 1000;
  var elapsedTime = document.getElementById("elapsedTime");
  elapsedTime.innerHTML = elapsed.toFixed(2) + " sec";
}

function displaySavedDateTime() {
  var dateTimeArray = JSON.parse(localStorage.getItem("dateTimes")) || [];
  var dateTimeTable = document.getElementById("dateTimeTable");
  dateTimeTable.innerHTML =
    "<tr><th>Date</th><th>Time</th><th>Stop Time</th><th>Elapsed Time</th></tr>";
  for (var i = 0; i < dateTimeArray.length; i++) {
    var dateTimeRow = document.createElement("tr");
    var dateColumn = document.createElement("td");
    var timeColumn = document.createElement("td");
    var stopTimeColumn = document.createElement("td");
    var elapsedTimeColumn = document.createElement("td");
    dateColumn.innerHTML = dateTimeArray[i].date;
    timeColumn.innerHTML = dateTimeArray[i].time;
    stopTimeColumn.innerHTML = dateTimeArray[i].stopTime;
    elapsedTimeColumn.innerHTML = dateTimeArray[i].elapsedTime;
    dateTimeRow.appendChild(dateColumn);
    dateTimeRow.appendChild(timeColumn);
    dateTimeRow.appendChild(stopTimeColumn);
    dateTimeRow.appendChild(elapsedTimeColumn);
    dateTimeTable.appendChild(dateTimeRow);
  }
}
window.onload = function () {
  var dateTimeArray = JSON.parse(localStorage.getItem("dateTimes")) || [];
  if (dateTimeArray.length > 0) {
    displaySavedDateTime();
  }
};

// var startTime;
// var intervalId;

// document.getElementById("saveDateTime").addEventListener("click", function () {
//   var date = new Date();
//   var dateString = date.toLocaleDateString();
//   var timeString = date.toLocaleTimeString();
//   var dateTimes = JSON.parse(localStorage.getItem("dateTimes")) || [];
//   var startTime = new Date();
//   var elapsedTime = 0;
//   var stopTime = 0;
//   dateTimes.push({
//     date: dateString,
//     time: timeString,
//     startTime: startTime,
//     elapsedTime: elapsedTime,
//     stopTime: stopTime,
//   });
//   localStorage.setItem("dateTimes", JSON.stringify(dateTimes));
//   displaySavedDateTime();
// });

// document.getElementById("clearDateTime").addEventListener("click", function () {
//   localStorage.removeItem("dateTimes");
//   var dateTimeTable = document.getElementById("dateTimeTable");
//   dateTimeTable.innerHTML =
//     "<tr><th>Date</th><th>Time</th><th>Elapsed Time</th><th>Stop Time</th></tr>";
// });

// document
//   .getElementById("stopElapsedTime")
//   .addEventListener("click", function () {
//     clearInterval(intervalId);
//     var dateTimeArray = JSON.parse(localStorage.getItem("dateTimes")) || [];
//     var currentTime = new Date();
//     var lastIndex = dateTimeArray.length - 1;
//     dateTimeArray[lastIndex].elapsedTime =
//       currentTime - dateTimeArray[lastIndex].startTime;
//     dateTimeArray[lastIndex].stopTime = currentTime;
//     localStorage.setItem("dateTimes", JSON.stringify(dateTimeArray));
//     displaySavedDateTime();
//   });

// function displayElapsedTime() {
//   var currentTime = new Date();
//   var elapsed = (currentTime - startTime) / 1000;
//   var elapsedTime = document.getElementById("elapsedTime");
//   elapsedTime.innerHTML = elapsed.toFixed(2) + " sec";
// }

// function displaySavedDateTime() {
//   var dateTimeArray = JSON.parse(localStorage.getItem("dateTimes")) || [];
//   var table = document.getElementById("dateTimeTable");
//   table.innerHTML = "";
//   for (var i = dateTimeArray.length - 1; i >= 0; i--) {
//     var row = table.insertRow(0);
//     var dateCell = row.insertCell(0);
//     var timeCell = row.insertCell(1);
//     var startTimeCell = row.insertCell(2);
//     var elapsedTimeCell = row.insertCell(3);
//     var stopTimeCell = row.insertCell(4);
//     dateCell.innerHTML = dateTimeArray[i].date;
//     timeCell.innerHTML = dateTimeArray[i].time;
//     startTimeCell.innerHTML = dateTimeArray[i].startTime;
//     elapsedTimeCell.innerHTML = dateTimeArray[i].elapsedTime;
//     stopTimeCell.innerHTML = dateTimeArray[i].stopTime;
//   }
// }

// window.onload = function () {
//   var dateTimeArray = JSON.parse(localStorage.getItem("dateTimes")) || [];
//   if (dateTimeArray.length > 0) {
//     displaySavedDateTime();
//   }
// };
