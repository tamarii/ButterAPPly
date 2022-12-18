import { Utils } from "./utils.js";
export class Color {
    // props:
    r;
    g;
    b;
    timeStamp;
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.timeStamp = Utils.currentDateString();
    }
    hex() {
        const redHex = this.r.toString(16).padStart(2, "0"); //f to 0f  (255 = FF)
        const greenHex = this.g.toString(16).padStart(2, "0");
        const blueHex = this.b.toString(16).padStart(2, "0");
        const hexColor = `#${redHex}${greenHex}${blueHex}`.toUpperCase();
        return hexColor;
    }
    rgb() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
}
export function capValue(value) {
    let r = Math.min(value, 255); //value = 800 => r = 255
    r = Math.max(r, 0); //value = -599 => 0
    return r;
}
export function capRGB(r, g, b) {
    let red = capValue(r);
    let green = capValue(g);
    let blue = capValue(b);
    return [red, green, blue];
}
/* const c = new Color(255, 0, 255);
console.log(c.hex());//#ff00ff
console.log(c.b);//0 */
