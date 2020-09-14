import React from 'react'
import { View, SafeAreaView, Text, Image, StyleSheet } from 'react-native'
import { Header, TouchableScale } from '@Components'
import { LocalImage, Color, NavigationActions } from '@Helper'
import { Card } from 'native-base'
import { StackActions } from '@react-navigation/native';


const RequestSuccess = ({ navigation }) => {


    const handleAction = (type) => {
        if (type === 'back') {
            const popAction = StackActions.pop(5);
            navigation.dispatch(popAction);
        }
        else {
            NavigationActions.openPage(navigation, 'History')
        }
    }

    const itemAction = (label, type) => {
        return (
            <TouchableScale
                onPress={() => handleAction(type)}
            >
                <Card
                    style={{ backgroundColor: type === 'back' ? Color.WHITE : Color.PRIMARY, padding: 20, alignItems: 'center', borderRadius: 30 }}
                >
                    <Text style={{ color: type === 'back' ? Color.PRIMARY : Color.WHITE }}>{label}</Text>
                </Card>
            </TouchableScale >
        )
    }
    const actionButton = () => {
        return (
            <View style={{
                width: '100%',
                justifyContent: 'center',
                paddingLeft: 20,
                paddingRight: 20,
                position: 'absolute',
                bottom: 20
            }}>
                {itemAction('Về trang chủ', 'back')}
                {itemAction('Xem lịch sử', 'history')}
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF', alignItems: 'center' }}>
            <Header navigation={navigation} useLeft={false} />
            <Image
                source={LocalImage.success}
                style={styles.image}
                resizeMode={'contain'}

            />
            <Text style={{ color: Color.PRIMARY, fontSize: 16 }}>{`Yêu cầu của bạn đã được hệ thống lưu lại!`}</Text>
            {actionButton()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    }
})

export default RequestSuccess