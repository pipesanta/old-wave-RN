import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native';

interface Props {
    reseller: any
}


export const ResellerCard = ({ reseller }: Props) => {

    const uri = reseller.logo;

    return (
        <View style={ styles.container }>
            {
                reseller.logo && (
                    <Image 
                        source={{ uri }}
                        style={{ width: 50, height: 50, borderRadius: 10 }}
                    />
                )
            }
            

            <View style={ styles.resellerInfo }>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    { reseller.name }
                </Text>
            </View>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
        marginLeft: 50,
        marginRight:50,
        paddingRight: 15,
    },
    resellerInfo: {
        marginLeft: 10,
        flex:1,
        justifyContent:'center',
        alignItems:'flex-start',
    }
});