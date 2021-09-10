
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


