export interface SimpleProduct {
    id: string,
    nombre: string,
    marca: string,
    urlFoto: string,
    ciudad: string,
    precio: number,
    seller: string,
    rating: number
}

export interface FullProduct {
    id: string,
    rating: number,
    name: string,
    brand: string,
    pictures: string[],
    city: City,
    price: number,
    description: string,
    seller: Seller
}

interface City {
    id: string,
    name: string
}

interface Seller {
    id: string,
    name: string,
    logo: string
}