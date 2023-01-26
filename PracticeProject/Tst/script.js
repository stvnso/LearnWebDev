function displayDateTime() {
  var currentDate = new Date();
  var currentTime = currentDate.toLocaleTimeString();
  var currentDate = currentDate.toLocaleDateString();
  document.getElementById("currentTime").innerHTML = currentTime;
  document.getElementById("currentDate").innerHTML = currentDate;
}

setInterval(displayDateTime, 1000);

function saveCurrentTime() {
  var currentTime = new Date().toLocaleString();
  var timeArray;
  // get all the saved time
  if (localStorage.getItem("times"))
    timeArray = JSON.parse(localStorage.getItem("times"));
  else timeArray = [];
  // add the current time to the array
  timeArray.push(currentTime);
  // save the array to local storage
  localStorage.setItem("times", JSON.stringify(timeArray));
  // display the saved times
  displaySavedTime();
}

// Function to display the saved times
function displaySavedTime() {
  var timeTable = document.getElementById("timeTable");
  // clear the table
  timeTable.innerHTML = "<tr><th>Time</th></tr>";
  var timeArray = JSON.parse(localStorage.getItem("times"));
  if (timeArray) {
    for (var i = 0; i < timeArray.length; i++) {
      var row = timeTable.insertRow();
      var cell = row.insertCell();
      cell.innerHTML = timeArray[i];
    }
  }
}
// call the function to display the saved time
displaySavedTime();
