import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ShoppingCartContext } from '../context/CartContext';

interface Props {
    goToShoppingCart: () => void;
}

export const Header = ({ goToShoppingCart }: Props) => {
    const navigation = useNavigation();

    const {
        totalProducts
    } = useContext(ShoppingCartContext);



    return (
        <View style={styles.header}>
            <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', marginLeft: 20 }}>

                <View style={styles.menu}>
                    <Icon name='menu' color='#772CE8' size={35} />
                </View>

                <View style={styles.icon}>
                    <Image
                        resizeMode="contain"
                        style={styles.oldwave}
                        source={require('../../assets/logo/oldwave-logo-horizontal.png')}
                    />
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', marginLeft: 20, justifyContent: 'flex-end' }}>
                <View style={styles.loginIcon}>
                    <TouchableOpacity >
                        <Image
                            source={require('../../assets/logo/login-icon.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.carIcon}>
                    <TouchableOpacity onPress={goToShoppingCart}>
                        <View style={styles.fabCounter}>
                            <Text style={styles.textFabCounter}>
                                {totalProducts}
                            </Text>

                        </View>
                        <Image

                            source={require('../../assets/logo/carrito-icon.png')}
                        />
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        color: 'black',

    },
    menu: {
        opacity: 1,
    },
    icon: {
        opacity: 1,
        marginLeft: 10,
        padding: 8
    },
    oldwave: {
        height: 40,
        width: 128,
        opacity: 1,
    },
    loginIcon: {
        backgroundColor: 'white',
        margin: 10
    },
    carIcon: {
        backgroundColor: 'white',
        margin: 10,
        marginBottom: 15
    },
    fabCounter: {
        position: 'absolute',
        height: 15,
        width: 15,
        borderRadius: 15,
        backgroundColor: '#32D1F7',
        right: 0,
        top: 0,
        alignItems: "center",
        zIndex: 2000
    },
    textFabCounter: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10
    }
})