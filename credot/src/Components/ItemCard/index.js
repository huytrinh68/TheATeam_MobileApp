import React, { Fragment, useState } from 'react'
import { View, Text } from 'react-native'
import { Card, Icon } from 'native-base'
import TouchableScale from '../TouchableScale'
import { Color, NavigationActions, Identify } from '@Helper'
const ItemCard = ({ navigation, item, bankData }) => {

    const itemCard = (icon, type, label, unit) => {
        return (
            <View style={{
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: Color.PRIMARY,
                borderWidth: 2,
                paddingTop: 20,
                paddingBottom: 20,
                borderTopColor: Color.WHITE,
                borderLeftColor: icon === 'percent' ? Color.WHITE : Color.PRIMARY,
                borderRightColor: icon === 'calendar' ? Color.WHITE : Color.PRIMARY,
            }}>
                <Icon type={type} name={icon} style={{ color: Color.WHITE }} />
                <Text style={{ color: Color.WHITE, fontSize: 20, paddingTop: 10 }}>{`${label}${unit}`}</Text>
            </View>
        )
    }
    const handlePress = () => {
        NavigationActions.openPage(navigation, 'DetailLoan', { ...item, bankData: bankData })
    }
    return (
        <View>
            <TouchableScale
                onPress={() => handlePress()}
            >
                <Card
                    style={{
                        borderRadius: 30,
                        overflow: 'hidden',
                        width: '100%',
                        height: 400,
                        backgroundColor: Color.PRIMARY,
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                    <View style={{ height: '50%', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={{ color: Color.WHITE, fontSize: 40 }}>VNĐ</Text>
                        <Text style={{ color: Color.WHITE, fontSize: 20, paddingTop: 15 }}>{`${Identify.handlePrice(item?.amountFrom)} - ${Identify.handlePrice(item?.amountTo)}`}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        {itemCard('calendar', 'AntDesign', item?.period, ' tháng')}
                        {itemCard('percent', 'Feather', item?.percentRate, '/tháng')}
                    </View>
                </Card>
            </TouchableScale>
        </View>
    )
}
export default ItemCard