export class Popup {
    content: HTMLElement;
    popupContainer: HTMLDivElement;
    popup: HTMLDivElement;
    popupHeader: HTMLDivElement;
    title: string;

    constructor(content: HTMLElement, title: string) {
        this.content = content;
        this.popupContainer = document.createElement("div");
        this.popup = document.createElement("div");
        this.popupHeader = document.createElement("div");
        this.title = title;
    }

    public generate() {
        const body = document.getElementsByTagName("body")[0];
        this.CssAppender();
        this.lockScroll(true);
        this.generateHeader();
        this.popup.appendChild(this.popupHeader);
        this.popup.appendChild(this.content)
        this.popupContainer.appendChild(this.popup);
        body.appendChild(this.popupContainer);
    }

    private generateHeader() {
        const title = document.createElement("h2");
        title.innerText = this.title;
        const closeImg = document.createElement("img");
        closeImg.src = "/global/img/close.svg";
        closeImg.onclick = () => {
            this.destroy();
        }
        this.popupHeader.appendChild(title);
        this.popupHeader.appendChild(closeImg);
    }

    private CssAppender() {
        this.popupContainer.classList.add("stb-popup-container");
        this.popup.classList.add("stb-popup");
        this.popupHeader.classList.add("stb-popup-header");
        this.content.classList.add("stb-popup-content");
        const cssScript = document.createElement("link");
        cssScript.rel="stylesheet";
        cssScript.href="/global/css/popup.css";
        document.getElementsByTagName("head")[0].appendChild(cssScript);
    }

    private lockScroll(lock: boolean) {
        const body = document.getElementsByTagName("body")[0];

        if(lock) {
            body.classList.add("stop-scroll");
        } else {
            body.classList.remove("stop-scroll");
        }
    }

    public destroy():void {
        document.getElementsByTagName("body")[0].removeChild(this.popupContainer);
        this.lockScroll(false);
    }
}