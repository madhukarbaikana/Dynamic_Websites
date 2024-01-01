let bgColorInput = document.getElementById("bgColorInput");
let fontColorInput = document.getElementById("fontColorInput");
let fontSizeInput = document.getElementById("fontSizeInput");
let fontWeightInput = document.getElementById("fontWeightInput");
let paddingInput = document.getElementById("paddingInput");
let borderRadius = document.getElementById("borderRadiusInput");
let customeButtonElement = document.getElementById("customButton");

function applyButton() {
    customeButtonElement.style.backgroundColor = bgColorInput.value;
    customeButtonElement.style.color = fontColorInput.value;
    customeButtonElement.style.fontSize = fontSizeInput.value;
    customeButtonElement.style.fontWeight = fontWeightInput.value;
    customeButtonElement.style.padding = paddingInput.value;
    customeButtonElement.style.borderRadius = borderRadius.value;



}
