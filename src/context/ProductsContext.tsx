import React, { createContext, useEffect, useState } from 'react';
import oldWaveAPI from '../api/oldWaveAPI';
import { Product } from '../interfaces/appInterfaces';

//Información que se va a exponer
type ProductsContextProps = {
    products: Product[];
    loadProducts: ( query: string ) => Promise<void>;
    loadProductById: ( id: string ) => Promise<Product>;
}



export const ProductsContext = createContext({} as ProductsContextProps);



export const ProductsProvider = ({ children }: any ) => {

    const [products, setProducts] = useState<Product[]>([]);

    // useEffect(() => {
    //     loadProducts();
    // }, [])

    const loadProducts = async(q: string) => {
        
    }

    const loadProductById = ( id: string ):Promise<Product> => {
        throw new Error('Not implemented');
    };

    // const loadProducts = async() => {
    //     const resp = await cafeApi.get<ProductsResponse>('/productos?limite=50');
    //     setProducts([ ...resp.data.productos ]);
    // }

    // const addProduct = async( categoryId: string, productName: string ): Promise<Producto> => {
        
    //     const resp = await cafeApi.post<Producto>('/productos', {
    //         nombre: productName,
    //         categoria: categoryId
    //     });
    //     setProducts([ ...products, resp.data ]);
        
    //     return resp.data;
    // }

    // const updateProduct = async( categoryId: string, productName: string, productId: string ) =>{
    //     const resp = await cafeApi.put<Producto>(`/productos/${ productId }`, {
    //         nombre: productName,
    //         categoria: categoryId
    //     });
    //     setProducts( products.map( prod => {
    //         return (prod._id === productId )
    //                 ? resp.data
    //                 : prod;
    //     }) );
    // }

    // const deleteProduct = async( id: string ) => {
        
    // }

    // const loadProductById = async( id: string ):Promise<Producto> => {
    //     const resp = await cafeApi.get<Producto>(`productos/${ id }`);
    //     return resp.data;
    // };

    // // TODO: cambiar ANY
    // const uploadImage = async( data: any, id: string ) => {
        
    // }

    return(
        <ProductsContext.Provider value={{
            products,
            loadProducts,
            loadProductById
        }}>
            { children }
        </ProductsContext.Provider>
    )
}