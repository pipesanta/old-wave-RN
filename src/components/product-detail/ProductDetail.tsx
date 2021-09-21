import React, { useState } from 'react'
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import currencyFormatter from 'currency-formatter';
import { CarouselImages } from './CarouselImages'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements'
import { ItemDetail } from './ItemDetail'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ShoppingCartScreen } from '../../screens/ShoppingCartScreen';
import { SimpleProduct } from '../../interfaces/productInterfaces';


const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

interface Props {
    productFull: any;
  
}


export const ProductDetail = ({ productFull}: Props) => {
    const {top} = useSafeAreaInsets();
    const navigation = useNavigation();
    const [activeSlide, setActiveSlide] = useState(0);



    return (
        <>            
            <ScrollView>
                <View style={{...styles.backButton, top: top+10}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back-outline' type='ionicon' color='#5C5E64' size={40} />
                    </TouchableOpacity>
                </View>

                <View style={styles.imageContainer}>
                    <View style={styles.imageBorder}>
                        <CarouselImages
                            images={productFull.urlFotos}
                            height={screenHeight * 0.55}
                            width={screenWidth}
                            activeSlide={activeSlide}
                            setActiveSlide={setActiveSlide} />
                    </View>
                </View>

                <View style={{ ...styles.marginContainer, ...styles.locationContainer }}>
                    {/* <Text style={styles.subTitle}>{productFull.ciudad}</Text> */}
                    <Icon name='location-outline' type='ionicon' color='#000' />
                    <Text style={{ ...styles.subTitle }}> Medellín</Text>
                </View>

                <View style={{ ...styles.marginContainer, marginTop: 0 }}>
                    <Text style={styles.title}>{productFull.nombre}</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.textRating}>{productFull.rating}</Text>
                        <Icon name='star' type='ionicon' color='#F1AE08' size={15} />
                    </View>
                </View>
                <ItemDetail title={'MARCA'} content={'Apple'} />
                <ItemDetail title={'DESCRIPCION'} content={productFull.descripcion} />
                <ItemDetail title={'VENDEDOR'} content={''} reseller={productFull.reseller} />
            </ScrollView>

            <View style={styles.priceContainer} >
                <View style={styles.subcontainerPrice}>
                    <Text style={styles.textPrice}>
                        {currencyFormatter.format(productFull.precio, { code: 'COP', precision: 0 })}
                    </Text>
                    <Text style={styles.subtextPrice}>
                        hasta 1x de {currencyFormatter.format(productFull.precio, { code: 'COP', precision: 0 })}
                    </Text>
                </View>
                <View style={ styles.actionsContainer}>
                    <TouchableOpacity style={styles.buyButton} >
                        <Text style={styles.textBuyButton}>
                            COMPRAR
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addCardButton} >
                        <Icon name='cart-outline' type='ionicon' color='#fff' size={25} />
                    </TouchableOpacity>

                </View>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        alignSelf: 'center',
        width: '100%',
        height: screenHeight * 0.55,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        elevation: 9,
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
    },
    posterImage: {
        flex: 1,

    },
    marginContainer: {
        marginHorizontal: 20,
        margin: 20
    },
    locationContainer: {
        marginBottom: 0,
        flexDirection: "row",
        paddingVertical: 4
    },
    ratingContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    subTitle: {
        color: '#5C5E64',
        fontSize: 16,
        opacity: 0.8
    },
    title: {
        color: '#5C5E64',
        fontSize: 20,
        fontWeight: 'bold'
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        left: 5
    },
    textRating: {
        color: '#5C5E64',
        fontSize: 18
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: 'white',
        height: 'auto',
        shadowColor: "#000",
        shadowRadius: 7,
        elevation: 10,
        padding: 15,
    },
    actionsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center"
    },
    subcontainerPrice: {
        flex: 1,
        flexDirection: "column"
    },
    textPrice: {
        fontSize: 18,
        color: '#32D1F7',
        fontWeight: "bold"
    },
    subtextPrice: {
        fontSize: 10,
    },
    buyButton: {
        // backgroundColor: '#32D1F7',
        backgroundColor: '#7444FB',
        paddingVertical: 6,
        borderRadius: 3,
        paddingHorizontal: 25,
        shadowColor: "#000",
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 4,
    },
    addCardButton: {
        // backgroundColor: '#32D1F7',
        backgroundColor: '#7444FB',
        paddingVertical: 6,
        borderRadius: 100,
        paddingHorizontal: 10,
        shadowColor: "#000",
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 4,
        marginHorizontal: 5
    },
    textBuyButton: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    }
});