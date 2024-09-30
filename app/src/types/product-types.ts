export type TProduct = {
    productID: number,
    name: string,
    category: string,
    description: string,
    price: number,
    stock: number
}

export interface IProduct {
    product: TProduct
}

export interface IProductList {
    [name: string]: TProduct;
}