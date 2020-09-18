import React, { useState } from 'react'
import { View, Text, FlatList, SafeAreaView, Dimensions, StyleSheet } from 'react-native'
import { Constants, Color } from '@Helper'
import { ItemCard, TouchableScale, Header } from '@Components'
import Carousel from 'react-native-snap-carousel';
import Modal from 'react-native-modal'
import { Card, Icon } from 'native-base'

const { width, height } = Dimensions.get('window')
const ListLoan = ({ navigation, route }) => {

    const renderItem = ({ item, index }) => {
        return <ItemCard item={item} navigation={navigation} bankData={route?.params}/>
    }

    const title = () => {
        return (
            <Text style={styles.textTitle}>Gói vay dành cho bạn:</Text>
        )
    }

    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <Header navigation={navigation} useLeft={true} />
            <View style={styles.viewContent}>
                {title()}
                <Carousel
                    data={route?.params?.listSuggest}
                    renderItem={renderItem}
                    sliderWidth={width}
                    itemWidth={300}
                    contentContainerCustomStyle={{ paddingTop: 30 }}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    viewContent: {
        padding: 20
    },
    textTitle: {
        textAlign: 'center',
        fontSize: 20,
        color: Color.PRIMARY,
        fontFamily:'Comfortaa'
    },
    card: {
        marginTop: 20,
        padding: 20,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textReason: {
        color: Color.INACTIVE,
        fontFamily:'Comfortaa'
    },
    fontIcon: {
        color: Color.PRIMARY,
        fontSize: 18
    },
    view_modal: {
        width: '100%',
        height: 400,
        backgroundColor: Color.WHITE,
        borderRadius: 40
    }
})
export default ListLoan