import React, { useContext } from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Image } from 'react-native';
import currencyFormatter from 'currency-formatter';

import { ShoppingCartItem} from '../interfaces/appInterfaces';
import { ShoppingCartContext } from '../context/CartContext';
import { Icon } from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


interface Props {
    product: ShoppingCartItem,
    onAddToCart?: () => void;
    onSubstractFromCart: () => void;
}


export const ShoppingCard = ({ product, onAddToCart, onSubstractFromCart }: Props) => {

    const {
        removeItemFromCart
    } = useContext(ShoppingCartContext);

    return (
        <View>
            <View style={{ backgroundColor: 'white' }}>

                <View style={{
                    ...styles.cardContainer,
                    width: windowWidth * 0.9,
                    height: windowHeight * 0.15
                }}>
                    <View style={styles.cardContent}>
                        <View style={styles.detailContainer}>
                            <View style={styles.imageContainer}>
                                <Image
                                    source={{ uri: product.item.image }}
                                    style={styles.image}
                                    resizeMode='contain'
                                />
                            </View>
                            <View style={styles.detailContent}>
                                <Text style={styles.name}> {product.item.name}</Text>
                                <Text style={styles.price}>  {currencyFormatter.format(product.item.unitPrice, { code: 'COP', precision: 0 })}  </Text>
                            </View>
                            <View style={styles.cardQuantity}>
                                <TouchableOpacity style={styles.quantity}
                                    onPress={onSubstractFromCart}
                                ><Text style={styles.textQuantityButton}> - </Text>
                                </TouchableOpacity>
                                <Text style={styles.numberQuantity}>  {product.quantity}  </Text>
                                <TouchableOpacity style={styles.quantity}
                                    onPress={onAddToCart}
                                ><Text style={styles.textQuantityButton}> + </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                    <TouchableOpacity style={{position:"absolute", top:10, right:10}} onPress= {removeItemFromCart.bind(this, product.item.id)}>
                    <Icon name='close' type='ionicon' color='#5C5E64' size={19} />
                    </TouchableOpacity>



                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 100,
        maxWidth: 380,
        borderRadius: 5,
        elevation: 1,
        shadowColor: '#000',
        shadowRadius: 7,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',

        shadowOffset: {
            width: 0,
            height: 2,
        },

    },
    cardContent: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F7F7F7',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    imageContainer: {
        height: 100,
        maxWidth: 80,
        flex: 1,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
        backgroundColor: 'white',
        position: 'relative',
        marginTop: 1,
        alignContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: 'contain',
    },
    detailContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 10

    },
    detailContent: {
        height: 100,
        paddingHorizontal: 5,
        paddingVertical: 20,
        flex: 1,
        flexDirection: 'column',
        alignItems: "flex-start",      
        justifyContent: 'space-between'
    },
    name: {
        color: '#5C5E64',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: "left",
    },
    price: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#772CE8',
        textAlign: 'center',
        borderColor: '#772CE8',
        borderRadius: 5,
        borderWidth: 1
    },
    cardQuantity: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80
    },
    quantity: {
        backgroundColor: '#7444FB',
        paddingVertical: 4,
        borderRadius: 20,
        paddingHorizontal: 6,
        shadowColor: "#000",
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 4,
        marginVertical: 15,
        alignItems: 'center',

        //top: -20
    },
    textQuantityButton: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    numberQuantity: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#772CE8',
        textAlign: "center"
    },

})