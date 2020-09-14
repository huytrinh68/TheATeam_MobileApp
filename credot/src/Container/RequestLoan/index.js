import React, { useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native'
import { Header, TouchableScale } from '@Components'
import { Color, NavigationActions } from '@Helper'
import { getLoan } from '@Redux/RequestLoanRedux'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from 'native-base'

const RequestLoan = ({ navigation }) => {
    const dispatch = useDispatch()
    const listLoan = useSelector(state => state.requestLoan.listLoan?.data || [])
    useEffect(() => {
        if (listLoan) return
        global.props.showLoading()
        dispatch(getLoan()).then(res => {
            global.props.hideLoading()
        })
    }, [])

    const renderTitle = () => {
        return (
            <View style={{ width: '100%', alignItems: 'center', paddingTop: 30, paddingBottom: 10 }}>
                <Text style={{ fontSize: 15, color: '#88afc7', textAlign: 'center' }}>{`Chọn ngân hàng mà bạn muốn sử dụng dịch vụ:`}</Text>
            </View>
        )
    }
    const handlePress = item => {
        NavigationActions.openPage(navigation, 'ListLoan', item)
    }
    const renderItem = (item) => {
        return (
            <TouchableScale
                onPress={() => handlePress(item)}>
                <Card style={{ borderRadius: 30, alignItems: 'center', paddingBottom: 30 }}>
                    <Image
                        source={{ uri: item.logo }}
                        style={{ width: '100%', height: 150 }}
                        resizeMode={'contain'}
                    />
                    <Text style={{ color: Color.PRIMARY, paddingLeft: 20, paddingRight: 20 }}>{item.name}</Text>
                </Card>
            </TouchableScale>
        )
    }

    const renderListBank = () => {
        return (
            <FlatList
                data={listLoan}
                renderItem={({ item, index }) => renderItem(item)}
                keyExtractor={(item, index) => `flat_${index}`}
                contentContainerStyle={{ padding: 20 }}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            />
        )
    }
    return (
        <SafeAreaView style={styles.safe_view}>
            <Header navigation={navigation} useLeft={true} />
            {renderTitle()}
            {listLoan && listLoan.length > 0 && renderListBank()}
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