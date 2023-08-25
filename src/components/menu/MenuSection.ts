import { MenuComponent } from "./MenuComponent.js";
import { MenuOption } from "./MenuOption.js";
import { LayoutSwitchMenu } from "../../global/LayoutSwitchMenu.js";

export class MenuSection extends MenuComponent {
    img: string;
    title: string;
    component: HTMLDivElement;
    options: Array<MenuOption>;
    generatedOptions: Array<HTMLDivElement>;
    menu: LayoutSwitchMenu;

    constructor(img:string , title: string, options: Array<MenuOption>) {
        super();
        this.img = img;
        this.title = title;
        this.options = options;
        this.generatedOptions = [];
        this.menu = new LayoutSwitchMenu([]);
        this.component = document.createElement("div");
    }

    public generate(): void {
        this.component.classList.add("stb-menu-section");
        const img = document.createElement("img");
        img.src = this.img;
        this.component.appendChild(img);
        const title = document.createElement("h3");
        title.innerText = this.title;
        this.component.appendChild(title);
        const arrow = document.createElement("img");
        arrow.src = "/global/img/chevron-right.svg";
        let shown = false;
        this.component.onclick = () => {
            if(!shown) {
                arrow.src = "/global/img/chevron-down.svg";
                this.openSection();
                shown = true;
            } else {
                arrow.src = "/global/img/chevron-right.svg";
                this.closeSection();
                shown = false;
            }
        }
        this.component.appendChild(arrow);
        for(const option of this.options) {
            option.generate();
            this.generatedOptions.push(option.getComponent());
        }
    }

    public openSection(): void {
        for(const option of this.generatedOptions) {
            this.component.insertAdjacentElement("afterend", option);
        }
    }

    public closeSection(): void {
        for(const option of this.generatedOptions) {
            this.menu.getMenu().removeChild(option);
        }
    }
}