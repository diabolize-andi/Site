import { TextInput } from "../../global/form/TextInput.js";

export class PasswordInput extends TextInput {
    container: HTMLDivElement;
    input: HTMLInputElement;
    placeholder:string;
    mandatory:boolean;
    value:any;

    constructor(placeholder: string, mandatory: boolean) {
        super();
        this.placeholder = placeholder;
        this.mandatory = mandatory;
        this.container = document.createElement("div");
        this.input = document.createElement("input");
        this.input.type = "password";
    }

    public generate() {
        this.input.placeholder = this.placeholder;
        this.container.appendChild(this.input);
        const eyeImg = document.createElement("img");
        eyeImg.src = "/global/img/visible.svg";
        eyeImg.onclick = () => {
            if(this.input.type === "password") {
                this.input.type = "name";
                eyeImg.src = "/global/img/hidden.svg";
            } else {
                this.input.type = "password";
                eyeImg.src = "/global/img/visible.svg";
            }
        }
        this.container.appendChild(eyeImg);
        this.container.classList.add("stb-passwd");

        return this.container;
    }

    public validate():boolean {
        this.value = this.input.value;
        return true;
    }
}