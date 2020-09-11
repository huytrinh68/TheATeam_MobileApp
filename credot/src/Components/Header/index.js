import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import { LocalImage } from '@Helper'

const Header = ({ navigation, useLeft }) => {

    const handlePress = () => {
        navigation.goBack()
    }
    const leftContent = () => {
        return (
            <TouchableOpacity
                onPress={() => handlePress()}
                style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                {useLeft && <Icon
                    type={'Entypo'}
                    name={'chevron-thin-left'}
                    style={{ fontSize: 22 }}
                />}
            </TouchableOpacity>
        )
    }
    const middleContent = () => {
        return (
            <View style={{ width: '70%', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={LocalImage.icon_app}
                    style={{ width: 100, height: 50 }}
                />
            </View>
        )
    }
    const rightContent = () => {
        return (
            <View style={{ width: '15%' }} />
        )
    }
    return (
        <View style={{ width: '100%', height: 40, flexDirection: 'row', overflow: 'hidden' }}>
            {leftContent()}
            {middleContent()}
            {rightContent()}
        </View>
    )
}
export default Header