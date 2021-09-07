import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProductsStackParams } from '../navigator/ProductsNavigator'

interface Props extends StackScreenProps<ProductsStackParams, 'ProductDetailScreen'>{};


export const ProductDetailScreen = ({ route }: Props) => {

    const { id } = route.params;
    return (
        <View style={ styles.container }>
            <Text>El id del producto es {id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 30
    }
});