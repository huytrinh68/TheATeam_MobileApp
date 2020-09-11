import React from 'react'
import { View, Text, FlatList, SafeAreaView, Dimensions } from 'react-native'
import { Constants } from '@Helper'
import ItemCard from '../../Components/ItemCard'
import Carousel from 'react-native-snap-carousel';
import Header from '../../Components/Header';

const { width, height } = Dimensions.get('window')
const ListLoan = ({ navigation }) => {
    const renderItem = ({ item, index }) => {
        return <ItemCard item={item} />
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <Header navigation={navigation} useLeft={true}/>
            <Carousel
                data={Constants.suggestionLoan}
                renderItem={renderItem}
                sliderWidth={width}
                itemWidth={300}
                contentContainerCustomStyle={{paddingTop:100}}
            />
        </SafeAreaView>
    )
}
export default ListLoan