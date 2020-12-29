export interface ProductLineInterface {
    lineElement: HTMLElement;
    productPrice: HTMLElement;
    productName: HTMLElement;
    productCount: HTMLElement;
    updateValues: (updatedProduct) => void;
    productContent: DocumentFragment;
    productLine:HTMLTemplateElement;
}