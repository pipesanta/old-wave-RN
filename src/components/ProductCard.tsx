import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SimpleProduct } from '../interfaces/productInterfaces';
import { useFonts, Poppins_500Medium} from '@expo-google-fonts/poppins';



const windowWidth = Dimensions.get('window').width;

interface Props {
    product: SimpleProduct
}

export const ProductCard = ({product} : Props) =>{


    return(
        <TouchableOpacity
        activeOpacity= {0.9}>
            <View style ={{
                ...styles.cardContainter
            }}>
                 
                <View>
                    <Image
                    source={{uri: product.urlFoto}}
                    style= {styles.image}
                    /> 
                </View>
                <View >
                    <Text style={styles.name}> {product.nombre} </Text>
                    <Text style= {styles.brand}> {'\n' + product.marca}</Text>
                    <Text style= {styles.price}> {'\n' + product.precio}</Text>
                </View>
               
                
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainter:{
        marginHorizontal: 20, 
        borderColor: 'black',
        borderWidth: 1,
        height: 250, 
        width: 140, 
        marginBottom: 25, 
        borderRadius: 5, 
        alignItems: 'center', 
        flex:1, 
        textAlign: 'center'
    }, 
    name:{
        color: '#3B3B3B', 
        //fontFamily: ' Roboto', 
        fontSize: 13, 
        fontWeight: 'normal', 
        position: 'absolute', 
        top: 200, 
    
    }, 
    brand:{
      //  fontFamily: ' Roboto', 
        fontSize: 12, 
        color: '#772CE8',
        fontWeight: '600', 
        position: 'absolute', 
        top: 200, 
        textAlign: 'center'
       
    },
    image:{
        width: 120, 
        height: 200, 
        position: 'absolute', 
        bottom: -200, 
        right: -60, 
        borderRadius: 5
    }, 
    price:{
       // fontFamily: ' Roboto', 
        fontWeight: 'bold', 
        fontSize: 14, 
        color: '#772CE8', 
        top: 210
    }
    
})