/*adminUtils*/

export function deleteProductFetch (url: string, id: string): Promise<Response> {
    return fetch(url, {
        method: 'DELETE'
    });
}


