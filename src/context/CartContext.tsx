import React, { createContext, useEffect, useReducer } from 'react';
import { ShoppingCartItem } from '../interfaces/appInterfaces';
import { shoppingCartReducer, ShoppingCartState } from '../reducers/ShoppingCart.reducer';


type CartContextProps = {
    productList: ShoppingCartItem[];
    totalPrice: number;
    totalProducts: number;
    loadProducts: (idList: string[]) => Promise<void>;
    addItemToCart: (item: ShoppingCartItem) => void,
    removeItemFromCart: (item: string) => void
}

const shoppingCartState: ShoppingCartState = {
    productList: [],
    totalPrice: 0,
    totalProducts: 0
}

export const ShoppingCartContext = createContext({} as CartContextProps);

export const ShoppingCartProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(shoppingCartReducer, shoppingCartState);

    useEffect(() => {

    }, [])


    const loadProducts = async (idList: string[]) => {
        console.log('loading products');
    }

    function addItemToCart(item: ShoppingCartItem) {
        dispatch({ type: 'addToCart', payload: { cartItem: item } });
    }

    function removeItemFromCart(id: string) {
        dispatch({ type: 'RemoveFromCart', payload: { id } })
    }

    return (
        <ShoppingCartContext.Provider value={{
            productList: state.productList,
            totalPrice: state.totalPrice,
            totalProducts: state.totalProducts,
            loadProducts,
            addItemToCart,
            removeItemFromCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}