import '../styles/style.css'
/**/
document.onclick = event => {
    if (event.target.classList.contains('drop__product')) {
        const dataId = event.target.dataset.id;
        const dataUrl = event.target.dataset.url;
        deleteProductFetch(dataUrl, dataId);
    }
}

function deleteProductFetch(url, id) {
    const item = document.querySelector('.product-' + id);
    item.remove();

    return fetch(url, {
        method: 'DELETE'
    }).then()

}

