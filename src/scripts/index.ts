import '../assets/themes/base/styles/style.less';
import { deleteProductFetch } from "./adminUtils";
import {Popup} from "./popUp";
// @ts-ignore
import * as data from '../../data/data.json';

const listProductsInCart: Map<string, any> = new Map();

/*adminUtils*/

document.onclick = event => {
    if ((<HTMLInputElement>event.target).classList.contains('drop__product')) {
        const dataId: string = (<HTMLInputElement>event.target).dataset.id;
        const dataUrl: string = (<HTMLInputElement>event.target).dataset.url;
        deleteProductFetch(dataUrl, dataId).then(value => {
            const item = document.querySelector('.product-' + dataId);
            item.remove();
        }, reason => {
            alert('error');
        });
    }
}

/*user utils*/

const modalPh: HTMLElement = document.querySelector('.burger-nav') as HTMLElement;

modalPh.onclick = event => {
    modalPhone();
}

const btnPlusArr: NodeListOf<HTMLElement> = document.querySelectorAll('.btn-plus');

btnPlusArr.forEach((item, index, arr) => {
    let dataId: string = item.dataset.id;
    item.onclick = event => {
        addToCart(dataId);
    }
});

const clModalPh: HTMLElement = document.querySelector('.jsCloseModal') as HTMLElement;

clModalPh.onclick = event => {
    closeModalPhone();
}

const openCart: HTMLElement = document.querySelector('.open-cart') as HTMLElement;

openCart.onclick = event => {
    openPopup();
}

function openPopup() {
    preloader();
    setTimeout(function () {
        let loader = document.querySelector('.loader__container');
        loader.classList.remove('show');
        const popup = new Popup(listProductsInCart);

    }, 1000);
}

const preloader = () => {
    let loader = document.querySelector('.loader__container');
    loader.classList.add('show');
}

const modalPhone = () => {
    let modalPhoneAdd = document.querySelector('.modal-phone');
    modalPhoneAdd.classList.add('show');
}

const closeModalPhone = () => {
    let modalPhCls = document.querySelector('.modal-phone');
    modalPhCls.classList.remove('show');
}

// @ts-ignore
let generalCatalog = data.splice(catalogTemplate);

let catalogTemplate = [];

const productsWithDiscount = ['IPHONE XR 512GB', 'IPHONE XR 256GB', 'IPHONE XR 128GB'];

function getCatalogWithDiscount(generalCatalog, productsWithDiscount) {

    return generalCatalog.map((product) => {
        if(productsWithDiscount.includes(product.name)){
            return transformPriceByDiscount(product);
        } else {
            return product;
        }
    })
}

const newDiscount = (discount) => {
    return (price) => {
        return price - price * discount;
    };
};

const transformPriceByDiscount = (product) => {
    return {
        ...product,
        price: (newDiscount(0.5)(product.price)) // add discount 50%
    };
}

const addToCart = (index) => {

    const catalog = getCatalogWithDiscount(generalCatalog, productsWithDiscount);

    if (listProductsInCart.has(index) === true) {
        let productFromCart = listProductsInCart.get(index)
        ++productFromCart.count;
        productFromCart.totalPrice = productFromCart.count * productFromCart.price;
        listProductsInCart.set(index, productFromCart);

    } else {
        const product = catalog[index];
        ++product.count;
        product.totalPrice = product.count * product.price;
        listProductsInCart.set(index, product);
    }

    const bodyCounter: HTMLElement = document.querySelector('.body-counter');
        bodyCounter.innerText = String((counterCart()));
}

const counterCart = () => {
    let counter = 0;
    listProductsInCart.forEach(value => counter += value.count);
    return counter
}

