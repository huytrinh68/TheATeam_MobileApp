/*
@tnh
RN0.63
*/

import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, SafeAreaView } from 'react-native'
import { Card, Icon } from 'native-base'
import { Color, LocalImage, Storage, NavigationActions, Identify } from '@Helper'
import { TouchableScale, Header } from '@Components'
import { registerUser } from '@Redux/AuthenticationRedux'
import { useSelector } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

const UserInformationScreen = ({ navigation }) => {
    const [date, setDate] = useState('')
    const dataUser = useSelector(state => state.authentication.userInformation)
    console.log(dataUser)
    const headerScreen = () => {
        return (
            <Text style={styles.textHeader}>Thông tin cá nhân</Text>
        )
    }

    const fieldLogin = (type, icon, placeholder) => {
        return (
            <Card style={[styles.card_input, { borderColor: Color.INACTIVE }]}>
                <Icon
                    type={'AntDesign'}
                    name={icon}
                    style={[styles.icon_input, { color: Color.INACTIVE }]}
                />
                <TextInput
                    editable={false}
                    onChangeText={text => handleChangeText(type, text)}
                    placeholder={placeholder}
                    style={styles.input_field}
                    secureTextEntry={type === 'password' || type === 'repassword' ? true : false}
                    onFocus={() => changeStatus(type, true)}
                    onEndEditing={() => changeStatus(type, false)}
                    autoCorrect={false}
                    selectionColor={type === 'dob' ? Color.WHITE : Color.PRIMARY}
                    placeholderTextColor={Color.INACTIVE}
                    // textContentType={'oneTimeCode'}
                    value={dataUser?.data?.user[type]}
                />
            </Card>
        )
    }

    const formLogin = () => {
        return (
            <View style={styles.view_formLogin}>
                {fieldLogin('name', 'user', 'Họ và tên')}
                {fieldLogin('phone', 'phone', 'Số điện thoại')}
                {fieldLogin('dob', 'calendar', 'Ngày sinh')}
                {fieldLogin('address', 'home', 'Địa chỉ')}
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF', alignItems: 'center' }}>
            <Header navigation={navigation} useLeft={true} />
            <View style={styles.view_container}>
                {headerScreen()}
                {formLogin()}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textHeader: {
        color: Color.PRIMARY,
        fontWeight: 'bold',
        fontFamily: 'Comfortaa',
        fontSize: 20,
        paddingTop: 30,
        paddingBottom: 10
    },
    advoid: {
        flex: 1,
        backgroundColor: Color.WHITE,
    },
    container: {
        flex: 1,
        backgroundColor: Color.WHITE
    },
    view_container: {
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%',
        alignItems: 'center'

    },
    image: {
        width: 250,
        height: 100
    },
    input_field: {
        height: 45,
        width: '90%',
        paddingLeft: 10,
        color: Color.PRIMARY

    },
    view_formLogin: {
        width: '100%',
        marginTop: 10
    },
    card_input: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 40,
        marginBottom: 15
    },
    icon_input: {
        color: Color.INACTIVE,
        fontSize: 24
    },
    view_submitLogin: {
        width: '100%',
        marginTop: 20
    },
    touchable_submitLogin: {
        backgroundColor: Color.PRIMARY,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 20
    },
    text_submitLogin: {
        color: Color.WHITE,
        fontWeight: 'bold',
        fontFamily: 'Comfortaa'
    },
    view_otherway: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        flexDirection: 'row'
    },
    view_otherline: {
        height: 1,
        backgroundColor: Color.BLACK,
        width: '40%'
    }
})
export default UserInformationScreen