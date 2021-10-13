import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from '../screens/SearchScreen';
import { ProductDetailScreen } from '../screens/ProductDetailScreen';
import { ShoppingCartScreen } from '../screens/ShoppingCartScreen';

export type ProductsStackParams = {
    SearchScreen: undefined,
    ShoppingCartScreen: undefined,
    ProductDetailScreen: {
        id: string,
        sellerKey: string
    }
}


const Stack = createStackNavigator<ProductsStackParams>();

export const ProductsNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >

            <Stack.Screen
                name="SearchScreen"
                component={SearchScreen}
            />

            <Stack.Screen
                name="ShoppingCartScreen"
                component={ShoppingCartScreen}
            />

            <Stack.Screen
                name="ProductDetailScreen"
                component={ProductDetailScreen}
            />
        </Stack.Navigator>
    )
}
