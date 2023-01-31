const clockInBtn = document.getElementById("clockIn");
const clockOutBtn = document.getElementById("clockOut");
const workTable = document.getElementById("workTable");

let workData = [];
let clockInTime;

clockInBtn.addEventListener("click", clockIn);
clockOutBtn.addEventListener("click", clockOut);

function clockIn() {
  clockInTime = new Date();
  clockOutBtn.disabled = false;
  clockInBtn.disabled = true;

  workData.push({
    date: clockInTime.toLocaleDateString(),
    timeIn: clockInTime.toLocaleTimeString(),
  });
  renderTable();
}

function clockOut() {
  const clockOutTime = new Date();
  const hoursWorked = (clockOutTime - clockInTime) / 1000 / 60 / 60;
  workData[workData.length - 1].timeOut = clockOutTime.toLocaleTimeString();
  workData[workData.length - 1].hoursWorked = hoursWorked;
  workData[workData.length - 1].timeAccount = hoursWorked;
  localStorage.setItem("workData", JSON.stringify(workData));
  renderTable();
  clockOutBtn.disabled = true;
  clockInBtn.disabled = false;
}

function renderTable() {
  workTable.innerHTML = `
    <tr>
      <th>Date</th>
      <th>Time In</th>
      <th>Time Out</th>
      <th>Hours Worked</th>
      <th>Time Account</th>
    </tr>
  `;
  workData.forEach((data) => {
    const tableRow = `
      <tr>
        <td>${data.date}</td>
        <td>${data.timeIn}</td>
        <td>${data.timeOut || ""}</td>
        <td>${data.hoursWorked || ""}</td>
        <td>${data.timeAccount || ""}</td>
      </tr>
    `;
    workTable.innerHTML += tableRow;
  });
}

if (localStorage.getItem("workData")) {
  workData = JSON.parse(localStorage.getItem("workData"));
  renderTable();
}
