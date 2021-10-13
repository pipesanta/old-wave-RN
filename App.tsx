import 'react-native-gesture-handler';


import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
import { ProductsProvider } from './src/context/ProductsContext';
import { ShoppingCartProvider } from './src/context/CartContext';


const AppState = ({ children }: any) => {
  return (
    <ProductsProvider>
      <ShoppingCartProvider>
        {children}
      </ShoppingCartProvider>
    </ProductsProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  )
}

export default App;