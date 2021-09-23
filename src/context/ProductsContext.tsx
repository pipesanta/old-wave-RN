import { AxiosInstance } from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { oldWaveFastAPI, oldWaveFlask, oldWaveSpringBoot } from '../api/oldWaveAPI';
import { CompleteProduct, Product, SimpleProduct } from '../interfaces/appInterfaces';

//Información que se va a exponer
type ProductsContextProps = {
    products: SimpleProduct[];
    loadProducts: (query: string) => Promise<void>;
    loadProductById: (id: string) => Promise<CompleteProduct>;
}

export const ProductsContext = createContext({} as ProductsContextProps);

export const ProductsProvider = ({ children }: any) => {

    const [products, setProducts] = useState<SimpleProduct[]>([]);

    useEffect(() => {
        loadProducts('apple');
    }, []);

    const loadProducts = async (q: string) => {

        const [fast, spring, flask] = ['fast', 'springBoot', 'flask'];

        const [fastResponse, springBootResponse, flaskResponse] = await Promise.all([
            oldWaveFastAPI.get<SimpleProduct[]>(`/items?q=${q}`),
            oldWaveSpringBoot.get<SimpleProduct[]>(`/items?q=${q}`),
            oldWaveFlask.get<SimpleProduct[]>(`/items?q=${q}`)
        ]);

        const joinedResponses = [
            ...fastResponse.data.map(i => ({ ...i, id: `${fast}-${i.id}` })),
            ...springBootResponse.data.map(i => ({ ...i, id: `${spring}-${i.id}` })),
            ...flaskResponse.data.map(i => ({ ...i, id: `${flask}-${i.id}` }))
        ];

        setProducts(joinedResponses);
    }

    const loadProductById = async (id: string, sellerKey?: string): Promise<CompleteProduct> => {

        let apiRest: AxiosInstance;

        switch (sellerKey) {
            case 'FLASK':
                apiRest = oldWaveFlask
                break;

            default:
                apiRest = oldWaveFastAPI;
        }

        const parsedId = id.split('-')[1];

        const res = await apiRest.get<CompleteProduct>(`items/${parsedId}`);

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