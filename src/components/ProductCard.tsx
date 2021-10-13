import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import currencyFormatter from 'currency-formatter';
import { Icon } from 'react-native-elements';
import { APIKeysEnum } from '../api/ApiEnums';

const windowWidth = Dimensions.get('window').width;

interface Props {
    product: any,
    onClick: (id: string, sellerKey: string) => void;
    onAddToCart?: () => void;
}

export const ProductCard = ({ product, onClick, onAddToCart }: Props) => {
    let colorSeller = '#32D1F7';
    let textSeller = '';

    switch (product.sellerKey) {

        case APIKeysEnum.FAST:
            colorSeller = '#772CE8'
            textSeller = 'F'
            break;

        case APIKeysEnum.SPRING:
            colorSeller = '#7E41D8'
            textSeller = 'S'
            break;

        case APIKeysEnum.GRAPHQL:
            colorSeller = '#32D1F7'
            textSeller = 'G'
            break;

        case APIKeysEnum.FLASK:
            colorSeller = '#3B3B3B'
            textSeller = 'k'
            break;
    }

    return (
        <View>

            <View
                style={{ backgroundColor: 'white' }}>
                <View style={{
                    ...styles.cardContainer,
                    width: windowWidth * 0.4,
                }}>
                    <View style={styles.cardContent}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{ uri: product.thumbnail }}
                                style={styles.image}
                                resizeMode='contain'
                            />
                        </View>
                        <View style={styles.detailContainer}>

                            <View style={styles.detailContent} >
                                <TouchableOpacity onPress={onClick.bind(this, product.id, product.sellerKey)} style={styles.detailButtonContent}>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between', width: '100%' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start' }}>
                                            <Icon name='location-outline' type='ionicon' color='#000' size={15} />
                                            <Text style={{ ...styles.city }}> {product.city?.name}</Text>
                                        </View>
                                        <View style={{ flex: 1 }}></View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start' }}>
                                            <Text style={{ ...styles.city }}>{product.rating} </Text>
                                            <Icon name='star' type='ionicon' color='#F1AE08' size={15} />
                                        </View>
                                    </View>
                                    <Text style={styles.name} numberOfLines={2}
                                        adjustsFontSizeToFit > {product.name} </Text>
                                    <Text style={styles.priceAndBrand}> {product.brand} </Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <View style={{ ...styles.fabCounter, backgroundColor: colorSeller }}>
                                            <Text style={styles.textFabCounter}>
                                                {textSeller}
                                            </Text>

                                        </View>
                                        <Text style={styles.priceAndBrand}> {currencyFormatter.format(product.price, { code: 'COP', precision: 0 })}</Text>
                                    </View>

                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity testID={"add_to_cart_text"} style={styles.addCartButton} onPress={onAddToCart}>
                                <Text style={styles.textBuyButton}>
                                    Agregar al carrito
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


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
        paddingTop: 5
    },
    city: {
        color: '#5C5E64',
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: "right",
        paddingTop: 5
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
    detailButtonContent: {
        height: '100%',
        width: '100%',
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
        marginVertical: 9
    },
    textBuyButton: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold'
    },
    fabCounter: {
        height: 15,
        width: 15,
        borderRadius: 15,
        alignItems: "center",
        zIndex: 2000
    },
    textFabCounter: {
        color: '#F4F6FA',
        fontWeight: 'bold',
        fontSize: 10
    }

})