import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ProductCard } from '../components/ProductCard'
import { SearchInput } from '../components/SearchInput'
import { ProductsContext } from '../context/ProductsContext'
import { ProductsStackParams } from '../navigator/ProductsNavigator'

interface Props extends StackScreenProps<ProductsStackParams, 'SearchScreen'> { };

export const SearchScreen = ({ navigation }: Props) => {

    const { products, loadProducts } = useContext(ProductsContext);

    //Esto lo pongo para proteger cuando hay celulares con Notch (Como el mío, de Guti)
    const { top } = useSafeAreaInsets();

    function goToDetail(id: string): void {
        navigation.navigate('ProductDetailScreen', { id });
    }

    return (
        <View style={{ flex: 1, top: top }}>
            <SearchInput onValueChanges={loadProducts} />

            {/* <Text>Search Screenss</Text> */}
            <View style={{
                ...styles.globalMargin,
                alignItems: 'center'
            }}>
                <FlatList
                    data={products}
                    keyExtractor={(p) => p.id}
                    numColumns={2}
                    ListHeaderComponent={(
                        <Text style={{
                            ...styles.text,
                            ...styles.globalMargin,
                            top: 10,
                        }}> Lista productos </Text>
                    )}
                    renderItem={({ item }) => (
                        <ProductCard product={item} onClick={goToDetail.bind(this)} />

                    )}
                    ItemSeparatorComponent={() => (
                        <View style={styles.itemSeparator} />
                    )}
                />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    itemSeparator: {
        marginVertical: 0
    },
    globalMargin: {
        marginVertical: 30
    },
    text: {
        // fontFamily: 'Roboto', 
        fontSize: 19,
        top: 100,
        color: '#5C5E64'
    }
});