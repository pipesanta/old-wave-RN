import { AxiosInstance } from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { oldWaveFastAPI, oldWaveFlask, oldWaveSpringBoot } from '../api/oldWaveAPI';
import { FastApi } from '../api/oldWaveFastAPI';
import { FlaskApi } from '../api/oldWaveFlaskAPI';
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

    const [fastApiInstance] = useState(new FastApi());
    const [flaskApiInstance] = useState(new FlaskApi());

    useEffect(() => {
        loadProducts('');
    }, []);


    const loadProducts = async (q: string) => {
        console.log('loadProducts..............');


        const [fast, spring, flask] = ['fast', 'springBoot', 'flask'];

        const [fastResponse, flaskResponse] = await Promise.all([
            // oldWaveFastAPI.get<SimpleProduct[]>(`/items?q=${q}`),
            fastApiInstance.searchByKeyword(q),
            flaskApiInstance.searchByKeyword(q)
            // oldWaveSpringBoot.get<SimpleProduct[]>(`/items?q=${q}`),
            // oldWaveFlask.get<SimpleProduct[]>(`/items?q=${q}`)
        ]);

        const joinedResponses = [
            ...fastResponse,
            ...flaskResponse
            // ...springBootResponse.data.map(i => ({ ...i, id: `${spring}-${i.id}` })),
            // ...flaskResponse.data.map(i => ({ ...i, id: `${flask}-${i.id}` }))
        ];

        setProducts(joinedResponses);
    }

    const loadProductById = async (id: string, sellerKey?: string): Promise<CompleteProduct> => {

        let apiRest: FastApi //  || flasApi || ;

        switch (sellerKey) {
            case 'FastAPI':
                apiRest = fastApiInstance
                break;

            default:
                apiRest = fastApiInstance;
        }

        const res = await apiRest.searchProductById(id);

        return res;
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