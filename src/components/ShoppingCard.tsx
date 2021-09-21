import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Dimensions} from 'react-native';
import {ShoppingCartItem, ShoppingCartProductItem} from '../interfaces/appInterfaces';
import currencyFormatter from 'currency-formatter';

const windowWidth = Dimensions.get('window').width;

interface Props{
    // ShoppingCartProductItem: any, 
    // ShoppingCartItem: any, 
    product: ShoppingCartProductItem, 
    // products: ShoppingCartItem
}

export const ShoppingCard = ({  product}: Props) =>{
    return(
       <View>
        <TouchableOpacity
                style={{ backgroundColor: 'white' }}>
                <View style={{
                    ...styles.cardContainer,
                    width: windowWidth * 0.4,
                }}>
                    <View style={styles.cardContent}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{ uri: 'https://http2.mlstatic.com/D_684803-MLA44155935502_112020-O.jpg' }}
                                style={styles.image}
                                resizeMode='contain'
                            />
                        </View>
                        <View style={styles.detailContainer}>

                            <View style={styles.detailContent} >

                                <Text style={styles.name}> {product.name} </Text>
                                <Text style={styles.priceAndBrand}> Apple </Text>
                                <Text style={styles.priceAndBrand}> {currencyFormatter.format(product.unitPrice, { code: 'COP', precision: 0 })}</Text>
                            </View>
                        <View style={styles.cardQuantity}>
                            <Text>Cantidad: </Text>
                            <TouchableOpacity style={styles.quantity} 
                                //  onPress= { () => setQuantity( quantity + 1 )}
                            ><Text style={styles.textQuantityButton}> + </Text>
                            </TouchableOpacity>
                            <Text style={styles.numberQuantity}>{product.id}</Text>
                            <TouchableOpacity style={styles.quantity} 
                                //  onPress= { () => setQuantity( quantity - 1 )}
                            ><Text style={styles.textQuantityButton}> - </Text>
                            </TouchableOpacity>
                        </View>
                            
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 300,
        width: 160,
        borderRadius: 5,
        marginBottom: 25,
        shadowColor: "#000",
        shadowRadius: 7,
        elevation: 1,
        top: 50,

        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    cardContent: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F7F7F7',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    name: {
        color: '#5C5E64',
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: "center",
        paddingTop: 10
    },
    imageContainer: {
        width: '100%',
        height: '58%',
        marginTop: 1,
        flex: 1,
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'relative',
    },
    detailContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    detailContent: {
        height: '100%',
        paddingHorizontal: 20,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    brand: {
        fontSize: 12,
        color: '#772CE8',
        fontWeight: '600',
        position: 'absolute',
        top: 200,
        textAlign: 'center'

    },
    image: {
        width: '80',
        height: '80',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        flex: 1
    },
    priceAndBrand: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#772CE8',
        textAlign: "center"
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
        marginVertical: 15
    },
    textQuantityButton: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold', 
        textAlign: 'center'
    }, 
    cardQuantity:{
        flexDirection: 'row', 
        alignContent: 'center'
    }, 
    numberQuantity: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#772CE8',
        textAlign: "center"
    },

})