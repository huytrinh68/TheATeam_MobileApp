import React, { useEffect } from 'react'
import { View, SafeAreaView, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { Header, TouchableScale } from '@Components'
import { LocalImage, Color, Identify } from '@Helper'
import { Card, Col } from 'native-base'
import { useSelector, useDispatch } from 'react-redux'
import { historyRequest } from '@Redux/RequestLoanRedux'
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient'

const HistoryScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const listHistory = useSelector(state => state.requestLoan.listHistory || [])
    const userInformation = useSelector(state => state.authentication.userInformation || [])
    const { width, height } = Dimensions.get('window')
    useEffect(() => {
        global.props.showLoading()
        dispatch(historyRequest()).then(res => {
            global.props.hideLoading()
        })
    }, [])

    const oneRow = (label, value, unit) => {
        return (
            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10 }}>
                <View style={{ width: '30%', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 14, color: 'gray' }}>{label}</Text>

                </View>
                <View style={{ width: '70%', alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: 12, color: Color.PRIMARY }}>{`${value}${unit ? unit : ''}`}</Text>

                </View>
            </View>
        )
    }
    const renderItem = ({ item, index }) => {
        const userData = userInformation?.data?.user
        return (
            <Card style={{ borderRadius: 30, overflow: 'hidden' }}>

                <View style={{ height: '15%', alignItems: 'center' }}>
                    <LinearGradient
                        colors={['#00fff8', '#00487b']}
                        start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                        style={{ height: '100%', width: width, alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Text style={{ fontSize: 22, color: Color.WHITE,fontFamily:'Comfortaa' }}>{`Chi tiết khoản vay`}</Text>
                    </LinearGradient>
                </View>
                <View style={{ height: '80%', paddingTop: 20 }}>
                    {oneRow('Thời gian', item?.createdAt)}
                    {oneRow('Trạng thái', item?.status)}
                    {oneRow('Mã yêu cầu', item?._id)}
                    {oneRow('Tên người vay', userData.name)}
                    {oneRow('Số điện thoại', userData.phone)}
                    {oneRow('Ngân hàng', item?.bankName)}
                    {oneRow('Số tiền', Identify.handlePrice(item?.money))}
                    {oneRow('Kỳ hạn', item?.listLoan[0].period, ' tháng')}
                    {oneRow('Lãi suất', item?.listLoan[0].percentRate, '/tháng')}
                    {oneRow('Lí do vay', item?.reason)}
                </View>
            </Card>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF', alignItems: 'center' }}>
            <Header navigation={navigation} useLeft={true} />
            <Carousel
                data={listHistory?.data}
                renderItem={renderItem}
                sliderWidth={width}
                itemWidth={350}
                contentContainerCustomStyle={{ paddingTop: 30 }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    }
})

export default HistoryScreen