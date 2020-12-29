import {ProductLine} from "./productLine";
import {Product} from "./product";

export class Popup{

    private cartCounter: HTMLElement;
    private modalWrapper: HTMLElement;
    private modal: HTMLTemplateElement;
    private readonly wrapper: HTMLElement;
    private readonly content: DocumentFragment;

    constructor(private listProductsInCart: Map<string, Product>) {

        this.modal = <HTMLTemplateElement>document.getElementById('modal');
        this.modalWrapper = document.getElementById('modal-wrapper');
        this.cartCounter = document.getElementById('body-counter');
        this.content = document.importNode(this.modal.content, true);
        this.wrapper = <HTMLElement>this.content.querySelector('.list__product');

        this.listProductsInCart = listProductsInCart;

        const contentEvent: HTMLElement = this.content.querySelector('.modal__btn-close');

        contentEvent.onclick = (event:MouseEvent) => {
            this.closePopup();
        };

        (this.content.querySelector('.modal__btn-drop') as HTMLElement).onclick = (event) => {
            this.removeAllProducts();
        };

        this.renderList();
        this.modalWrapper.appendChild(this.content);
    }

    private closePopup(): void {
        this.modalWrapper.innerHTML = '';
    }

    private renderList(): void {
        this.listProductsInCart.forEach((product, index) => {
            const productLine = new ProductLine(this.wrapper, product, Number(index));
            productLine.updateValues = (updatedProduct) => {
                this.listProductsInCart.set(index, <Product>updatedProduct);
            }
            productLine.deleteLine = () => {
                this.listProductsInCart.delete(index);
            }
        });
    }

    private removeAllProducts(): void {
        this.cartCounter.innerHTML = '';
        this.listProductsInCart.clear();
        this.wrapper.innerHTML = '';

    }
}