import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { ListProductsStackParams} from '../navigator/ListProductNavigator';
import { FlatList } from 'react-native-gesture-handler';
import {ProductDetailScreen} from '../screens/ProductDetailScreen';
import { ProductCard } from '../components/ProductCard';


interface Props extends StackScreenProps<ListProductsStackParams, 'ListProductScreen'>{};
    

export const ListProductScreen = ({navigation} : Props ) =>{
    const product=[
    
        {
           "id" : "3",
           "nombre" : "Iphone 12", 
           "marca" : "Apple", 
           "urlFoto": "https://picsum.photos/100/130", 
           "ciudad": "Medellin", 
           "precio" : 3000000, 
           "seller" : "net", 
           "rating": 4
        }, 
        {
            "id" : "4",
            "nombre" : "Smartwatch", 
            "marca" : "Apple", 
            "urlFoto": "https://picsum.photos/200/250", 
            "ciudad": "Sabaneta", 
            "precio" : 300000, 
            "seller" : "net2", 
            "rating": 3
        }, 
        {
            "id" : "5",
            "nombre" : "Smartwatch", 
            "marca" : "Apple", 
            "urlFoto": "https://picsum.photos/200/250", 
            "ciudad": "Sabaneta", 
            "precio" : 300000, 
            "seller" : "net2", 
            "rating": 3
        }, 
        {
            "id" : "6",
            "nombre" : "Iphone 12", 
            "marca" : "Apple", 
            "urlFoto": "https://picsum.photos/100/130", 
            "ciudad": "Medellin", 
            "precio" : 3000000, 
            "seller" : "net", 
            "rating": 4
         }, 
         {
            "id" : "7",
            "nombre" : "Smartwatch", 
            "marca" : "Apple", 
            "urlFoto": "https://picsum.photos/200/250", 
            "ciudad": "Sabaneta", 
            "precio" : 300000, 
            "seller" : "net2", 
            "rating": 3
        }, 
        {
            "id" : "8",
            "nombre" : "Iphone 12", 
            "marca" : "Apple", 
            "urlFoto": "https://picsum.photos/100/130", 
            "ciudad": "Medellin", 
            "precio" : 3000000, 
            "seller" : "net", 
            "rating": 4
         }, 
    
    
    
    
    ]



    return(
        <View >
            {/* <Text style = {styles.text}>List Product</Text> */}
            <View style={{
                ...styles.globalMargin,
                alignItems: 'center'
            }}>
            <FlatList
            data={product}
            keyExtractor={(p) => p.id}
            numColumns={2}
            ListHeaderComponent={(
                <Text style={{
                    ...styles.text,
                    ...styles.globalMargin, 
                    top: 10, 
                }}> Lista productos </Text>
            )}

            renderItem={ ({item}) => ( <ProductCard product= {item}/>    )}
            ItemSeparatorComponent={ () => (
                <View style={styles.globalMargin} />
            )}
        /></View>
        </View>
    )
}

const styles = StyleSheet.create({
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