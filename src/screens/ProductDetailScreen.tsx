import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ProductsStackParams } from '../navigator/ProductsNavigator'

interface Props extends StackScreenProps<ProductsStackParams, 'ProductDetailScreen'>{};


export const ProductDetailScreen = ({ route }: Props) => {

    //Esto lo pongo para proteger cuando hay celulares con Notch (Como el mío, de Guti)
    const { top }= useSafeAreaInsets();

    const { id } = route.params;
    return (
        <View style={{ top: top }}>
            <Text>El id del producto es {id}</Text>
        </View>
    )
}
