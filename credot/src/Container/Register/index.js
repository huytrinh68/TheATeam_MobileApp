/*
@tnh
RN0.63
*/

import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, SafeAreaView } from 'react-native'
import { Card, Icon } from 'native-base'
import { Color, LocalImage, Storage, NavigationActions, Identify } from '@Helper'
import { TouchableScale } from '@Components'
import { registerUser } from '@Redux/AuthenticationRedux'
import { useDispatch } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import ModalPicker from './modalPicker'

let dataRegister = {}
const RegisterScreen = ({ navigation }) => {
    const [show, setShow] = useState(false)
    const [date, setDate] = useState('')
    const [statusField, setStatusField] = useState({ phone: false, password: false })
    const dispatch = useDispatch()
    const headerScreen = () => {
        return (
            <Image
                source={LocalImage.icon_app}
                style={styles.image}
                resizeMode={'contain'}
            />
        )
    }

    const handleChangeText = (type, data) => {
        dataRegister[type] = data
    }

    const changeStatus = (type, value) => {
        let newStatus = {
            phone: false,
            password: false
        }
        newStatus[type] = value
        setStatusField(newStatus)
    }
    const fieldLogin = (type, icon, placeholder) => {
        return (
            <Card style={[styles.card_input, { borderColor: statusField[type] ? Color.PRIMARY : Color.INACTIVE }]}>
                <Icon
                    type={'AntDesign'}
                    name={icon}
                    style={[styles.icon_input, { color: statusField[type] ? Color.PRIMARY : Color.INACTIVE }]}
                />
                <TextInput
                    onChangeText={text => handleChangeText(type, text)}
                    placeholder={placeholder}
                    style={styles.input_field}
                    secureTextEntry={type === 'password' || type === 'repassword' ? true : false}
                    onFocus={() => changeStatus(type, true)}
                    onEndEditing={() => changeStatus(type, false)}
                    autoCorrect={false}
                    selectionColor={type === 'dob' ? Color.WHITE : Color.PRIMARY}
                    placeholderTextColor={Color.INACTIVE}
                    textContentType={'oneTimeCode'}
                />
            </Card>
        )
    }

    const openModal = () => {
        setShow(true)
    }

    const closeModal = () => {
        setShow(false)
    }

    const fieldCalendar = (type, icon, placeholder) => {
        return (
            <TouchableScale
                onPress={() => openModal()}
            >
                <Card style={[styles.card_input, { borderColor: statusField[type] ? Color.PRIMARY : Color.INACTIVE }]}>
                    <Icon
                        type={'AntDesign'}
                        name={icon}
                        style={[styles.icon_input, { color: statusField[type] ? Color.PRIMARY : Color.INACTIVE }]}
                    />
                    <View style={[styles.input_field, { justifyContent: 'center' }]}>
                        <Text style={{ color: date ? Color.PRIMARY : Color.INACTIVE }}>{date ? date : placeholder}</Text>
                    </View>
                </Card>
            </TouchableScale>
        )
    }

    const formLogin = () => {
        return (
            <View style={styles.view_formLogin}>
                {fieldLogin('name', 'user', 'Họ và tên')}
                {fieldLogin('phone', 'phone', 'Số điện thoại')}
                {fieldCalendar('dob', 'calendar', 'Ngày sinh')}
                {fieldLogin('address', 'home', 'Địa chỉ')}
                {fieldLogin('password', 'lock', 'Mật khẩu')}
                {fieldLogin('repassword', 'lock', 'Nhập lại mật khẩu')}
            </View>
        )
    }


    const handleAction = (type) => {
        if (type === 'signup') {
            if (!dataRegister.name || !dataRegister.phone || !dataRegister.dob || !dataRegister.address || !dataRegister.password || !dataRegister.repassword) {
                global.props.showToast('Vui lòng điền đầy đủ thông tin và thử lại!')
                return null
            }
            if (!Identify.validatePhoneNumber(dataRegister.phone)) {
                global.props.showToast('Số điện thoại chưa đúng!')
                return null
            }
            if(dataRegister.password !== dataRegister.repassword) {
                global.props.showToast('Mật khẩu không trùng khớp!')
                return null
            }
            else {
                global.props.showLoading()
                dispatch(registerUser(dataRegister)).then(res => {
                    global.props.hideLoading()
                    if (res.status) {
                        let dataToSave = {
                            phone: dataRegister.phone,
                            password:dataRegister.password
                        }
                        Storage.saveAutoLoginInfo(dataToSave)
                        global.props.alert('Đăng ký tài khoản thành công!', true, false, false, () => NavigationActions.openPage(navigation, 'Application'))
                    }
                    else {
                        global.props.alert(res.messsage, true, false, false, () => { })
                    }
                })
            }
        }
        else if (type === 'back') {
            NavigationActions.backToPreviousPage(navigation)
        }
    }

    const itemButon = (label, type, color, border) => {
        return (
            <TouchableScale
                onPress={() => handleAction(type)}
                style={[styles.touchable_submitLogin, { backgroundColor: color, borderColor: border ? border : color, borderWidth: 1 }]}
            >
                <Text style={[styles.text_submitLogin, { color: border ? border : Color.WHITE }]}>{label}</Text>
            </TouchableScale>
        )
    }

    const submitLogin = () => {
        return (
            <View style={styles.view_submitLogin}>
                {itemButon('ĐĂNG KÝ', 'signup', Color.PRIMARY)}
                {itemButon('QUAY LẠI ĐĂNG NHẬP', 'back', Color.WHITE, Color.PRIMARY)}
            </View>
        )
    }

    const getData = data => {
        dataRegister['dob'] = data
        setDate(data)
    }

    return (
        <KeyboardAwareScrollView style={styles.advoid}>
            <SafeAreaView style={styles.container}>
                <View style={styles.view_container}>
                    {headerScreen()}
                    {formLogin()}
                    {submitLogin()}
                    <ModalPicker show={show} getData={(data) => getData(data)} closeModalInOutSide={() => closeModal()} />
                </View>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
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
        fontWeight: 'bold'
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
export default RegisterScreen