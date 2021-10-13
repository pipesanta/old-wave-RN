

/**
 *  productList: { quantity: number, price: number, selected: boolean, item: any }[];
    totalPrice: number;
    loadProducts: (idList: string[]) => Promise<void>;
 */

import { ShoppingCartItem } from "../interfaces/appInterfaces";



export interface ShoppingCartState {
    productList: ShoppingCartItem[];
    totalPrice: number;
    totalProducts: number;
}

// TYPES

export type AddToCartAction = { type: 'addToCart', payload: { cartItem: ShoppingCartItem } };
export type SubstractFromCartAction = { type: 'SubstractFromCart', payload: { cartItem: ShoppingCartItem } };
export type RemoveFromCartAction = { type: 'RemoveFromCart', payload: { id: string } };
export type SetCartListAction = { type: 'SetCartList', payload: { state: ShoppingCartState } };

export type ShoppingCartAction = AddToCartAction
    | SubstractFromCartAction
    | RemoveFromCartAction
    | SetCartListAction




export const shoppingCartReducer = (state: ShoppingCartState, action: ShoppingCartAction): ShoppingCartState => {
    switch (action.type) {
        case 'addToCart':

            let newList: ShoppingCartItem[] = [];
            const relatedProductId = action.payload.cartItem.item.id;

            const alreadyExistsOnList = state.productList.some((i) => i.item.id === relatedProductId);

            if (alreadyExistsOnList) {
                newList = [...state.productList].map((ci) => {
                    if (ci.item.id === relatedProductId) {
                        ci.quantity++;
                    }
                    return ci;
                });

            } else {
                newList = [action.payload.cartItem, ...state.productList];
            }

            const totalPrice = newList.reduce((pv, cv, ci) => {
                return pv + (cv.price * cv.quantity);
            }, 0);

            return {
                ...state,
                totalPrice,
                totalProducts: newList.reduce((pv, cv) => pv + (cv.quantity), 0),
                productList: newList
            }

        case 'SubstractFromCart': {
            let auxList, newList: ShoppingCartItem[] = [];
                auxList = [...state.productList].map((ci) => {
                    if (ci.item.id === action.payload.cartItem.item.id) {
                        ci.quantity--;
                    }
                    return ci
                });

            newList = [...auxList].filter(i => i.quantity !== 0 );

            const totalPrice = newList.reduce((pv, cv, ci) => {
                return pv + (cv.price * cv.quantity);
            }, 0);

            return {
                ...state,
                totalPrice,
                totalProducts: newList.reduce((pv, cv) => pv + (cv.quantity), 0),
                productList: newList
            }
        }

        case 'RemoveFromCart': {
            const idToRemove = action.payload.id

            const newList = [...state.productList].filter(i => i.item.id !== idToRemove);

            const totalPrice = newList.reduce((pv, cv, ci) => {
                return pv + (cv.price * cv.quantity);
            }, 0);

            return {
                ...state,
                totalPrice,
                totalProducts: newList.reduce((pv, cv) => pv + (cv.quantity), 0),
                productList: newList
            }
        }

        case 'SetCartList': {
            return { ...action.payload.state }
        }


        default:
            return { ...state }
    }
}
