export class Layout {
    title: string;
    path: Array<string>;
    layout: HTMLDivElement;
    content: HTMLElement | string;
    container: HTMLElement;

    constructor(title: string, path: Array<string>, content: HTMLElement | string, container: HTMLElement) {
        this.title = title;
        this.path = path;
        this.layout = document.createElement("div");
        this.content = content;
        this.container = container;
    }

    generate() {
        const cssScript = document.createElement("link");
        cssScript.rel="stylesheet";
        cssScript.href="/global/css/layout.css";
        document.getElementsByTagName("head")[0].appendChild(cssScript);

        this.layout.classList.add("stb-layout");
        const pathHeader = document.createElement("div");
        pathHeader.classList.add("stb-path-header");
        for(const pathElement of this.path) {
            const p = document.createElement("p");
            p.innerText = pathElement;
            const dot = document.createElement("img");
            dot.src = "/global/img/circle-dot.svg";
            pathHeader.appendChild(p);
            pathHeader.appendChild(dot);
        }

        const titleP = document.createElement("p");
        titleP.innerText = this.title;
        pathHeader.appendChild(titleP);

        const content = document.createElement("div");
        content.classList.add("stb-layout-content");
        if(typeof this.content === "string") {
            content.innerHTML = this.content;
        } else {
            content.appendChild(this.content);
        }
        this.layout.appendChild(pathHeader);
        this.layout.appendChild(content);
    }

    getLayout() {
        return this.layout;
    }

    show() {
        this.container.innerHTML = "";
        this.container.appendChild(this.layout);
    }
}