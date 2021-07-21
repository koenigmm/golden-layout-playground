"use strict";
var Test;
(function (Test) {
    /**
   * The uppermost container for all panels controlling data flow between.
   */
    class Person {
        _container;
        dom;
        constructor(_container, state) {
            this._container = _container;
            this.dom = document.createElement("div");
            this.dom.style.height = "100%";
            this.dom.style.overflow = "auto";
            this.dom.style.color = "white";
            //this._paraElement = document.createElement("h1");
            //this._paraElement.style.textAlign = "left";
            const title = this._container.title;
            this.dom.innerText = (title ?? "unknown") + " component";
            this._container.element.appendChild(this.dom);
            console.log(this.constructor.name);
        }
    }
    Test.Person = Person;
})(Test || (Test = {}));
