import {CounterInterface} from "./counterInterface";

export class Counter implements CounterInterface{
    set value(val: number) {
        this.valueInput.value = String(isNaN(val) ? 0 : val);
    }

    get value(): number {
        return +this.valueInput.value;
    }
    template = <HTMLTemplateElement>document.getElementById("counterTemplate");
    contentCounter = document.importNode(this.template.content, true);
    valueInput = <HTMLInputElement>this.contentCounter.querySelector(".jsValue");
    decreaseButton = <HTMLElement>this.contentCounter.querySelector(".jsDecrease");
    increaseButton = <HTMLElement>this.contentCounter.querySelector(".jsIncrease");

    constructor(wrapper) {

        this.valueInput.onblur = (event) => (this.value = Number((event.target as HTMLInputElement).value));
        this.increaseButton.onclick = () => this.increase();
        this.decreaseButton.onclick = () => this.decrease();

        wrapper.appendChild(this.contentCounter);
    }

    increase() {
        this.value++;
        this.updateCounter(this.value);
    }

    decrease() {
        this.value--;
        this.updateCounter(this.value);
    }

    public updateCounter(value: number) {}
}