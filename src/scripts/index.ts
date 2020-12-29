import '../assets/themes/base/styles/style.less';
import { deleteProductFetch } from "./adminUtils";
import {Popup} from "./popUp";
import {Product} from "./product";
import * as data from '../../data/data.json';

const listProductsInCart: Map<string, Product> = new Map();

document.onclick = (event: MouseEvent) => {
    if ((<HTMLElement>event.target).classList.contains('drop__product')) {
        const dataId: string = (<HTMLElement>event.target).dataset.id;
        const dataUrl: string = (<HTMLElement>event.target).dataset.url;
        deleteProductFetch(dataUrl, dataId).then(value => {
            const item = document.querySelector('.product-' + dataId);
            item.remove();
        }, reason => {
            alert('error');
        });
    }
};

const burgerButtonElement: HTMLElement = document.querySelector('.burger-nav') as HTMLElement;

burgerButtonElement.onclick = event => {
    modalPhone();
};

const buyButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.btn-plus');

buyButtons.forEach((item: HTMLElement) => {
    let dataId: string = item.dataset.id;
    item.onclick = event => {
        addToCart(dataId);
    }
});

const ModalPhoneDrop: HTMLElement = document.querySelector('.jsCloseModal') as HTMLElement;

ModalPhoneDrop.onclick = event => {
    closeModalPhone();
};

const openCart: HTMLElement = document.querySelector('.open-cart') as HTMLElement;

openCart.onclick = event => {
    openPopup();
};

const openPopup = (): void => {
    preloader();
    setTimeout(function () {
        let loader: HTMLElement = document.querySelector('.loader__container');
        loader.classList.remove('show');
        const popup = new Popup(listProductsInCart);
    }, 1000);
}

const preloader = (): void => {
    let loader: HTMLElement = document.querySelector('.loader__container');
    loader.classList.add('show');
};

const modalPhone = (): void => {
    let modalPhoneAdd: HTMLElement = document.querySelector('.modal-phone');
    modalPhoneAdd.classList.add('show');
}

const closeModalPhone = (): void => {
    let modalPhCls: HTMLElement = document.querySelector('.modal-phone');
    modalPhCls.classList.remove('show');
}

let generalCatalog: Product[] = [...<Product[]>data];

const productsWithDiscount: string[] = ['IPHONE XR 512GB', 'IPHONE XR 256GB', 'IPHONE XR 128GB'];

const getCatalogWithDiscount = (generalCatalog, productsWithDiscount): [] => {

    return generalCatalog.map((product) => {
        if(productsWithDiscount.includes(product.name)){
            return transformPriceByDiscount(product);
        } else {
            return product;
        }
    })
}

const newDiscount = (discount): any => {
    return (price) => {
        return price - price * discount;
    };
};

const transformPriceByDiscount = (product): Product => {
    return {
        ...product,
        price: (newDiscount(0.5)(product.price)) // add discount 50%
    };
};

const addToCart = (index): void => {

    const catalog = getCatalogWithDiscount(generalCatalog, productsWithDiscount);

    if (listProductsInCart.has(index) === true) {
        let productFromCart = listProductsInCart.get(index)
        ++productFromCart.count;
        productFromCart.totalPrice = productFromCart.count * productFromCart.price;
        listProductsInCart.set(index, productFromCart);

    } else {
        const product: Product = catalog[index];
        ++product.count;
        product.totalPrice = product.count * product.price;
        listProductsInCart.set(index, product);
    };

    const bodyCounter: HTMLElement = document.querySelector('.body-counter');
    bodyCounter.innerText = String((counterCart()));
};

const counterCart = (): number => {
    let counter: number = 0;
    listProductsInCart.forEach(value => counter += value.count);
    return counter
};
