import {ProductLine} from "./productLine";

export class Popup {

    cartCounter: HTMLElement;
    modalWrapper: HTMLElement;
    modal: HTMLTemplateElement;
    wrapper: HTMLElement;
    private listProductsInCart: Map<string, any>;

    constructor(listProductsInCart: Map<string, any>) {

        this.listProductsInCart = listProductsInCart;
        this.modal = <HTMLTemplateElement>document.getElementById('modal');
        this.modalWrapper = document.getElementById('modal-wrapper');
        this.cartCounter = document.getElementById('body-counter');
        const content = document.importNode(this.modal.content, true);
        const contentEvent: HTMLElement = content.querySelector('.modal__btn-close');

        contentEvent.onclick = (event:MouseEvent) => {
            this.closePopup();
        };

        (content.querySelector('.modal__btn-drop') as HTMLElement).onclick = (event) => {
            this.removeAllProducts();
        };

        this.wrapper = content.querySelector('.list__product');
        this.renderList();
        this.modalWrapper.appendChild(content);
    }

    closePopup() {
        this.modalWrapper.innerHTML = '';
    }

    renderList() {
        this.listProductsInCart.forEach((product, index) => {
            const productLine = new ProductLine(this.wrapper, product, index);
            productLine.updateValues = (updatedProduct) => {
                this.listProductsInCart.set(index, updatedProduct);
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