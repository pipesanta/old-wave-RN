import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ProductsNavigator } from './ProductsNavigator';
import { ShoppingCartScreen } from '../screens/ShoppingCartScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="ProductsNavigator" component={ProductsNavigator} /> 
      {/* <Stack.Screen name="ShoppingCartScreen"
                component={ShoppingCartScreen} /> */}
    </Stack.Navigator> 
  );
}