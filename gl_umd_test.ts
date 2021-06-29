/// <reference path="./ClassesForBarrelTest/ts/Color.ts" />
/// <reference path="./ClassesForBarrelTest/ts/person.ts" />
/// <reference path="./ClassesForBarrelTest/ts/tester.ts" />

// Bei Bedarf unteren Kommentar entferenen
import { GoldenLayout, LayoutConfig } from "./goldenLayoutBundle/types";
//import { GoldenLayout, LayoutConfig } from "./goldenLayoutBundle/types";

namespace TestWithImport {
    window.addEventListener("load", () => {

        let p1 = new Person(170, "Person_test");
        p1.color = COLOR.SERENITY
        console.log(p1.color);
        p1.printPerson();

        let t1 = new Tester("Tester_Test", 100, 12);
        console.log(t1.color);
        p1.printPerson();

        //let t:any = (window as any).myTest
        //console.log(t)

        let gl_from_browser: any = (window as any).goldenLayout;
        console.log(gl_from_browser);
        let glMain: GoldenLayout = new gl_from_browser.GoldenLayout;
        console.log(glMain);

        let layoutConfigForGoldenLayout: LayoutConfig = {
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
        glMain.registerComponentFactoryFunction("test", (container: any, itemConfig: any) => {
            //console.log(container)
            let el = document.createElement("h1");
            el.textContent = "This is a test";
            container.element.append(el);
            console.log("add entry");
        });
        glMain.registerComponentFactoryFunction("test 2", (container: any, itemConfig: any) => {
            //console.log(container)
            let el = document.createElement("h1");
            el.textContent = "This is a test 2";
            container.element.append(el);
            console.log("add entry");
        });
        glMain.registerComponentFactoryFunction("test 3", (container: any, itemConfig: any) => {
            //console.log(container)
            let el = document.createElement("h1");
            el.textContent = "This is a test 3";
            container.element.append(el);
            console.log("add entry");
        });

        glMain.registerComponentFactoryFunction("test 4", (container: any, itemConfig: any) => {
            //console.log(container)
            let el = document.createElement("h1");
            el.textContent = "letzter Test ich schreibe mal irgendetwas hier";
            container.element.append(el);
            console.log("add entry");
        });
        glMain.loadLayout(layoutConfigForGoldenLayout);
        console.log(glMain);

    });

}

