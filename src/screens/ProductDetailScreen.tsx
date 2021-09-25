import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, ActivityIndicator, View, Text } from 'react-native';
import { useProductDetail } from '../hooks/useProductDetail';
import React, { useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ProductsStackParams } from '../navigator/ProductsNavigator';
import { ProductDetail } from '../components/product-detail/ProductDetail';
import { ShoppingCartContext } from '../context/CartContext';
import { CompleteProduct } from '../interfaces/appInterfaces';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductDetailScreen'> { };


export const ProductDetailScreen = ({ route, navigation }: Props) => {
    const { top, left } = useSafeAreaInsets();
    const { id, sellerKey } = route.params;

    function goToShoppingCart(item?: CompleteProduct) {
        if (item) {
            onAddItemTocart(item);
            navigation.navigate('ShoppingCartScreen')
        }

    }

    const { addItemToCart } = useContext(ShoppingCartContext);
    function onAddItemTocart(item: any) {
        addItemToCart({
            price: item.precio,
            quantity: 1,
            selected: false,
            item: {
                id: item.id,
                name: item.nombre,
                unitPrice: item.precio,
                image: item.pictures[0]
            }
        })
    }

    const { isLoading, productDetail } = useProductDetail(id, sellerKey);



    return (
        <>
            {isLoading && <ActivityIndicator size={35} color="grey" style={{ marginTop: top }} />}

            {(!isLoading && productDetail) && <ProductDetail
                productFull={productDetail!}
                onAddToCart={onAddItemTocart.bind(this, productDetail)}
                goToShoppingCart={goToShoppingCart.bind(this, productDetail)}
            />}

            {(!isLoading && !productDetail) && <View style={{ top: top + 10 }}>
                <Text style={{ color: 'red', fontSize: 50, textAlign: 'center', justifyContent: 'center' }}>
                    {'ERROR DEL SERVIDOR - '} {sellerKey}
                </Text>
            </View>}

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    }
});