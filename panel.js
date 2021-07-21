"use strict";
var Test;
(function (Test) {
    class Panel {
        goldenLayout;
        dom;
        constructor(_container, _state) {
            this.dom = document.createElement("div");
            this.dom.style.width = "100%";
            this.dom.style.overflow = "auto";
            this.dom.setAttribute("view", this.constructor.name);
            _container.element.append(this.dom);
            this.goldenLayout = new Test.Page.goldenLayoutModule.GoldenLayout(this.dom);
            let config = {
                root: {
                    type: "row",
                    content: []
                }
            };
            this.goldenLayout.loadLayout(config);
        }
    }
    Test.Panel = Panel;
})(Test || (Test = {}));
