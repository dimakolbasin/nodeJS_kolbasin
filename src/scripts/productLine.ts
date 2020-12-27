import {Counter} from "./counter";

export class ProductLine {
    lineElement: HTMLElement;
    productPrice: HTMLElement;
    productName: HTMLElement;
    productCount: HTMLElement;
    updateValues: (updatedProduct) => void;
    private index: any;



    constructor(wrapper, product, index) {

        let productLine:HTMLTemplateElement = <HTMLTemplateElement>document.getElementById('product-line');
        
        const productContent = document.importNode(productLine.content, true);

        this.lineElement = productContent.getElementById('items');
        this.productName = productContent.getElementById('name');
        this.productCount = productContent.getElementById('count');
        this.productPrice = productContent.getElementById('price');


        productContent.getElementById('drop-product').onclick = (event) => {
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


        wrapper.appendChild(productContent);
    }

    deleteLine(): void {};

}