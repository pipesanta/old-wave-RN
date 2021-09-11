
//Products
export interface Product {
    id?: string;
    nombre?: string;
    marca?: string;
    urlFoto?: string;
    ciudad?: string;
    precio?: number;
    seller?: string;
    rating?: number;
    urlFotos?: string[];
    reseller?: Reseller;
    descripcion?: string;
}

export interface Reseller {
    nombre: string;
    urlLogo: string;
}

export interface ShoppingCartProductItem {
    id: string;
    name: string;
    unitPrice: number;
}
export interface ShoppingCartItem {
    quantity: number,
    price: number,
    selected: boolean,
    // TODO to defines
    item: ShoppingCartProductItem
}
