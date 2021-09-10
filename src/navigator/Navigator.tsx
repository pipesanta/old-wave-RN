import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ProductsNavigator } from './ProductsNavigator';

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
    </Stack.Navigator>
  );
}