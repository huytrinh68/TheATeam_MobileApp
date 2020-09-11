import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'


const CustomHeader = (props) => {
    console.log(props)
    const leftContent = () => {
        return (
            <TouchableOpacity style={{ width: '10%' }}>
                <Image
                    source={require('../../image/icon/ic_back.png')}
                    style={{ width: 20, height: 20 }}
                />
            </TouchableOpacity>
        )
    }
    const middleContent = () => {
        return (
            <View style={{ width: '80%' }}>
                <Text>Header Custom</Text>
            </View>
        )
    }
    const rightContent = () => {
        return (
            <View style={{ width: '10%' }}>
                <Text>Left</Text>
            </View>
        )
    }
    return (
        <View style={{ flexDirection: 'row' }}>
            {leftContent()}
            {middleContent()}
            {rightContent()}
        </View>
    )
}
export default CustomHeader