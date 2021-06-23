System.register(["./FARBEN"], function (exports_1, context_1) {
    "use strict";
    var FARBEN_1, Person;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (FARBEN_1_1) {
                FARBEN_1 = FARBEN_1_1;
            }
        ],
        execute: function () {
            Person = class Person {
                color = FARBEN_1.COLOR.SERENITY;
                _height;
                _pname;
                constructor(height, name) {
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
            };
            exports_1("Person", Person);
        }
    };
});
