import React from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { Color } from '@Helper'

const CustomTab = ({ ...props }) => {
    const iconSize = 26

    const handleIcon = (routeName, index) => {
        switch (routeName) {
            case "HomeStack":
                return <SimpleLineIcons name="home" size={iconSize} color={props?.state?.index === index ? Color.PRIMARY : Color.INACTIVE} />
            case "UserStack":
                return <SimpleLineIcons name="menu" size={iconSize} color={props?.state?.index === index ? Color.PRIMARY : Color.INACTIVE} />
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
        <View style={{ width: '100%', height: 70, backgroundColor: Color.WHITE, flexDirection: 'row', borderColor: '#FFFFFF' }}>
            {props?.state?.routes && renderListButton(props.state.routes)}
        </View>
    )
}

export default CustomTab;