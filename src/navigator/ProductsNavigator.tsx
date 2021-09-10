import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from '../screens/SearchScreen';
import { ProductDetailScreen } from '../screens/ProductDetailScreen';

export type ProductsStackParams = {
    SearchScreen: undefined,
    ProductDetailScreen: {
        id: string
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
                name="ProductDetailScreen"
                component={ProductDetailScreen}
            />
        </Stack.Navigator>
    )
}
