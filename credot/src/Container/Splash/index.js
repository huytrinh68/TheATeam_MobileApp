import React, { useEffect } from 'react'
import { Storage } from '@Helper'
import SplashScreen from 'react-native-splash-screen'
import { loginAction } from '@Redux/AuthenticationRedux'
import { useDispatch } from 'react-redux'

const SplashScreens = ({ navigation }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        Storage.getData('first_open').then(res => {
            if (!res) {
                navigation.navigate('Introduction')
                SplashScreen.hide()
            }
            else {
                Storage.getAutoLoginInfo().then(res => {
                    if (res) {
                        dispatch(loginAction(res)).then(res => {
                            if (res.status) {
                                navigation.navigate('Application')
                            }
                            else {
                                global.props.alert(res.messsage, true, false, false, () => { })
                            }
                        })
                    }
                    else {
                        navigation.navigate('Login')
                    }
                    SplashScreen.hide()
                })
            }
        })
    }, [])
    return null
}
export default SplashScreens