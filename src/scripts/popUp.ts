import {ProductLine} from "./productLine";
import {Products} from "./products";
import {popUpInterface} from "./popUpInterface";

export class Popup implements popUpInterface{

    modal = <HTMLTemplateElement>document.getElementById('modal');
    modalWrapper = document.getElementById('modal-wrapper');
    cartCounter = document.getElementById('body-counter');
    content = document.importNode(this.modal.content, true);
    wrapper = <HTMLElement>this.content.querySelector('.list__product');

    constructor(private listProductsInCart: Map<string, Products>) {

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

    closePopup() {
        this.modalWrapper.innerHTML = '';
    }

    renderList() {
        this.listProductsInCart.forEach((product, index) => {
            const productLine = new ProductLine(this.wrapper, product, Number(index));
            productLine.updateValues = (updatedProduct) => {
                this.listProductsInCart.set(index, <Products>updatedProduct);
            }
            productLine.deleteLine = () => {
                this.listProductsInCart.delete(index);
            }
        });
    }

    removeAllProducts() {
        this.cartCounter.innerHTML = '';
        this.listProductsInCart.clear();
        this.wrapper.innerHTML = '';

    }
}