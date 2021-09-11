import React, { createContext, useEffect, useReducer } from 'react';
import { ShoppingCartItem } from '../interfaces/appInterfaces';
import { shoppingCartReducer, ShoppingCartState } from '../reducers/ShoppingCart.reducer';
import { AddToCartAction } from '../reducers/ShoppingCart.reducer';


type CartContextProps = {
    productList: ShoppingCartItem[];
    totalPrice: number;
    loadProducts: (idList: string[]) => Promise<void>;
}

const shoppingCartState: ShoppingCartState = {
    productList: [],
    totalPrice: 0
}

export const ShoppingCartContext = createContext({} as CartContextProps);

export const ShoppingCartProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(shoppingCartReducer, shoppingCartState);

    useEffect(() => {
        dispatch({
            type: 'addToCart',
            payload: {
                cartItem: {
                    item: { id: '123', name: 'empanada', unitPrice: 1100 },
                    price: 1100,
                    quantity: 1,
                    selected: false
                }
            }
        })
    }, [])


    const loadProducts = async (idList: string[]) => {
        console.log('loading products');
    }

    return (
        <ShoppingCartContext.Provider value={{
            productList: state.productList,
            totalPrice: state.totalPrice,
            loadProducts
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}