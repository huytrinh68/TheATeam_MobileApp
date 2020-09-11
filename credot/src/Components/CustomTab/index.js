import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Foundation from 'react-native-vector-icons/Foundation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Color } from '@Helper'

const CustomTab = ({ ...props }) => {
    const iconSize = 23
    const fontSize = 12

    const handleIcon = (routeName, index) => {
        switch (routeName) {
            case "Home":
                return <Foundation name="home" size={iconSize} color={props?.state?.index === index ? Color.PRIMARY : Color.INACTIVE} />
            case "User":
                return <MaterialIcons name="explore" size={iconSize} color={props?.state?.index === index ? Color.PRIMARY : Color.INACTIVE} />
            default:
                return null
        }
    }


    function handlePress(routeName, index) {
        props.navigation.jumpTo(routeName)
    }

    const Item = ({ routeName, index }) => (
        <View style={{ width: '50%', height: '100%', marginTop: props?.state?.index === index ? -3 : 0 }}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => handlePress(routeName.name, index)}
            >
                {handleIcon(routeName.name, index)}
                <Text style={{ fontSize: fontSize, fontWeight: '400', color: props?.state?.index === index ? Color.PRIMARY : Color.INACTIVE, marginTop: 4, fontSize: props?.state?.index === index ? 13 : 12 }}>{routeName.name}</Text>
            </TouchableOpacity>
        </View>
    )

    const renderListButton = (routes) => {
        let listIcon = []
        routes.forEach((item, index) => listIcon.push(<Item routeName={props.state.routes[index]} index={index} key={index} />))
        return listIcon
    }
    if (props?.state?.routes[props?.state?.index]?.state?.index > 0) return null
    return (
        <View style={{ width: '100%', height: 70, backgroundColor: Color.WHITE, flexDirection: 'row', borderColor: '#FFFFFF', borderTopColor: '#e3e3e3', borderWidth: 1 }}>
            {props?.state?.routes && renderListButton(props.state.routes)}
        </View>
    )
}

export default CustomTab;