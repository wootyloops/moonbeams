export type TProduct = {
    name: string,
    category: string,
    description: string,
    price: number,
    inStock: boolean
}

export interface IProduct {
    product: TProduct
}

export interface IProductList {
    [name: string]: TProduct;
}