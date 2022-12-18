import { Color, capRGB, } from "./color.js";
const redInput = document.getElementById('red-input');
const greenInput = document.getElementById('green-input');
const blueInput = document.getElementById('blue-input');
const saveColor = document.getElementById('save-color');
const box = document.getElementById('box');
const boxSaved = document.getElementById('boxSaved');
const allInputs = [redInput, greenInput, blueInput];
const colors = [];
function rgb() {
    //cap red to min of value or 255 (if red > 255 => red = 255)
    //cap  r, g, b are between 0 to 255
    const array = capRGB(Number(redInput.value), Number(greenInput.value), Number(blueInput.value));
    const [red, green, blue] = array;
    const c = new Color(red, green, blue);
    const hexColor = c.hex();
    const rgbColor = c.rgb();
    box.innerHTML = rgbColor + "<br>" + hexColor;
    box.style.background = rgbColor;
    return c;
}
allInputs.forEach((i) => {
    i.addEventListener("input", (e) => {
        rgb();
        //console.log(e.target);
    });
});
saveColor.addEventListener("click", () => {
    const array = capRGB(Number(redInput.value), Number(greenInput.value), Number(blueInput.value));
    const [red, green, blue] = array;
    const c = new Color(red, green, blue);
    const hexColor = c.hex();
    const rgbColor = c.rgb();
    const colorDiv = document.createElement("div");
    colorDiv.style.background = rgbColor;
    colorDiv.style.marginTop = `30px`;
    /*         colorDiv.style.width = `400px`
            colorDiv.style.height = `400px` */
    colorDiv.innerHTML = rgbColor + "<br>" + hexColor + "<br>" + "Saved Color";
    boxSaved.appendChild(colorDiv);
});
//box.addEventListener("click", () => {
//  const color = rgb();
//  alert(color.r + ', ' + color.g + ', ' + color.b);//?object?
//});
