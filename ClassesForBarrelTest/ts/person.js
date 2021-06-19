import { FARBEN } from "./FARBEN.js";
export class Person {
    constructor(height, name) {
        this.color = FARBEN.SERENITY;
        this._height = height;
        this._pname = name;
    }
    get pname() {
        return this._pname;
    }
    get height() {
        return this._height;
    }
    printPerson() {
        console.log("Die Höhe ist: " + this.height + " und der Name ist " + this.height);
        console.log("Die Farbe ist: " + this.color);
    }
}
