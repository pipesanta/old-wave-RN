import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SimpleProduct } from '../interfaces/productInterfaces';
import currencyFormatter from 'currency-formatter';

const windowWidth = Dimensions.get('window').width;

interface Props {
    product: SimpleProduct,
    onClick: (id: string) => void;
    onAddToCart?: () => void;
    onDeleteFromCart?: () => void;
}

export const ProductCard = ({ product, onClick, onAddToCart, onDeleteFromCart }: Props) => {


    return (
        <View>

            <TouchableOpacity
                onPress={onClick.bind(this, product.id)}
                activeOpacity={0.9}
                style={{ backgroundColor: 'white' }}>
                <View style={{
                    ...styles.cardContainer,
                    width: windowWidth * 0.4,
                }}>
                    <View style={styles.cardContent}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{ uri: 'https://http2.mlstatic.com/D_684803-MLA44155935502_112020-O.jpg' }}
                                style={styles.image}
                                resizeMode='contain'
                            />
                        </View>
                        <View style={styles.detailContainer}>

                            <View style={styles.detailContent} >

                                <Text style={styles.name}> {product.nombre} </Text>
                                <Text style={styles.priceAndBrand}> Apple </Text>
                                <Text style={styles.priceAndBrand}> {currencyFormatter.format(product.precio, { code: 'COP', precision: 0 })}</Text>
                            </View>
                            <TouchableOpacity style={styles.addCartButton}>
                                <Text style={styles.textBuyButton}>
                                    Agregar al carrito
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


            </TouchableOpacity>
            <View >
                <TouchableOpacity onPress={onAddToCart}>
                    <Text style={{ fontSize: 14, backgroundColor: 'blue' }}> AÑADIR </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={onDeleteFromCart}>
                    <Text style={{ fontSize: 14, backgroundColor: 'red' }}> ELIMINAR </Text>
                </TouchableOpacity>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 300,
        width: 160,
        borderRadius: 5,
        marginBottom: 25,
        shadowColor: "#000",
        shadowRadius: 7,
        elevation: 1,

        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    cardContent: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F7F7F7',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    name: {
        color: '#5C5E64',
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: "center",
        paddingTop: 10
    },
    imageContainer: {
        width: '100%',
        height: '58%',
        marginTop: 1,
        flex: 1,
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'relative',
    },
    detailContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    detailContent: {
        height: '100%',
        paddingHorizontal: 20,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    brand: {
        fontSize: 12,
        color: '#772CE8',
        fontWeight: '600',
        position: 'absolute',
        top: 200,
        textAlign: 'center'

    },
    image: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        flex: 1
    },
    priceAndBrand: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#772CE8',
        textAlign: "center"
    },
    addCartButton: {
        backgroundColor: '#7444FB',
        paddingVertical: 6,
        borderRadius: 20,
        paddingHorizontal: 25,
        shadowColor: "#000",
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 4,
        marginVertical: 15
    },
    textBuyButton: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold'
    }

})