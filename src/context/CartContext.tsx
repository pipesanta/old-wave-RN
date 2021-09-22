import React, { createContext, useEffect, useReducer } from 'react';
import { AsyncStorage } from 'react-native';
import { ShoppingCartItem } from '../interfaces/appInterfaces';
import { shoppingCartReducer, ShoppingCartState } from '../reducers/ShoppingCart.reducer';


type CartContextProps = {
    productList: ShoppingCartItem[];
    totalPrice: number;
    loadProducts: (idList: string[]) => Promise<void>;
    addItemToCart: (item: ShoppingCartItem) => void,
    removeItemFromCart: (item: string) => void
}

const shoppingCartState: ShoppingCartState = {
    productList: [],
    totalPrice: 0
}

const localStorageKeyForCartState = "cartState";

export const ShoppingCartContext = createContext({} as CartContextProps);

export const ShoppingCartProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(shoppingCartReducer, shoppingCartState);

    useEffect(() => {
        //load local storage
        AsyncStorage.getItem(localStorageKeyForCartState).then(d => {
            console.log('leyendo el ', { d })
            if (d) {

                const newState: ShoppingCartState = JSON.parse(d);
                dispatch({
                    type: 'SetCartList',
                    payload: { state: newState }
                })
            }
        })

    }, []);


    useEffect(() => {
        AsyncStorage.setItem(localStorageKeyForCartState, JSON.stringify(state))
            .then(d => console.log('local storage actualizado'))
    }, [state])


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
            loadProducts,
            addItemToCart,
            removeItemFromCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}