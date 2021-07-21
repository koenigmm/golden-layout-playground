/// <reference types="./goldenLayoutBundle/bundle/esm/golden-layout" />
/// <reference path="page.ts"/>

// Bei Bedarf unteren Kommentar entferenen
//import type{ GoldenLayout, LayoutConfig } from "./goldenLayoutBundle/types";
namespace Test {
    
    window.addEventListener("load", () => {
        Page.start();
        //let t:any = (window as any).myTest
        //console.log(t)
        
        // let gl = (globalThis as any).goldenLayout;
        // console.log(gl);
        // let glMain: GoldenLayout = new gl.GoldenLayout();
        // console.log(glMain);

        // let layoutConfigForGoldenLayout: LayoutConfig = {
        //     root: {
        //         type: "row",
        //         content: [
        //             {
        //                 type: "component",
        //                 componentType: "test"
        //             },
        //             {
        //                 type: "component",
        //                 componentType: "test 2"
        //             },
        //             {
        //                 type: "component",
        //                 componentType: "test 3"
        //             },
        //             {
        //                 type: "component",
        //                 componentType: "test 4"
        //             },
        //         ]
        //     }
        // };
        // glMain.registerComponentFactoryFunction("test", (container: any, itemConfig: any) => {
        //     //console.log(container)
        //     let el = document.createElement("h1");
        //     el.textContent = "This is a test";
        //     container.element.append(el);
        //     console.log("add entry");
        // });
        // glMain.registerComponentFactoryFunction("test 2", (container: any, itemConfig: any) => {
        //     //console.log(container)
        //     let el = document.createElement("h1");
        //     el.textContent = "This is a test 2";
        //     container.element.append(el);
        //     console.log("add entry");
        // });
        // glMain.registerComponentFactoryFunction("test 3", (container: any, itemConfig: any) => {
        //     //console.log(container)
        //     let el = document.createElement("h1");
        //     el.textContent = "This is a test 3";
        //     container.element.append(el);
        //     console.log("add entry");
        // });

        // glMain.registerComponentFactoryFunction("test 4", (container: any, itemConfig: any) => {
        //     //console.log(container)
        //     let el = document.createElement("h1");
        //     el.textContent = "letzter Test ich schreibe mal irgendetwas hier";
        //     container.element.append(el);
        //     console.log("add entry");
        // });

        // glMain.registerComponentConstructor("test 4", Person);


        // glMain.loadLayout(layoutConfigForGoldenLayout);
        // console.log(glMain);

    });

}

