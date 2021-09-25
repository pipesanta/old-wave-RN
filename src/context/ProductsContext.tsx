
import React, { createContext, useEffect, useState } from 'react';
import { FastApi } from '../api/oldWaveFastAPI';
import { FlaskApi } from '../api/oldWaveFlaskAPI';
import { GraphQlAPI } from '../api/graphQlAPI';
import { CompleteProduct, Product, SimpleProduct } from '../interfaces/appInterfaces';
import { APIKeysEnum } from '../api/ApiEnums';

//Información que se va a exponer
type ProductsContextProps = {
    products: SimpleProduct[];
    loadProducts: (query: string) => Promise<void>;
    loadProductById: (id: string, sellerKey: string) => Promise<CompleteProduct>;
}

export const ProductsContext = createContext({} as ProductsContextProps);

export const ProductsProvider = ({ children }: any) => {

    const [products, setProducts] = useState<SimpleProduct[]>([]);

    const [fastApiInstance] = useState(new FastApi());
    const [flaskApiInstance] = useState(new FlaskApi());
    const [graphQlApiInstance] = useState(new GraphQlAPI());


    useEffect(() => {
        loadProducts('');
    }, []);


    const loadProducts = async (q: string) => {

        const [fastResponse, flaskResponse] = await Promise.all([
            // oldWaveFastAPI.get<SimpleProduct[]>(`/items?q=${q}`),
            fastApiInstance.searchByKeyword(q),
            flaskApiInstance.searchByKeyword(q),
            // graphQlApiInstance
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

    const loadProductById = async (id: string, sellerKey: string): Promise<CompleteProduct> => {

        let apiRest: FastApi | FlaskApi;

        switch (sellerKey) {
            case APIKeysEnum.FAST:
                apiRest = fastApiInstance
                break;
            case APIKeysEnum.FLASK:
                apiRest = flaskApiInstance;
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