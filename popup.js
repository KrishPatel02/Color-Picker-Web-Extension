//Function for Color Picker

document.addEventListener("DOMContentLoaded", () => {
    const colorPickerBtn = document.querySelector(".colorPickerBtn");

    const colorGrid = document.querySelector(".colorGrid");

    const colorCode = document.querySelector(".colorCode");

    const messageBox = document.querySelector(".messageBox");

    colorPickerBtn.addEventListener("click", async () => {
        try {

            const eyeDropper = new EyeDropper();

            const result = await eyeDropper.open();

            console.log(result);

            colorGrid.style.backgroundColor = result.sRGBHex;

            colorCode.textContent = result.sRGBHex;

            messageBox.textContent = ` Color Code copied to clipboard!`;


            await navigator.clipboard.writeText(result.sRGBHex);
        } catch (err) {
            console.error(err);
        }
    });
});
