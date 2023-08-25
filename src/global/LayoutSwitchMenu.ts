import { MenuComponent } from "../components/menu/MenuComponent.js";
export class LayoutSwitchMenu {
    options: Array<MenuComponent>;
    menu: HTMLElement;

    constructor(options: Array<MenuComponent>, menu?: HTMLElement) {
        this.options = options;
        if(menu) {
            this.menu = menu
        } else {
            this.menu = document.createElement("aside");
        }
        this.menu.classList.add("stb-layout-switch-menu");
    }

    public generate() {
        const cssScript = document.createElement("link");
        cssScript.rel="stylesheet";
        cssScript.href="/global/css/left-menu.css";
        document.getElementsByTagName("head")[0].appendChild(cssScript);
        for(const option of this.options) {
            option.generate();
            option.setMenu(this);
            const html = option.getComponent();
            this.menu.appendChild(html);
        }
    }

    public getMenu() {
        return this.menu;
    }
}