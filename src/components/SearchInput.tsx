import React, { useEffect, useState } from 'react'
import { Platform, StyleSheet, View, StyleProp, ViewStyle, ScrollView, Text, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';
import { Icon } from 'react-native-elements/dist/icons/Icon';

interface Props {
    onValueChanges: (value: string) => void;
    style?: StyleProp<ViewStyle>
}

export const SearchInput = ({ style, onValueChanges }: Props) => {

    const [textValue, setTextValue] = useState('');

    const deboncedValue = useDebouncedValue(textValue);

    useEffect(() => {
        onValueChanges(deboncedValue);
    }, [deboncedValue])

    return (
        <View style={{
            ...styles.container,
            ...style as any
        }}>
           
            <View style={styles.textBackground}>
                <Icon name='search' color='#772CE8'/>
                
                <TextInput
                    placeholder="Buscar"
                    style={{
                        ...styles.textInput,
                        top: (Platform.OS === 'ios') ? 0 : 2
                    }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#772CE8',
        flex: 1, 
        position: 'absolute',
        top: 60,
        height: 69, 
        width: '100%',
        paddingHorizontal: 12

    },
    
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 36,
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
        top: 19, 

    },
    textInput: {
        flex: 1,
        fontSize: 18,
  
    }, 
  
});