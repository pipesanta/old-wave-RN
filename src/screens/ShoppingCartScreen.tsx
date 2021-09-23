
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../navigator/ProductsNavigator';
import { ShoppingCartContext } from '../context/CartContext';
import { Header } from '../components/Header';
import { ShoppingCard } from '../components/ShoppingCard';
import { ShoppingCartProductItem } from '../interfaces/appInterfaces';
import { ProductCard } from '../components/ProductCard';


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

    const product = [
        {
            "id": "1",
            "name": "Iphone 11",
            "unitPrice": 2000000,

        },
        {
            "id": "2",
            "name": "Iphone 3",
            "unitPrice": 3200000,

        },
        {
            "id": "3",
            "name": "Iphone 15",
            "unitPrice": 7200000,

        },
        {
            "id": "4",
            "name": "Camara",
            "unitPrice": 200000,

        },
        {
            "id": "5",
            "name": "Samsung",
            "unitPrice": 2200000,

        }
    ]

    return (
        <View style={styles.cardContainer}>
            <View style={styles.shoppingCard}>
                <Header goToShoppingCart={() => {
                    // TODO
                    // esto que hace? ?
                }} />
                <FlatList
                    data={product}
                    keyExtractor={(p) => p.id}
                    numColumns={1}
                    ListHeaderComponent={(
                        <Text style={{
                            ...styles.shoppingCart,
                            ...styles.globalMargin
                        }}> Shopping cart </Text>

                    )}
                    renderItem={({ item }) => (
                        <ShoppingCard product={item} />
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={styles.globalMargin} />
                    )}
                />
                {/* <Text> {JSON.stringify(productList)} </Text> */}
            </View>
            <View style={styles.subtotalBuyCard}>


                <View style={styles.subtotalCard}>
                    <View style={styles.subtotal}>
                        <Text style={styles.subtotalText}> SUBTOTAL: </Text>
                    </View>
                </View>
                <View style={styles.buyCard}>
                    <TouchableOpacity style={styles.buyButtom}>
                        <Text style={styles.textBuyBottom}> Comprar </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center'
    },
    shoppingCard: {
        width: '100%',
        height: '80%',
        top: -10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    shoppingCart: {
        color: '#772CE8',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
        paddingTop: 10,

    },
    globalMargin: {
        marginVertical: 30
    },
    text: {
        // fontFamily: 'Roboto', 
        fontSize: 19,
        top: 100,
        color: '#5C5E64'
    },
    subtotalCard: {
        top: -80,
        marginHorizontal: 10,
        height: 50,
        width: '95%',
        borderRadius: 5,
        elevation: 1,
        shadowColor: '#000',
        shadowRadius: 7,
        backgroundColor: 'white',

        shadowOffset: {
            width: 0,
            height: 2,
        },

    },
    subtotal: {
        //borderRadius: 5, 
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F7F7F7',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        justifyContent: 'center'
    },
    subtotalText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#5C5E64',
        fontWeight: 'bold'
    },
    buyCard: {
        top: -60,
        marginHorizontal: 10,
        height: 50,
        width: 240,
        borderRadius: 15,
        elevation: 1,
        shadowColor: '#772CE8',
        shadowRadius: 7,
        backgroundColor: 'white',
        borderColor: '#772CE8',
        borderWidth: 1,
        justifyContent: 'center',

        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    buyButtom: {
        shadowColor: '#772CE8',
        opacity: 1,


    },
    textBuyBottom: {
        textAlign: 'center',
        fontSize: 18,
        color: '#772CE8',
        fontWeight: 'bold'
    },
    subtotalBuyCard: {
        width: '100%',
        height: '20%',
        top: 70,
        justifyContent: 'center',
        alignItems: 'center'
    }
});