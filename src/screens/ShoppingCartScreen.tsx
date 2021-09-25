
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useContext} from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../navigator/ProductsNavigator';
import { ShoppingCartContext } from '../context/CartContext';
import { Header } from '../components/Header';
import currencyFormatter from 'currency-formatter';
import { ShoppingCard } from '../components/ShoppingCard';
import { ShoppingCartItem} from '../interfaces/appInterfaces';


interface Props extends StackScreenProps<ProductsStackParams, 'ShoppingCartScreen'> { };



export const ShoppingCartScreen = ({ route }: Props) => {
    const { top, left } = useSafeAreaInsets();

    function onAddItemTocart(item: ShoppingCartItem) {
        addItemToCart({
            price: item.item.unitPrice,
            quantity: 1,
            selected: false,
            item: {
                id: item.item.id,
                name: item.item.name,
                unitPrice: item.item.unitPrice,
                image: item.item.image
            }
        })
    }

    function onSubstractItemTocart(item: ShoppingCartItem) {
        substractFromCart({
            price: item.item.unitPrice,
            quantity: 1,
            selected: false,
            item: {
                id: item.item.id,
                name: item.item.name,
                unitPrice: item.item.unitPrice,
                image: item.item.image
            }
        })
    }

    const {
        productList,
        totalPrice,
        addItemToCart,
        substractFromCart
    } = useContext(ShoppingCartContext);


    return (
        <View style={{...styles.cardContainer, marginTop:top}}>
            <View style={styles.shoppingCard}>
                <Header goToShoppingCart={() => {
                    // TODO
                    // esto que hace? ?
                }} />
                <FlatList
                    data={productList}
                    keyExtractor={(p) => p.item.id}
                    numColumns={1}
                    ListHeaderComponent={(
                        <Text style={{
                            ...styles.shoppingCart
                        }}> Carrito de compras </Text>

                    )}
                    renderItem={({ item }) => (
                        <ShoppingCard product={item} onAddToCart={onAddItemTocart.bind(this, item)} onSubstractFromCart={onSubstractItemTocart.bind(this, item)} />
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={{ height: 10 }} />
                    )}
                />
            </View>
            <View style={styles.subtotalBuyCard}>


                <View style={styles.subtotalCard}>
                    <View style={styles.subtotal}>
                        <Text style={styles.subtotalText}> SUBTOTAL: </Text>
                        <Text style={styles.subtotalText}>{currencyFormatter.format(totalPrice, { code: 'COP', precision: 0 })}</Text>
                    </View>
                </View>
                <View style={styles.buyCard}>
                    <TouchableOpacity style={styles.buyButtom}>
                        <Text style={styles.textBuyBottom}> Ir al pago </Text>
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
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: "left",
        paddingVertical: 10,

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
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
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