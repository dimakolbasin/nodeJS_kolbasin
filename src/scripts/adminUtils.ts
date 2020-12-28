/*adminUtils*/

export function deleteProductFetch (url, id): Promise<Response> {
    return fetch(url, {
        method: 'DELETE'
    });
}


