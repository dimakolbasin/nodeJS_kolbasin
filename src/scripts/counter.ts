export class Counter {
    set value(val: number) {

        this.valueInput.value = String(isNaN(val) ? 0 : val);
    }

    get value(): number {

        return +this.valueInput.value;
    }
    valueInput: HTMLInputElement;
    decreaseButton: HTMLElement;
    increaseButton: HTMLElement;

    constructor(wrapper) {
        const template: HTMLTemplateElement = <HTMLTemplateElement>document.getElementById("counterTemplate");
        const contentCounter = document.importNode(template.content, true);

        this.valueInput = contentCounter.querySelector(".jsValue");
        this.decreaseButton = contentCounter.querySelector(".jsDecrease");
        this.increaseButton = contentCounter.querySelector(".jsIncrease");


        this.valueInput.onblur = (event) => (this.value = Number((event.target as HTMLInputElement).value));
        this.increaseButton.onclick = () => this.increase();
        this.decreaseButton.onclick = () => this.decrease();

        wrapper.appendChild(contentCounter);
    }

    increase() {
        this.value++;
        this.updateCounter(this.value);
    }

    decrease() {
        this.value--;
        this.updateCounter(this.value);
    }

    public updateCounter(value: number) {

    }
}