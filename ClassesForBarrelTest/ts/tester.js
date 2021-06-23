System.register(["./person.js"], function (exports_1, context_1) {
    "use strict";
    var person_js_1, Tester;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (person_js_1_1) {
                person_js_1 = person_js_1_1;
            }
        ],
        execute: function () {
            Tester = class Tester extends person_js_1.Person {
                _idNumber;
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
            };
            exports_1("Tester", Tester);
        }
    };
});
