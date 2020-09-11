/*
@tnh
RN0.63
*/

import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, Platform, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import { Card, Icon } from 'native-base'
import { Color, LocalImage } from '@Helper'
import { TouchableScale } from '@Components'

const LoginScreen = ({ navigation }) => {
    let dataLogin = {}



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
        dataLogin[type] = data
    }

    const fieldLogin = (type, icon, placeholder) => {
        return (
            <Card style={styles.card_input}>
                <Icon
                    type={'AntDesign'}
                    name={icon}
                    style={styles.icon_input}
                />
                <TextInput
                    onChangeText={text => handleChangeText(type, text)}
                    placeholder={placeholder}
                    style={styles.input_field}
                />
            </Card>
        )
    }

    const formLogin = () => {
        return (
            <View style={styles.view_formLogin}>
                {fieldLogin('phone', 'user', 'Số điện thoại')}
                {fieldLogin('password', 'lock', 'Mật khẩu')}
            </View>
        )
    }

    const handleAction = (type) => {
        if (type === 'login') {
            navigation.navigate('Application')
        }
        else if (type === 'signup') {
            handleNavigate('Register')
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
                {itemButon('ĐĂNG NHẬP', 'login', Color.PRIMARY)}
                {/* {itemButon('FB LOGIN', 'fblogin', '#3b5998')} */}
                <View style={styles.view_otherway}>
                    <View style={styles.view_otherline} />
                    <Text>{`HOẶC`}</Text>
                    <View style={styles.view_otherline} />
                </View>
                {itemButon('ĐĂNG KÝ TÀI KHOẢN MỚI', 'signup', Color.WHITE, Color.PRIMARY)}
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view_container}>
                {headerScreen()}
                {formLogin()}
                {submitLogin()}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
        paddingLeft: 10

    },
    view_formLogin: {
        width: '100%',
        marginTop: 50
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
        marginTop: 40
    },
    touchable_submitLogin: {
        backgroundColor: Color.PRIMARY,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
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
export default LoginScreen