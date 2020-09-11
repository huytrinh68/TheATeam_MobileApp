import React from 'react'
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native'
import { Color } from '@Helper'
import Header from '../../Components/Header'
import { Icon } from 'native-base'

const listAction = [
    {
        id: '1',
        label: 'Thông tin cá nhân',
        icon: 'user'
    },
    {
        id: '2',
        label: 'Lịch sử yêu cầu',
        icon: 'history'
    },
    {
        id: '3',
        label: 'Giới thiệu',
        icon: 'bookmark'
    },
    {
        id: '4',
        label: 'Cài đặt',
        icon: 'cog'
    },
]
const UserScreen = ({ navigation }) => {
    const renderItem = (item) => {
        return (
            <TouchableOpacity
                style={{
                    width: 300,
                    height: 60,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: Color.PRIMARY,
                    borderWidth: 1,
                    borderRadius: 10,
                    flexDirection: 'row'
                }}>
                <View style={{ width: '20%', alignItems: 'center' }}>
                    <Icon
                        type={'FontAwesome'}
                        name={item.icon}
                        style={{
                            fontSize: 22,
                            color: Color.PRIMARY
                        }}
                    />
                </View>
                <View style={{ width: '80%', alignItems: 'flex-start' }}>
                    <Text style={{ color: Color.PRIMARY }}>{item.label}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const itemSeprator = () => {
        return <View style={{ height: 20 }} />
    }
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
            <Header navigation={navigation} useLeft={false} />
            <FlatList
                data={listAction}
                renderItem={({ item, index }) => renderItem(item)}
                keyExtractor={(item, index) => `flat_${index}`}
                contentContainerStyle={{ padding: 20, paddingTop: 100, width: '100%' }}
                ItemSeparatorComponent={() => itemSeprator()}
            />
        </SafeAreaView>
    )
}
export default UserScreen