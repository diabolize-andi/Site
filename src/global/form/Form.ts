import { BaseInput } from "./BaseInput.js";

export type Input = {
    name: string,
    input: BaseInput
}

export class Form {

    private inputs: Array<Input>;
    private submitBtnText: string;
    private send: Function;

    constructor(inputs: Array<Input>, submitBtnText: string) {
        this.inputs = inputs;
        this.submitBtnText = submitBtnText;
        this.send = () => {};
    }

    private generate(): HTMLFormElement {
        let form = document.createElement("form");

        for(const input of this.inputs) {
            const inputValue = input.input;
            form.appendChild(inputValue.generate());
        }
        const submitButton = document.createElement("button");
        submitButton.onclick = () => {
            if(this.validate()) {
                this.send();
            }
        }
        submitButton.innerText = this.submitBtnText;
        submitButton.type = "button";
        form.appendChild(submitButton);
        form = this.cssAppender(form);
        return form;
    }

    public appendToContainer(container: HTMLElement):void {
        container.appendChild(this.generate());
    }

    public getForm(): HTMLFormElement {
        return this.generate();
    }

    public setSendFunction(send: Function): void {
        this.send = send;
    }

    private validate(): boolean {
        for(const input of this.inputs) {
            if(!input.input.validate()) {
                return false;
            }
        }
        return true;
    }

    public getInput(name: string): BaseInput | void {
        for(const input of this.inputs) {
            if(input.name === name) {
                return input.input;
            }
        }
    } 

    export() {
        let id;
        let jsonString: any = {};
        for(const input of this.inputs) {
            if(input.name != "id") {
                jsonString[input.name] = input.input.getValue();  
            } else {
                id = input.input.getValue();
            }
            
        }
        return {
            id: id,
            body: JSON.stringify(jsonString)
        };
    }

    private cssAppender(form: HTMLFormElement): HTMLFormElement {
        form.classList.add("stb-form-vertical");
        const cssScript = document.createElement("link");
        cssScript.rel="stylesheet";
        cssScript.href="/global/css/form.css";
        document.getElementsByTagName("head")[0].appendChild(cssScript);
        return form;
    }
}