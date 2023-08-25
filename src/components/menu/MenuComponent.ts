import { LayoutSwitchMenu } from "../../global/LayoutSwitchMenu.js";

export abstract class MenuComponent {
    abstract img: string;
    abstract title: string;
    abstract component: HTMLDivElement;
    abstract menu: LayoutSwitchMenu;

    abstract generate(): void;
    
    public getComponent(): HTMLDivElement {
        return this.component;
    }

    public setMenu(menu: LayoutSwitchMenu): void {
        this.menu = menu;
    }
}