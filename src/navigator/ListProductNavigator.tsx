import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { ListProductScreen } from '../screens/ListProductScreen';
import { ProductDetailScreen } from '../screens/ProductDetailScreen';

export type ListProductsStackParams ={
    ProductDetailScreen: { id: string },
    ListProductScreen:{
        id: string, 
        nombre: string, 
        marca: string, 
        urlFoto: string, 
        ciudad: string,
        precio: number, 
        seller: string, 
        rating: number
    }

}

const Stack = createStackNavigator<ListProductsStackParams>();

export const ListProductNavigator = () =>{
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }
        }}
        >
            <Stack.Screen 
                name="ListProductScreen"
                component={ ListProductScreen }
            />

            <Stack.Screen 
                name="ProductDetailScreen"
                component={ ProductDetailScreen }
            />
        
        </Stack.Navigator>
    )
}