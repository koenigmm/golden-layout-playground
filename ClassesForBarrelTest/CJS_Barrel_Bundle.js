System.register("ts/FARBEN", [], function (exports_1, context_1) {
    "use strict";
    var FARBEN;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (FARBEN) {
                FARBEN["FUCHSIA"] = "#ff00ff";
                FARBEN["LIVING_CORAL"] = "#FA7268";
                FARBEN["SERENITY"] = "#93A9D1";
                FARBEN["ROSE_QUARTZ"] = "#F7CACA";
            })(FARBEN || (FARBEN = {}));
            exports_1("FARBEN", FARBEN);
        }
    };
});
System.register("ts/person", ["ts/FARBEN"], function (exports_2, context_2) {
    "use strict";
    var FARBEN_js_1, Person;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (FARBEN_js_1_1) {
                FARBEN_js_1 = FARBEN_js_1_1;
            }
        ],
        execute: function () {
            Person = class Person {
                constructor(height, name) {
                    this.color = FARBEN_js_1.FARBEN.SERENITY;
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
            exports_2("Person", Person);
        }
    };
});
System.register("ts/tester", ["ts/person"], function (exports_3, context_3) {
    "use strict";
    var person_js_1, Tester;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (person_js_1_1) {
                person_js_1 = person_js_1_1;
            }
        ],
        execute: function () {
            Tester = class Tester extends person_js_1.Person {
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
            exports_3("Tester", Tester);
        }
    };
});
System.register("barrel", ["ts/FARBEN", "ts/person", "ts/tester"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_4(exports);
    }
    return {
        setters: [
            function (FARBEN_js_2_1) {
                exportStar_1(FARBEN_js_2_1);
            },
            function (person_js_2_1) {
                exportStar_1(person_js_2_1);
            },
            function (tester_js_1_1) {
                exportStar_1(tester_js_1_1);
            }
        ],
        execute: function () {
        }
    };
});
