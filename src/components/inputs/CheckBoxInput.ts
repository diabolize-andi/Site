import { BaseInput } from "../../global/form/BaseInput.js";

export class CheckBoxInput extends BaseInput {
    mandatory: boolean;
    value: any;
    input: HTMLInputElement;

    constructor(mandatory: boolean, value?: boolean) {
        super();
        this.mandatory = mandatory;
        this.input = document.createElement("input");
        this.input.type = "checkbox";
        if(value) {
            this.value = value;
        }
    }

    generate(): HTMLInputElement {
        if(this.value) {
            if(this.value === true) {
                this.input.checked = true;
            }
        }
        return this.input;
    }

    validate(): boolean {
        if(this.input.checked === true) {
            this.value = true;
        } else {
            this.value = false;
        }

        if(this.mandatory && !this.value) {
            return false;
        }

        return true;
    }
}