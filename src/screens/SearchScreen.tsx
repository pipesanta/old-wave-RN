import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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

    return (
        <View style={{ flex: 1, marginHorizontal: 20, marginVertical:20 }}>
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
        marginVertical: 15
    }
});