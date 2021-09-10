import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SearchInput } from '../components/SearchInput'
import { ProductsContext } from '../context/ProductsContext'
import { ProductsStackParams } from '../navigator/ProductsNavigator'

interface Props extends StackScreenProps<ProductsStackParams, 'SearchScreen'> { };

export const SearchScreen = ({ navigation }: Props) => {

    const { products, loadProducts } = useContext(ProductsContext);

    //Esto lo pongo para proteger cuando hay celulares con Notch (Como el mío, de Guti)
    const { top } = useSafeAreaInsets();


    return (
        <View style={{ flex: 1, top: top }}>
            <SearchInput onValueChanges={loadProducts} />

            {/* <Text>Search Screenss</Text> */}
            <FlatList
                data={products}
                keyExtractor={(p) => p.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ProductDetailScreen', {
                            id: item.id
                        })}
                    >
                        <Text>{item.nombre}</Text>
                    </TouchableOpacity>
                )}
                ItemSeparatorComponent={() => (
                    <View style={styles.itemSeparator} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    itemSeparator: {
        marginVertical: 0
    }
});