import React from 'react';
import { View, Image , StyleSheet} from 'react-native';
import { Menu } from 'react-feather';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Header = () =>{
    return(
        <View style={styles.header}>
            <View style={styles.menu}>
                 <Icon name='menu'  color='#772CE8' />
            </View>
           
           <View style={styles.icon}>
                <Image
                style={styles.oldwave}
                source={require('../../assets/logo/oldwave-logo-horizontal.png')}
                />
            </View> 
            <View  style={styles.loginIcon}>
            <TouchableOpacity >
                <Image
                resizeMode="stretch"
                source={require('../../assets/logo/login-icon.png')}
                />
            </TouchableOpacity>
            </View>
            <View style={styles.carIcon}>
            <TouchableOpacity >
                <Image

                source={require('../../assets/logo/carrito-icon.png')}
                />
            </TouchableOpacity>
            
            </View>
      </View>
    )

}

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'white',
        width: 381,
        height: 122, 
        flexDirection: 'row', 
        color: 'black', 
        top: 0,


    },
    menu:{
        top:40,
        width: 22,
        height: 18,
        opacity: 1
    },
    icon:{
        height: 24, 
        width: 10, 
        left: 29, 
        top: 24, 
        opacity: 1
    },
    oldwave:{
        height: 24, 
        width: 98, 
        left: -10, 
        top: 14, 
        opacity: 1
    },
    loginIcon:{
        width: 29, 
        height: 29, 
        left: 230, 
        top: 27,
    }, 
    carIcon:{
         width: 29, 
         height: 29, 
         left: 250, 
         top: 19
        
    }
})