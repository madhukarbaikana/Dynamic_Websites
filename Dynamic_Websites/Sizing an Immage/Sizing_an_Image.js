let imageElement = document.getElementById("image");
let originalImageWidth = 200;
imageElement.style.width = originalImageWidth + "px";
let warningMessageElement = document.getElementById("warningMessage");
let imageWidthElement = document.getElementById("imageWidth");
imageWidthElement.textContent = originalImageWidth + "px";

function onDecrement() {
    originalImageWidth = originalImageWidth - 5;
    let updatedWidth = originalImageWidth + "px";
    if (originalImageWidth < 100) {
        warningMessageElement.textContent = "Can't visible, Increase the size of image";
    } else {
        warningMessageElement.textContent = "";
        imageElement.style.width = updatedWidth;
        imageWidthElement.textContent = updatedWidth;
    }
}

function onIncrement() {
    originalImageWidth = originalImageWidth + 5;
    let updatedWidth = originalImageWidth + "px";
    if (originalImageWidth > 300) {
        warningMessageElement.textContent = "Too big, Decrease the size of image";

    } else {
        warningMessageElement.textContent = "";
        imageElement.style.width = updatedWidth;
        imageWidthElement.textContent = updatedWidth;


    }
}