import { GoldenLayout } from "../goldenLayoutBundle/bundle/esm/golden-layout.js";
function BarrelTest() {
    var p1 = new Person(170, "Person_test");
    p1.color = FARBEN.SERENITY;
    console.log(p1.color);
    p1.printPerson();
    var t1 = new Tester("Tester_Test", 100, 12);
    console.log(t1.color);
    p1.printPerson();
}
window.addEventListener("load", function () {
    BarrelTest();
    var glMain = new GoldenLayout();
    var layoutConfigForGoldenLayout = {
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
    glMain.registerComponentFactoryFunction("test", function (container, itemConfig) {
        //console.log(container)
        var el = document.createElement("h1");
        el.textContent = "This is a test";
        container.element.append(el);
        console.log("add entry");
    });
    glMain.registerComponentFactoryFunction("test 2", function (container, itemConfig) {
        //console.log(container)
        var el = document.createElement("h1");
        el.textContent = "This is a test 2";
        container.element.append(el);
        console.log("add entry");
    });
    glMain.registerComponentFactoryFunction("test 3", function (container, itemConfig) {
        //console.log(container)
        var el = document.createElement("h1");
        el.textContent = "This is a test 3";
        container.element.append(el);
        console.log("add entry");
    });
    glMain.registerComponentFactoryFunction("test 4", function (container, itemConfig) {
        //console.log(container)
        var el = document.createElement("h1");
        el.textContent = "This is a test 4  JIRKA";
        container.element.append(el);
        console.log("add entry");
    });
    glMain.loadLayout(layoutConfigForGoldenLayout);
    console.log(glMain);
});
function sayHello() {
    console.log("Hello");
}
