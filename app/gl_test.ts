import { GoldenLayout, LayoutConfig } from "../goldenLayoutBundle/bundle/esm/golden-layout.js";
import { Person, Tester, FARBEN } from '../ClassesForBarrelTest/barrel.js';

function BarrelTest(): void {
  let p1 = new Person(170, "Person_test");
  p1.color = FARBEN.SERENITY
  console.log(p1.color);
  p1.printPerson();

  let t1 = new Tester("Tester_Test", 100, 12);
  console.log(t1.color);
  p1.printPerson();
}

window.addEventListener("load", () => {

  BarrelTest();

  let glMain = new GoldenLayout();

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
  }

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
  console.log(glMain)
})

function sayHello(): void {
  console.log("Hello");
}