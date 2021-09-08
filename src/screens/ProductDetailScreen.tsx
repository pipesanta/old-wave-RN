import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProductsContext } from '../context/ProductsContext'
import { Product } from '../interfaces/appInterfaces'
import { ProductsStackParams } from '../navigator/ProductsNavigator'

interface Props extends StackScreenProps<ProductsStackParams, 'ProductDetailScreen'>{};


export const ProductDetailScreen = ({ route }: Props) => {

    const { id = '' } = route.params;

    const { loadProductById } = useContext( ProductsContext );

    const [product, setproduct] = useState<Product>({
        id:          '',
        nombre:      '',
        marca:       '',
        urlFoto:     '',
        ciudad:      '',
        precio:      NaN,
        seller:      '',
        rating:      NaN,
        urlFotos:    ['',''],
        reseller:    {
            nombre: '',
            urlLogo: ''
        },
        descripcion: ''
    })

    useEffect(() => {
        loadProduct();
    }, [])

    const loadProduct = async() => {
        if ( id.length === 0 ) return;
        const product = await loadProductById( id );
        setproduct(product);   
    }
    return (
        <View style={ styles.container }>
            <Text>El id del producto es {id}</Text>
            <Text>El nombre del producto es {product.nombre}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 30
    }
});