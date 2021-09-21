import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Image } from 'react-native';
import currencyFormatter from 'currency-formatter';

import {ShoppingCartProductItem} from '../interfaces/appInterfaces';

const windowWidth = Dimensions.get('window').width;


interface Props {
    product: ShoppingCartProductItem
}


export const ShoppingCard = ({product}: Props) => {
    return(
        <View>
            <TouchableOpacity style={{ backgroundColor: 'white'}}>
                <View style={{
                    ...styles.cardContainer, 
                    width: windowWidth * 0.9
                }}>
                <View style={styles.cardContent}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: 'https://http2.mlstatic.com/D_684803-MLA44155935502_112020-O.jpg' }}
                            style= {styles.image}
                            resizeMode= 'contain'
                        />
                    </View>
                    <View style={styles.detailContainer}>
                        <View style= {styles.detailContent}>
                            <Text style={styles.name}> Nombre:  {product.name}</Text>
                            <Text style={styles.price}> Precio: {currencyFormatter.format(product.unitPrice, { code: 'COP', precision: 0 })}</Text>
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

const styles= StyleSheet.create({
    cardContainer:{
        marginHorizontal: 10,
        height: 100, 
        width: 10, 
        borderRadius: 5, 
        elevation :1, 
        shadowColor: '#000', 
        shadowRadius: 7,
        backgroundColor: 'white',

      
    }, 
    cardContent:{
        flex: 1, 
        flexDirection: 'column', 
        backgroundColor: '#F7F7F7', 
        borderTopLeftRadius: 5, 
        borderBottomRightRadius: 5
    }, 
    imageContainer:{
        width: '20%',  
        height: 20,
        flex: 1, 
        overflow: 'hidden', 
        alignItems: 'center', 
        backgroundColor: 'white', 
        position: 'relative'

    }, 
    image:{
        width: 80, 
        height: 80, 
        flex: 1, 
        borderTopLeftRadius: 5, 
        borderBottomRightRadius: 5
    }, 
    detailContainer:{
        flex: 1, 
        alignItems: 'center', 
        flexDirection: 'column', 

    }, 
    detailContent: {
        height: 100, 
        paddingHorizontal: 20, 
        flex: 1, 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    }, 
    name:{
        color: '#5C5E64', 
        fontSize: 13, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        paddingTop: 10
    }, 
    price:{
        fontWeight: 'bold', 
        fontSize: 14, 
        color: '#772CE8', 
        textAlign: 'center'
    }, 
    cardQuantity:{
        flexDirection: 'row', 
        alignContent: 'center'
    }, 
    quantity:{
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
    textQuantityButton:{
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold', 
        textAlign: 'center'
    }, 
    numberQuantity:{
        fontWeight: 'bold',
        fontSize: 14,
        color: '#772CE8',
        textAlign: "center"
    }
})