
import { StyleSheet, View, Text, FlatList } from 'react-native';
import React, { useContext, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../navigator/ProductsNavigator';
import { ShoppingCartContext } from '../context/CartContext';
import {Header} from '../components/Header';
import {ShoppingCard} from '../components/ShoppingCard';
import { ShoppingCartProductItem } from '../interfaces/appInterfaces';
import {ProductCard } from '../components/ProductCard';


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

    const product=[
        {
            "id": "1",
            "name": "Iphone 11",
            "unitPrice": 2000000
        }, 
        {
            "id": "2",
            "name": "Iphone 11",
            "unitPrice": 2000000
        }
    ]

    return (
        <View style={styles.cardContainer}>
            <Header/>
             <FlatList
                    data={product}
                    keyExtractor={(p) => p.id}
                    numColumns={1}
                    ListHeaderComponent={(
                        <Text style={{
                            ...styles.shoppingCart,
                            ...styles.globalMargin,
                            top: 30,
                        }}> Shopping cart </Text>
                    )}
                    renderItem={({ item }) => (
                        <ShoppingCard
                            product={item} 
                        />
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={styles.globalMargin} />
                    )}
                /> 
            {/* <Text> {JSON.stringify(productList)} </Text> */}
          
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: "column"
    },
    shoppingCart:{
        color: '#772CE8',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
        paddingTop: 10
    }, 
    globalMargin:{
        marginVertical: 30
    }, 
    text:{
       // fontFamily: 'Roboto', 
        fontSize: 19, 
        top: 100, 
        color: '#5C5E64'
    }
});