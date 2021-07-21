namespace Test {

    export class Panel {
        protected goldenLayout: GoldenLayout;
        public dom: HTMLElement 

        constructor(_container: ComponentContainer, _state:  JsonValue | undefined) {
            this.dom = document.createElement("div");
            this.dom.style.width = "100%";
            this.dom.style.overflow = "auto";
            this.dom.setAttribute("view", this.constructor.name);
            _container.element.append(this.dom);

            this.goldenLayout = new Page.goldenLayoutModule.GoldenLayout(this.dom);

            let config: LayoutConfig = {
                root: {
                    type: "row",
                    content: []
                }
            }
            this.goldenLayout.loadLayout(config)
           
            
        }
    }
}