namespace TestWithImport {
    export class Tester extends Person {
        private _idNumber: number;

        constructor(name: string, height: number, id: number) {
            super(height, name);
            this._idNumber = id;
        }

        public printPerson(): void {
            console.log("Tester: Der Name ist: " + this.pname + "Die Größe ist: " + this.height + "die id: " + this._idNumber);
            console.log("Die Farbe ist: " + this.color);
        }


        public get idNumber(): number {
            return this._idNumber;
        }

    }

}