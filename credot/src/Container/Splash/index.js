import React, { useEffect } from 'react'
import { Storage, NavigationActions } from '@Helper'
import SplashScreen from 'react-native-splash-screen'
import { loginAction } from '@Redux/AuthenticationRedux'
import { useDispatch } from 'react-redux'

const SplashScreens = ({ navigation }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        Storage.getData('first_open').then(res => {
            if (!res) {
                NavigationActions.openPage(navigation, 'Introduction')
                SplashScreen.hide()
            }
            else {
                Storage.getAutoLoginInfo().then(res => {
                    if (res) {
                        dispatch(loginAction(res)).then(res => {
                            if (res.status) {
                                NavigationActions.openPage(navigation, 'Application')
                            }
                            else {
                                global.props.alert(res.messsage, true, false, false, () => { })
                            }
                        })
                    }
                    else {
                        NavigationActions.openPage(navigation, 'Authentication')
                    }
                    SplashScreen.hide()
                })
            }
        })
    }, [])
    // NavigationActions.openPage(navigation, 'Authentication')
    return null
}
export default SplashScreens