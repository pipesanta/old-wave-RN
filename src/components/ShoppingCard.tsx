import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Image } from 'react-native';
import currencyFormatter from 'currency-formatter';

import {ShoppingCartProductItem} from '../interfaces/appInterfaces';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


interface Props {
    product: ShoppingCartProductItem
}


export const ShoppingCard = ({product}: Props) => {
    return(
        <View>
            <View style={{ backgroundColor: 'white'}}>
               
                <View style={{
                    ...styles.cardContainer, 
                    width: windowWidth * 0.9, 
                   height: windowHeight * 0.15
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
                            <Text style={styles.name}> {product.name}</Text>
                            <Text style={styles.price}>  {currencyFormatter.format(product.unitPrice, { code: 'COP', precision: 0 })}  </Text>
                        </View>
                        <View style={styles.cardQuantity}>
                                <TouchableOpacity style={styles.quantity} 
                                //  onPress= { () => setQuantity( quantity + 1 )}
                                ><Text style={styles.textQuantityButton}> + </Text>
                                </TouchableOpacity>
                                <Text style={styles.numberQuantity}>  {product.id}  </Text>
                                <TouchableOpacity style={styles.quantity} 
                                //  onPress= { () => setQuantity( quantity - 1 )}
                                ><Text style={styles.textQuantityButton}> - </Text>
                                </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
             
                        
                     
                </View>
            </View>
           
        </View>
    )
}

const styles= StyleSheet.create({
    cardContainer:{
        marginHorizontal: 10,
        height: 100, 
        maxWidth: 380,
        borderRadius: 5, 
        elevation :1, 
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
    cardContent:{
        flex: 1, 
        flexDirection: 'row', 
        backgroundColor: '#F7F7F7', 
        borderTopLeftRadius: 5, 
        borderTopRightRadius: 5
    }, 
    imageContainer:{ 
        height: 80,
        maxWidth: 80,
        top: 15,
        left: 10, 
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
    image:{
        width: '60%', 
        height: '60%', 
        flex: 1, 
        borderTopLeftRadius: 5, 
        borderTopRightRadius: 5, 
        resizeMode: 'contain'
    }, 
    detailContainer:{
        flex: 1, 
        alignItems: 'center', 
        flexDirection: 'row', 
        justifyContent: 'center'

    }, 
    detailContent: {
        height: 100, 
        paddingHorizontal: 20, 
        flex: 1, 
        flexDirection: 'column', 
        alignItems: 'center', 
        //justifyContent: 'space-between'
    }, 
    name:{
        color: '#5C5E64', 
        fontSize: 13, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        top: 20, 
        left: -20
    }, 
    price:{
        fontWeight: 'bold', 
        fontSize: 9, 
        color: '#772CE8', 
        textAlign: 'center', 
        top: 25,
        left: -20, 
        borderColor: '#772CE8', 
        borderRadius: 5, 
        borderWidth: 1
    }, 
    cardQuantity:{
        flexDirection: 'row', 
        alignContent: 'center', 
        alignItems: 'center', 
        left: -30, 
        top: -10
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
        marginVertical: 15, 
        alignItems: 'center', 
        
        //top: -20
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
    }, 
    
})