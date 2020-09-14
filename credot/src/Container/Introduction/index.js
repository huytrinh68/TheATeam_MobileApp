import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import { Constants, Storage, Color } from '@Helper'
import { Icon } from 'native-base'

const IntroductionScreen = ({ navigation }) => {
    const _renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    }

    const _onDone = () => {
        Storage.saveData('first_open', 'true').then(() => {
            navigation.navigate('Authentication')
        })
    }

    const _renderDoneButton = () => {
        return (
            <View style={styles.view_nextButton}>
                <Icon type={'EvilIcons'} name={'check'} style={styles.icon_next} />
            </View>
        )
    }

    const _renderNextButton = () => {
        return (
            <View style={[styles.view_nextButton]}>
                <Icon type={'EvilIcons'} name={'chevron-right'} style={styles.icon_next} />
            </View>
        )
    }

    return <AppIntroSlider
        renderItem={item => _renderItem(item)}
        data={Constants.introductionData}
        onDone={() => _onDone()}
        renderDoneButton={() => _renderDoneButton()}
        renderNextButton={() => _renderNextButton()}
    />
}
const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 100,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: Color.WHITE
    },
    title: {
        fontSize: 22,
        paddingTop: 10,
        color:Color.PRIMARY
    },
    image: {
        width: 200,
        height: 200
    },
    text: {
        fontSize: 12,
        paddingTop: 20,
        color:Color.PRIMARY
    },
    view_nextButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        position: 'absolute',
        bottom: -40,
        right: 5,
        borderRadius: 18,
    },
    icon_next: {
        color: Color.PRIMARY,
        fontSize: 40,
    }
})
export default IntroductionScreen