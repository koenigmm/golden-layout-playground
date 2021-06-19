import { Person } from "./person.js";
export class Tester extends Person {
    constructor(name, height, id) {
        super(height, name);
        this._idNumber = id;
    }
    printPerson() {
        console.log("Tester: Der Name ist: " + this.pname + "Die Größe ist: " + this.height + "die id: " + this._idNumber);
        console.log("Die Farbe ist: " + this.color);
    }
    get idNumber() {
        return this._idNumber;
    }
}
