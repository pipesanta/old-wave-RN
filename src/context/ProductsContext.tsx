import React, { createContext, useEffect, useState } from 'react';
import oldWaveAPI from '../api/oldWaveAPI';
import { Product } from '../interfaces/appInterfaces';

//Información que se va a exponer
type ProductsContextProps = {
    products: Product[];
    loadProducts: (query: string) => Promise<void>;
    loadProductById: (id: string) => Promise<Product>;
}

export const ProductsContext = createContext({} as ProductsContextProps);

export const ProductsProvider = ({ children }: any) => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        loadProducts('Converse');
    }, []);

    const loadProducts = async (q: string) => {
        const res = await oldWaveAPI.get<Product[]>(`/productos?q=${q}`);
        setProducts([...res.data]);
    }

    const loadProductById = async (id: string): Promise<Product> => {
        const res = await oldWaveAPI.get<Product>(`productos/${id}`);
        return res.data;
    };

    return (
        <ProductsContext.Provider value={{
            products,
            loadProducts,
            loadProductById
        }}>
            {children}
        </ProductsContext.Provider>
    )
}