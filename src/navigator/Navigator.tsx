import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ProductDetailScreen } from '../screens/ProductDetailScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { ProductsNavigator } from './ProductsNavigator';
import { ListProductNavigator } from './ListProductNavigator';
import { Text } from 'react-native';

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
       {/* <Stack.Screen name="ProductsNavigator" component={ProductsNavigator} />  */}
      <Stack.Screen name="ListProductNavigator" component={ListProductNavigator} />
     
    </Stack.Navigator>
  );
}