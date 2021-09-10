import React, { createContext, useEffect, useState } from 'react';
import oldWaveAPI from '../api/oldWaveAPI';
import { Product } from '../interfaces/appInterfaces';
import { SimpleProduct } from '../interfaces/productInterfaces';

//Información que se va a exponer
type ProductsContextProps = {
    products: SimpleProduct[];
    loadProducts: (query: string) => Promise<void>;
    loadProductById: (id: string) => Promise<Product>;
}

export const ProductsContext = createContext({} as ProductsContextProps);

export const ProductsProvider = ({ children }: any) => {

    const [products, setProducts] = useState<SimpleProduct[]>([]);

    useEffect(() => {
        loadProducts('Converse');
    }, []);

    const loadProducts = async (q: string) => {
        const res = await oldWaveAPI.get<SimpleProduct[]>(`/productos?q=${q}`);
        setProducts([...res.data]);
    }

    const loadProductById = async (id: string): Promise<Product> => {
        const res = await oldWaveAPI.get<SimpleProduct>(`productos/${id}`);
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