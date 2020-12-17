function deleteProductFetch(url, id) {
    const item = document.querySelector(".product-" + id);
    item.remove();

    return fetch(url, {
        method: 'DELETE'
    }).then()
}