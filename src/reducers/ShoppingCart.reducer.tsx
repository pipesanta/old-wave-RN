

/**
 *  productList: { quantity: number, price: number, selected: boolean, item: any }[];
    totalPrice: number;
    loadProducts: (idList: string[]) => Promise<void>;
 */

import { ShoppingCartItem } from "../interfaces/appInterfaces";



export interface ShoppingCartState {
    productList: ShoppingCartItem[];
    totalPrice: number;
}

// TYPES

export type AddToCartAction = { type: 'addToCart', payload: { cartItem: ShoppingCartItem } };
export type RemoveFromCartAction = { type: 'RemoveFromCart', payload: { id: string } };
export type SetCartListAction = { type: 'SetCartList', payload: { list: ShoppingCartItem[] } };

export type ShoppingCartAction = AddToCartAction
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

            return { ...state, productList: newList }

        case 'RemoveFromCart': {
            const idToRemove = action.payload.id
            return {
                ...state,
                productList: [...state.productList].filter(i => i.item.id !== idToRemove)
            }
        }

        case 'SetCartList': {
            return { ...state, productList: action.payload.list }
        }


        default:
            return { ...state }
    }
}
