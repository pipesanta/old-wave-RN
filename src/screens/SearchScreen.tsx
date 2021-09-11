import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ProductCard } from '../components/ProductCard'
import { SearchInput } from '../components/SearchInput'
import { ProductsContext } from '../context/ProductsContext';
import { ShoppingCartContext } from '../context/CartContext';
import { ProductsStackParams } from '../navigator/ProductsNavigator'
import { SimpleProduct } from '../interfaces/productInterfaces'

interface Props extends StackScreenProps<ProductsStackParams, 'SearchScreen'> { };

export const SearchScreen = ({ navigation }: Props) => {

    const { products, loadProducts } = useContext(ProductsContext);
    const {
        productList,
        totalPrice,
        addItemToCart,
        removeItemFromCart,
        loadProducts: loadProductsForShoppingCart
    } = useContext(ShoppingCartContext);

    //Esto lo pongo para proteger cuando hay celulares con Notch (Como el mío, de Guti)
    const { top } = useSafeAreaInsets();

    function goToDetail(id: string): void {
        navigation.navigate('ProductDetailScreen', { id });
    }

    function onAddItemTocart(item: SimpleProduct) {
        addItemToCart({
            price: item.precio,
            quantity: 1,
            selected: false,
            item: {
                id: item.id,
                name: item.nombre,
                unitPrice: item.precio
            }
        })
    }

    function goToShoppingCart() {
        navigation.navigate('ShoppingCartScreen')
    }


    return (
        <View style={{ flex: 1, top: top }}>
            <SearchInput onValueChanges={loadProducts} />

            <TouchableOpacity
                onPress={goToShoppingCart}>
                <Text style={{ fontSize: 14, backgroundColor: 'blue' }}> IR AL CARRO </Text>
            </TouchableOpacity>


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
                        <ProductCard
                            product={item}
                            onClick={goToDetail.bind(this)}
                            onAddToCart={onAddItemTocart.bind(this, item)}
                            onDeleteFromCart={removeItemFromCart.bind(this, item.id)}
                        />
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