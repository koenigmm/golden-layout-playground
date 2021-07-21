"use strict";
/// <reference path="panel.ts"/>
var Test;
/// <reference path="panel.ts"/>
(function (Test) {
    class Page {
        static goldenLayoutModule = globalThis.goldenLayout; // UMD Module as globale variable
        static goldenLayout;
        static start() {
            Page.setupGoldenLayout();
        }
        static setupGoldenLayout() {
            //let gl = (globalThis as any).goldenLayout;
            //this.goldenLayout = new gl.GoldenLayout()
            this.goldenLayout = new this.goldenLayoutModule.GoldenLayout();
            console.log(this.goldenLayoutModule);
            //let glMain = new GoldenLayout()
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
                            componentType: "test 2",
                        },
                        // {
                        //     type: "component",
                        //     componentType: "test 3"
                        // },
                        // {
                        //     type: "component",
                        //     componentType: "test 4"
                        // },
                    ]
                }
            };
            let layoutConfig2 = {
                root: {
                    type: "row",
                    content: [
                        {
                            type: "component",
                            componentType: "test"
                        },
                        {
                            type: "component",
                            componentType: "test 2",
                        },
                        // {
                        //     type: "component",
                        //     componentType: "test 3"
                        // },
                        // {
                        //     type: "component",
                        //     componentType: "test 4"
                        // },
                    ]
                }
            };
            let cmpItemConfigTest = {
                type: "component",
                componentType: "test",
                title: "test",
            };
            //this.goldenLayout.addComponent(cmpItemConfigTest);
            // this.goldenLayout.registerComponentFactoryFunction("test", (container: any, itemConfig: any) => {
            //     console.log(container)
            //     let el = document.createElement("h1");
            //     el.textContent = "This is a test";
            //     container.element.append(el);
            //     console.log("add entry");
            // });
            // this.goldenLayout.registerComponentFactoryFunction("test 2", (container: any, itemConfig: any) => {
            //     //console.log(container)
            //     let el = document.createElement("h1");
            //     el.textContent = "This is a test 2";
            //     container.element.append(el);
            //     console.log("add entry");
            // });
            // this.goldenLayout.registerComponentFactoryFunction("test 3", (container: any, itemConfig: any) => {
            //     //console.log(container)
            //     let el = document.createElement("h1");
            //     el.textContent = "This is a test 3";
            //     container.element.append(el);
            //     console.log("add entry");
            // });
            //this.goldenLayout.addComponent(cmpItemConfigTest);
            this.goldenLayout.registerComponentConstructor("test", Test.Person);
            this.goldenLayout.registerComponentConstructor("test 2", Test.Person);
            // this.goldenLayout.registerComponentConstructor("test 3", Person);
            // this.goldenLayout.registerComponentConstructor("test 4", Person);
            this.goldenLayout.loadLayout(layoutConfigForGoldenLayout);
            //this.goldenLayout.loadLayout(layoutConfig2);
            console.log(this.goldenLayout);
            let t = this.goldenLayout.getRegisteredComponentTypeNames();
            console.log(t);
            //this.goldenLayout.addComponent(cmpitemConfig);
        }
    }
    Test.Page = Page;
})(Test || (Test = {}));
