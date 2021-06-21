namespace TestWithImport {

    export class Person {
        public color: string = COLOR.SERENITY;
        private _height: number;
        private _pname: string;

        constructor(height: number, name: string) {
            this._height = height;
            this._pname = name;
        }

        public get pname(): string {
            return this._pname;
        }

        public get height(): number {
            return this._height;
        }


        public printPerson(): void {
            console.log("Die Höhe ist: " + this.height + " und der Name ist " + this.height);
            console.log("Die Farbe ist: " + this.color);
        }
    }
}