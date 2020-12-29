import {Counter} from "./counter";
import {Product} from "./product";


export class ProductLine {

    private lineElement: HTMLElement;
    private productPrice: HTMLElement;
    private productName: HTMLElement;
    private readonly productCount: HTMLElement;
    private readonly productContent: DocumentFragment;
    private productLine:HTMLTemplateElement;


    constructor(wrapper: HTMLElement, product: Product, private index: number) {

        this.productLine = <HTMLTemplateElement>document.getElementById('product-line');

        this.productContent = document.importNode(this.productLine.content, true);

        this.lineElement = this.productContent.getElementById('items');
        this.productName = this.productContent.getElementById('name');
        this.productCount = this.productContent.getElementById('count');
        this.productPrice = this.productContent.getElementById('price');

        this.productContent.getElementById('drop-product').onclick = (event) => {
            this.deleteLine();
            this.lineElement.remove();
        };

        this.productName.innerText = product.name;
        this.productPrice.innerText = String(product.price);

        this.index = index;
        const counter: Counter = new Counter(this.productCount); // New Counter
        counter.value = product.count;
        counter.updateCounter = (value) => {
            this.updateValues({
                name: product.name,
                count: value,
                price: product.price,
                totalPrice: value * product.price
            } as Product);
            this.productPrice.innerText = String(value * product.price);
        };
        wrapper.appendChild(this.productContent);
    }
    public updateValues = (param: Product): void => {};
    public deleteLine(): void{};
}
