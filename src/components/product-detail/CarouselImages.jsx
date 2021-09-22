import React from 'react'
import { View, ActivityIndicator ,StyleSheet} from 'react-native'
import {Image} from 'react-native-elements'
import { Pagination } from 'react-native-snap-carousel'
import Carousel from 'react-native-snap-carousel'
import { size} from 'lodash'

export const CarouselImages = ({images, height, width, activeSlide, setActiveSlide}) => {
    const renderItem = ({item}) => {
        return (       
            <Image
                style={{width, height}}
                PlaceholderContent={<ActivityIndicator color='#fff'/>}
                source={{uri:'https://http2.mlstatic.com/D_684803-MLA44155935502_112020-O.jpg'}}
                resizeMode='contain'
            />
        )
    }
    return (
        <View>
            <Carousel
                layout={"default"}
                data={images}
                sliderWidth={width}
                itemWidth={width}
                itemHeight={height}
                renderItem={renderItem}
                onSnapToItem={(index)=> setActiveSlide(index)}
                style={styles.imageContainer}
            />
            <MyPagination data={images} activeSlide={activeSlide}/>
        </View>
    )
}

function MyPagination({data, activeSlide}){
    return (
        <Pagination dotsLength={size(data)}
        activeDotIndex={activeSlide}
        containerStyle={styles.containerPagination}
        dotStyle={styles.dotActive}
        inactiveDotStyle={styles.dotInactive}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.4}/>
    )
}

const styles = StyleSheet.create({
    containerPagination:{
        backgroundColor: 'transparent',
        zIndex: 1,
        position: 'absolute',
        bottom:0,
        alignSelf: 'center'
    },
    dotActive:{
        width: 15,
        height: 15,
        borderRadius: 10,
        marginHorizontal:2,
        backgroundColor: '#7444FB'
    },
    dotInactive:{
        width: 14,
        height: 14,
        borderRadius: 7,
        marginHorizontal: 2,
        backgroundColor: '#fff'
    },
    imageContainer: {
        flex: 1,
        alignSelf: 'center',
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        elevation: 9,
    }
})