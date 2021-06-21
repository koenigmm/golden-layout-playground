System.register(["./goldenLayoutBundle/bundle/esm/golden-layout.js"], function (exports_1, context_1) {
    "use strict";
    var golden_layout_js_1;
    var __moduleName = context_1 && context_1.id;
    function sayHello() {
        console.log("Hello");
    }
    return {
        setters: [
            function (golden_layout_js_1_1) {
                golden_layout_js_1 = golden_layout_js_1_1;
            }
        ],
        execute: function () {
            window.addEventListener("load", () => {
                let glMain = new golden_layout_js_1.GoldenLayout();
                let layoutConfigForGoldenLayout = {
                    root: {
                        type: "row",
                        content: [
                            {
                                type: "component",
                                componentType: "test"
                            },
                            {
                                type: "component",
                                componentType: "test 2"
                            },
                            {
                                type: "component",
                                componentType: "test 3"
                            },
                            {
                                type: "component",
                                componentType: "test 4"
                            },
                        ]
                    }
                };
                glMain.registerComponentFactoryFunction("test", (container, itemConfig) => {
                    //console.log(container)
                    let el = document.createElement("h1");
                    el.textContent = "This is a test";
                    container.element.append(el);
                    console.log("add entry");
                });
                glMain.registerComponentFactoryFunction("test 2", (container, itemConfig) => {
                    //console.log(container)
                    let el = document.createElement("h1");
                    el.textContent = "This is a test 2";
                    container.element.append(el);
                    console.log("add entry");
                });
                glMain.registerComponentFactoryFunction("test 3", (container, itemConfig) => {
                    //console.log(container)
                    let el = document.createElement("h1");
                    el.textContent = "This is a test 3";
                    container.element.append(el);
                    console.log("add entry");
                });
                glMain.registerComponentFactoryFunction("test 4", (container, itemConfig) => {
                    //console.log(container)
                    let el = document.createElement("h1");
                    el.textContent = "This is a test 4  JIRKA";
                    container.element.append(el);
                    console.log("add entry");
                });
                glMain.loadLayout(layoutConfigForGoldenLayout);
                console.log(glMain);
            });
        }
    };
});
