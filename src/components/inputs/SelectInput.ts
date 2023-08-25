import { BaseInput } from "../../global/form/BaseInput";

export type SelectOption = {
    name: string,
    value: string
}

export class SelectInput extends BaseInput {
    value: any;
    input: HTMLSelectElement;
    mandatory: boolean;
    values: Array<SelectOption>;

    constructor(mandatory: boolean, values: Array<SelectOption>) {
        super();
        this.mandatory = mandatory;
        this.input = document.createElement("select");
        this.values = values;
    }

    generate(): HTMLSelectElement {
        for(const value of this.values) {
            const option = document.createElement("option");
            option.innerText = value.name;
            option.value = value.value;
            this.input.appendChild(option);
        }
        return this.input
    }

    validate(): boolean {
        return true;
    }

}