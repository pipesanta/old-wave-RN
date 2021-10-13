
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
    image?: string;
}
export interface ShoppingCartItem {
    quantity: number,
    price: number,
    selected: boolean,
    // TODO to defines
    item: ShoppingCartProductItem
}



// export interface SimpleProduct {
//     id: string,
//     nombre: string,
//     marca: string,
//     urlFoto: string,
//     ciudad: string,
//     precio: number,
//     seller: string,
//     rating: number
// }

//SimpleProduct 
export interface SimpleProduct {
    id: string;
    name: string;
    brand?: string;
    thumbnail?: string;
    city?: City;
    price: number;
    rating?: number;
    sellerKey: string;
}

export interface CompleteProduct {
    id: string;
    name: string;
    brand?: string;
    pictures?: string[];
    city?: City;
    price: number;
    rating?: number;
    description: string;
    seller?: Seller;
}

export interface Seller {
    id?: number;
    name?: string;
    logo?: string;
}

export interface City {
    id?: string;
    name?: string;
}


