import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ProductDetailScreen } from '../screens/ProductDetailScreen';

export type ListProductsStackParams = {
    ProductDetailScreen: { id: string }
}

const Stack = createStackNavigator<ListProductsStackParams>();

export const ListProductNavigator = () => {
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
                name="ProductDetailScreen"
                component={ProductDetailScreen}
            />

        </Stack.Navigator>
    )
}