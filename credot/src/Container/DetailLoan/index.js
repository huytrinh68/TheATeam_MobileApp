import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, FlatList, TextInput } from 'react-native'
import { Card, Icon } from 'native-base'
import { Header, TouchableScale } from '@Components'
import { Color, Constants, NavigationActions } from '@Helper'
import Modal from 'react-native-modal'
import Identify from '../../Helper/Identify'
import { requestLoan } from '@Redux/RequestLoanRedux'

let dataReason = {}
const DetailLoanScreen = ({ navigation, route }) => {
    const data = route?.params
    const [show, setShow] = useState(false)

    const openModal = () => {
        setShow(true)

    }

    const closeModal = () => {
        setShow(false)
    }

    const reasonRequest = () => {
        return (
            <TouchableScale
                onPress={() => openModal()}
            >
                <Card
                    style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10, paddingBottom: 15, paddingLeft: 15, paddingRight: 10, alignItems: 'center', borderRadius: 30 }}
                >
                    <Icon
                        type={'AntDesign'}
                        name={'questioncircleo'}
                        style={styles.fontIcon}
                    />
                    <Text style={[styles.textReason, { color: dataReason.reason ? Color.PRIMARY : Color.INACTIVE }]}>{dataReason.reason ? dataReason.reason : 'Chọn mục đích vay tiền'}</Text>
                    <Icon
                        type={'AntDesign'}
                        name={'down'}
                        style={styles.fontIcon}
                    />
                </Card>
            </TouchableScale>
        )
    }

    const handlePress = (label) => {
        dataReason.reason = label
        setShow(false)
    }

    const itemFlatList = item => {
        return (
            <TouchableScale
                onPress={() => handlePress(item.label)}
                style={{ paddingTop: 15, paddingBottom: 15, width: '100%' }}
            >
                <Text style={{ color: Color.PRIMARY, textAlign: 'center' }}>{item.label}</Text>
            </TouchableScale>
        )
    }

    const contentModal = () => {
        return (
            <Modal
                isVisible={show}
                onBackdropPress={() => closeModal()}
                style={{ alignItems: 'center' }}
            >
                <View style={{ width: '100%', backgroundColor: Color.WHITE, height: 300, borderRadius: 30, paddingTop: 20, paddingLeft: 30, paddingRight: 30 }}>
                    <FlatList
                        data={Constants.reasonRequest}
                        renderItem={({ item }) => itemFlatList(item)}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={{ width: '100%', height: 1, backgroundColor: Color.PRIMARY }} />}
                    />
                </View>
            </Modal>
        )
    }

    const rangeValue = () => {
        return (
            <Card
                style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 15, paddingLeft: 15, paddingRight: 10, alignItems: 'center', borderRadius: 30 }}
            >
                <Icon type={'MaterialIcons'} name={'attach-money'} style={{ color: Color.PRIMARY }} />
                <TextInput
                    placeholder={`Trong khoảng ${Identify.handlePrice(data.amountFrom)} - ${Identify.handlePrice(data.amountTo)}`}
                    style={{ paddingLeft: 10, color: Color.PRIMARY, alignItems:'center' }}
                    onChangeText={text => dataReason.money = text}
                />
            </Card>
        )
    }

    const handleSubmit = () => {
        if (!dataReason.reason || !dataReason.money) {
            global.props.showToast('Vui lòng nhập đầy đủ thông tin!')
            return null
        }
        const currentMoney = parseInt(dataReason.money)
        const currentFrom = parseInt(data.amountFrom)
        const currentTo = parseInt(data.amountTo)
        if (currentMoney > currentTo || currentMoney < currentFrom) {
            global.props.showToast(`Giá trị bạn nhập chưa chính xác giá trị trong khoảng ${Identify.handlePrice(currentFrom)} - ${Identify.handlePrice(currentTo)}`)
            return null
        }
        global.props.showLoading()
        let dataRequest = {
            bankId: data?.bankData?._id,
            loanPackageId: data?._id,
            reason: dataReason.reason,
            money: dataReason.money
        }
        requestLoan(dataRequest).then(res => {
            global.props.hideLoading()
            if (res.status) {
                NavigationActions.openPage(navigation, 'RequestSuccess')
            }
            else {
                global.props.alert(res.message, true, false, false, () => NavigationActions.openPage(navigation, 'Home'), 'Vui lòng thử lại sau')
            }
        })
    }

    const submitAction = () => {
        return (
            <TouchableScale
                onPress={() => handleSubmit()}
                style={{
                    backgroundColor: Color.PRIMARY,
                    paddingTop: 20,
                    paddingBottom: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                    marginTop: 100
                }}>
                <Text style={{ color: Color.WHITE, fontWeight: 'bold' }}>{'YÊU CẦU VAY'}</Text>
            </TouchableScale>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <Header navigation={navigation} useLeft={true} />
            <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 70 }}>
                <Text style={{ color: Color.PRIMARY, textAlign: 'center', fontSize: 20, paddingBottom: 10 }}>{`Mục đích vay tiền:`}</Text>
                {reasonRequest()}
                <Text style={{ color: Color.PRIMARY, textAlign: 'center', fontSize: 20, paddingBottom: 10, paddingTop: 40 }}>{`Số tiền cần vay:`}</Text>
                {rangeValue()}
                {submitAction()}
                {contentModal()}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fontIcon: {
        color: Color.PRIMARY,
        fontSize: 24
    },
    textReason: {
        color: Color.INACTIVE
    },
    view_rangeValue: {
        flexDirection: 'row',
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20
    }
})
export default DetailLoanScreen