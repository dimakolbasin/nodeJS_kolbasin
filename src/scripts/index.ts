import '../styles/style.less'
/**/
document.onclick = event => {
    if ((<HTMLInputElement>event.target).classList.contains('drop__product')) {
        const dataId: string = (<HTMLInputElement>event.target).dataset.id;
        const dataUrl: string = (<HTMLInputElement>event.target).dataset.url;
        deleteProductFetch(dataUrl, dataId);
    }
}

function deleteProductFetch (url, id) {
    const item = document.querySelector('.product-' + id);
    item.remove();

    return fetch(url, {
        method: 'DELETE'
    }).then()

}


