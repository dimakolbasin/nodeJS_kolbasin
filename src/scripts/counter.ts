

export class Counter{
    set value(val: number) {
        this.valueInput.value = String(isNaN(val) ? 0 : val);
    }

    get value(): number {
        return +this.valueInput.value;
    }

    private valueInput: HTMLInputElement;
    private decreaseButton: HTMLElement;
    private increaseButton: HTMLElement;
    private readonly contentCounter: DocumentFragment;
    private template: HTMLTemplateElement;


    constructor(wrapper: HTMLElement) {

        this.template = <HTMLTemplateElement>document.getElementById("counterTemplate");
        this.contentCounter = document.importNode(this.template.content, true);
        this.valueInput = <HTMLInputElement>this.contentCounter.querySelector(".jsValue");
        this.decreaseButton = <HTMLElement>this.contentCounter.querySelector(".jsDecrease");
        this.increaseButton = <HTMLElement>this.contentCounter.querySelector(".jsIncrease");

        this.valueInput.onblur = (event) => (this.value = Number((event.target as HTMLInputElement).value));
        this.increaseButton.onclick = () => this.increase();
        this.decreaseButton.onclick = () => this.decrease();

        wrapper.appendChild(this.contentCounter);
    }

    private increase(): void {
        this.value++;
        this.updateCounter(this.value);
    }

    private decrease(): void {
        this.value--;
        this.updateCounter(this.value);
    }

    public updateCounter(value: number): void {}
}