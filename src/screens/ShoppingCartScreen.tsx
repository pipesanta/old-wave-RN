
import { StyleSheet, View, Text } from 'react-native';
import React, { useContext, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../navigator/ProductsNavigator';
import { ShoppingCartContext } from '../context/CartContext';

interface Props extends StackScreenProps<ProductsStackParams, 'ShoppingCartScreen'> { };


export const ShoppingCartScreen = ({ route }: Props) => {
    const { top, left } = useSafeAreaInsets();

    const {
        productList,
        totalPrice,
        addItemToCart,
        removeItemFromCart,
        loadProducts: loadProductsForShoppingCart
    } = useContext(ShoppingCartContext);

    return (
        <View style={{ flex: 1, top: top }}>
            <Text> {JSON.stringify(productList)} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
});