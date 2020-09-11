import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native'
import Header from '../../Components/Header'
import { Constants } from '@Helper'

const RequestLoan = ({ navigation }) => {
    const renderTitle = () => {
        return (
            <View style={{ width: '100%', alignItems: 'center', paddingTop: 20, paddingBottom: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: '300', paddingBottom: 10 }}>Your Lender</Text>
                <Text style={{ fontSize: 12, color: '#88afc7' }}>Which bank or institution you want to borrow from?</Text>
            </View>
        )
    }
    const handlePress = id => {
        navigation.navigate('ListLoan')
    }
    const renderItem = (item) => {
        return (
            <TouchableOpacity
                onPress={() => handlePress(item.id)}
                style={{ width: '100%', paddingTop: 10, paddingBottom: 10 }}>
                <Image
                    source={item.image}
                    style={{ width: '100%', height: 150 }}
                    resizeMode={'contain'}
                />
            </TouchableOpacity>
        )
    }

    const renderListBank = () => {
        return (
            <FlatList
                data={Constants.listBank}
                renderItem={({ item, index }) => renderItem(item)}
                keyExtractor={(item, index) => `flat_${index}`}
            />
        )
    }
    return (
        <SafeAreaView style={styles.safe_view}>
            <Header navigation={navigation} useLeft={true}/>
            {renderTitle()}
            {renderListBank()}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    safe_view: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
})
export default RequestLoan