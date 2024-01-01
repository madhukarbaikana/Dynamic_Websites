let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let timeInSecondsEl = document.getElementById("timeInSeconds");
let erroMsgEl = document.getElementById("errorMsg");

function convertingToSeconds() {
    if (hoursInputEl.value === "") {
        erroMsgEl.textContent = "Please enter a valid no of Hours";
        timeInSecondsEl.textContent = "";
        timeInSecondsEl.classList.remove("timeInSeconds");
    } else if (minutesInputEl.value === "") {
        erroMsgEl.textContent = "Please enter a valid no of minutes";
        timeInSecondsEl.textContent = "";
        timeInSecondsEl.classList.remove("timeInSeconds");

    } else {
        let hours = parseInt(hoursInputEl.value);
        let minutes = parseInt(minutesInputEl.value);
        let seconds = hours * 3600 + minutes * 60;
        timeInSecondsEl.classList.add("timeInSeconds");
        timeInSecondsEl.textContent = seconds + "S";
        erroMsgEl.textContent = "";
    }
}
convertBtnEl.addEventListener("click", convertingToSeconds);