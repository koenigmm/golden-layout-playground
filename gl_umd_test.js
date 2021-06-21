"use strict";
// Bei Bedarf unteren Kommentar entferenen
//import type{ GoldenLayout, LayoutConfig } from "./goldenLayoutBundle/types";
window.addEventListener("load", () => {
    //let t:any = (window as any).myTest
    //console.log(t)
    let gl_from_browser = window.goldenLayout;
    console.log(gl_from_browser);
    let glMain = new gl_from_browser.GoldenLayout;
    console.log(glMain);
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
        el.textContent = "letzter Test ich schreibe mal irgendetwas hier";
        container.element.append(el);
        console.log("add entry");
    });
    glMain.loadLayout(layoutConfigForGoldenLayout);
    console.log(glMain);
});
