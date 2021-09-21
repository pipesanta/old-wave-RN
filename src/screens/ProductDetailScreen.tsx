import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { useProductDetail } from '../hooks/useProductDetail';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Product } from '../interfaces/appInterfaces';
import { ProductsStackParams } from '../navigator/ProductsNavigator';
import { ProductDetail } from '../components/product-detail/ProductDetail';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductDetailScreen'> { };


export const ProductDetailScreen = ({ route }: Props) => {
    const { top, left } = useSafeAreaInsets();
    const { id } = route.params;

    const { isLoading, productDetail } = useProductDetail(id);

    return (
        <>

            {
                isLoading
                    ? <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }} />
                    : <ProductDetail productFull={productDetail!}/>
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