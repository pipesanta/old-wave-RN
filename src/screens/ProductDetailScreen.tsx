import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useProductDetail } from '../hooks/useProductDetail';
import { ProductsStackParams } from '../navigator/ProductsNavigator'
import { ProductDetail } from '../components/product-detail/ProductDetail';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductDetailScreen'> { };



export const ProductDetailScreen = ({ route }: Props) => {
    const { top, left } = useSafeAreaInsets();
    const { id } = route.params;

    const { isLoading, productFull } = useProductDetail(1);
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