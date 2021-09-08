import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ProductsContext } from '../context/ProductsContext'
import { ProductsStackParams } from '../navigator/ProductsNavigator'

interface Props extends StackScreenProps<ProductsStackParams, 'SearchScreen'>{};

export const SearchScreen = ({ navigation }: Props) => {

    const { products } = useContext(ProductsContext);

    return (
        <View style={{ flex: 1, marginHorizontal: 20, marginVertical:20 }}>
            <FlatList
                data={products}
                keyExtractor={ (p) => p.id }
                renderItem={ ({item}) => (
                    <TouchableOpacity
                        onPress={ () => navigation.navigate('ProductDetailScreen', {
                            id: item.id
                        }) }
                    >
                        <Text>{ item.nombre }</Text>
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