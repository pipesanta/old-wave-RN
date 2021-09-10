import { StackScreenProps } from '@react-navigation/stack'
import { Image, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { useProductDetail } from '../hooks/useProductDetail';
import React, { useContext, useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ProductsContext } from '../context/ProductsContext'
import { Product } from '../interfaces/appInterfaces'
import { ProductsStackParams } from '../navigator/ProductsNavigator'
import { ProductDetail } from '../components/product-detail/ProductDetail';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductDetailScreen'> { };



export const ProductDetailScreen = ({ route }: Props) => {
    const { top, left } = useSafeAreaInsets();
    const { id } = route.params;

    const { isLoading, productFull } = useProductDetail(1);

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

    // useEffect(() => {
    //     loadProduct();
    // }, [])

    // const loadProduct = async() => {
    //     if ( id.length === 0 ) return;
    //     const product = await loadProductById( id );
    //     setproduct(product);   
    // }
    return (
        <>
            
            {
                isLoading
                    ? <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }} />
                    : <ProductDetail productFull={productFull!} />
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    pokebolaBG: {
        width: 300,
        height: 300,
        alignSelf: "center"
    }
});