import {Counter} from "./counter";
import {ProductLineInterface} from "./productLineInterface";


export class ProductLine implements ProductLineInterface {

    productLine = <HTMLTemplateElement>document.getElementById('product-line');

    productContent = document.importNode(this.productLine.content, true);

    lineElement = this.productContent.getElementById('items');
    productName = this.productContent.getElementById('name');
    productCount = this.productContent.getElementById('count');
    productPrice = this.productContent.getElementById('price');


    constructor(wrapper, product, private index: number) {


        this.productContent.getElementById('drop-product').onclick = (event) => {
            this.deleteLine();
            this.lineElement.remove();
        };

        this.productName.innerText = product.name;
        this.productPrice.innerText = product.price;

        this.index = index;
        const counter = new Counter(this.productCount); // New Counter
        counter.value = product.count;
        counter.updateCounter = (value) => {
            this.updateValues({
                name: product.name,
                count: value,
                price: product.price,
                totalPrice: value * product.price
            });
            this.productPrice.innerText = String(value * product.price);
        };
        wrapper.appendChild(this.productContent);
    }
    public updateValues = (param: { totalPrice: number; price: number; name: string; count: number }) => {};
    public deleteLine(){};
}
