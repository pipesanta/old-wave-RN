import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { ResellerCard } from './ResellerCard';

interface Props {
    title: string;
    content: string;
    reseller?: any;
}

export const ItemDetail = ({ title, content, reseller }: Props) => {
    return (
        <View style={{ marginHorizontal: 20, marginBottom: 15 }}>

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View>
                    <Text style={styles.subTitleDetail}>{title}</Text>
                </View>
                <View style={{ width: 10 }}></View>
                <View style={styles.hotizontalLine} />
            </View>

            {
                reseller ?
                    <ResellerCard reseller={reseller} /> :
                    <Text style={{ fontSize: 16, color: '#5C5E64', paddingLeft: 10, marginBottom: 20, textAlign: "justify" }}>
                        {content}
                    </Text>
            }


        </View>
    )
}

const styles = StyleSheet.create({

    subTitleDetail: {
        fontSize: 20,
        color: '#5C5E64',
        opacity: 0.5,
        fontWeight: 'normal'
    },
    hotizontalLine: {
        flex: 1,
        height: 1,
        alignContent: "center",
        padding: 'auto',
        backgroundColor: '#5C5E64',
        opacity: 0.5
    }

});
