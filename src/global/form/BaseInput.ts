export abstract class BaseInput {
    abstract mandatory:boolean;
    abstract value:string|number|Date|boolean;
    abstract input: HTMLElement;

    abstract validate(): boolean;
    abstract generate(): HTMLElement;

    public getValue(): string|number|Date|boolean {
        return this.value;
    }
}