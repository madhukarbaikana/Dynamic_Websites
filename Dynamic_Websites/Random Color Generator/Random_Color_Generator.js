let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let bgContainer = document.getElementById("bgContainer");
bgContainer.style.backgroundColor = bgColorsArray[0];

function changeColor() {
    let lengthOfArray = bgColorsArray.length;
    let randomIndex = Math.ceil(Math.random() * lengthOfArray);

    if (randomIndex === lengthOfArray) {
        randomIndex = randomIndex - 1;
        bgContainer.style.backgroundColor = bgColorsArray[randomIndex];
    } else {
        bgContainer.style.backgroundColor = bgColorsArray[randomIndex];
    }
}