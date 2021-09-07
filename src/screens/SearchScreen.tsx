import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ProductsStackParams } from '../navigator/ProductsNavigator'

interface Props extends StackScreenProps<ProductsStackParams, 'SearchScreen'>{};

export const SearchScreen = ({ navigation }: Props) => {

    const products = [
        {
            "id": "1",
            "name": "Celular"
        },
        {
            "id": "2",
            "name": "Tennis"
        }
    ]

    //Esto lo pongo para proteger cuando hay celulares con Notch (Como el mío, de Guti)
    const { top }= useSafeAreaInsets();

    return (
        <View style={{ flex: 1, top: top}}>
            {/* <Text>Search Screenss</Text> */}
            <FlatList
                data={products}
                keyExtractor={(p) => p.id}
                renderItem={ ({item}) => (
                    <TouchableOpacity
                        onPress={ () => navigation.navigate('ProductDetailScreen', {
                            id: item.id
                        }) }
                    >
                        <Text>{ item.name }</Text>
                    </TouchableOpacity>
                    
                )}

                ItemSeparatorComponent={ () => (
                    <View style={styles.itemSeparator} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    itemSeparator:{
        marginVertical: 0
    }
});