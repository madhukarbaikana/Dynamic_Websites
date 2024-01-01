let stopButtonElement = document.getElementById("stopButton");
let stopLightElement = document.getElementById("stopLight");
let readyButtonElement = document.getElementById("readyButton");
let readyLightElement = document.getElementById("readyLight");
let goButtonElement = document.getElementById("goButton");
let goLightElement = document.getElementById("goLight");

function stopButtonFunction() {
    stopButtonElement.style.backgroundColor = "#cf1124";
    stopLightElement.style.backgroundColor = "#cf1124";
    readyButtonElement.style.backgroundColor = "#4b5069";
    readyLightElement.style.backgroundColor = "#4b5069";
    goButtonElement.style.backgroundColor = "#4b5069";
    goLightElement.style.backgroundColor = "#4b5069";
}

function readyButtonFunction() {
    stopButtonElement.style.backgroundColor = "#4b5069";
    stopLightElement.style.backgroundColor = "#4b5069";
    readyButtonElement.style.backgroundColor = "#f7c948";
    readyLightElement.style.backgroundColor = "#f7c948";
    goButtonElement.style.backgroundColor = "#4b5069";
    goLightElement.style.backgroundColor = "#4b5069";
}

function goButtonFunction() {
    stopButtonElement.style.backgroundColor = "#4b5069";
    stopLightElement.style.backgroundColor = "#4b5069";
    readyButtonElement.style.backgroundColor = "#4b5069";
    readyLightElement.style.backgroundColor = "#4b5069";
    goButtonElement.style.backgroundColor = "#48e048";
    goLightElement.style.backgroundColor = "#48e048";

}