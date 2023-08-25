import { TextInput } from "../../global/form/TextInput.js";

export class NameInput extends TextInput {

    input: HTMLInputElement;
    placeholder:string;
    mandatory:boolean;
    value: any;

    constructor(placeholder:string, mandatory:boolean, value?:string) {
        super();
        this.placeholder = placeholder;
        this.mandatory = mandatory;
        this.input = document.createElement("input");
        this.input.type = "name";
        if(value) {
            this.value = value;
        }
    }

    public generate(): HTMLInputElement {
        this.input.placeholder = this.placeholder;
        if(this.value) {
            this.input.value = this.value;
        }
        return this.input;
    }

    public validate():boolean {
        this.value = this.input.value;
        if(this.mandatory && this.value.length == 0) {
            return false;
        }
        return true;
    }
}