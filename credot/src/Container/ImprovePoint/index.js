import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import { Constants, Color } from '@Helper'

const ImprovePointScreen = ({ navigation }) => {
    const _renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{item.title}</Text>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>{item.content}</Text>
            </View>
        );
    }
    const renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle_Done}>
                <Text style={styles.text_buttonCircle}>{`Đã hiểu`}</Text>
            </View >
        )
    }
    const renderNextButton = () => {
        return (
            <View style={styles.buttonCircle_Next}>
                <Text style={styles.text_buttonCircle}>{`Tiếp`}</Text>
            </View>
        )
    }
    const handleDone = () => {
        navigation.goBack()
    }
    return <AppIntroSlider
        data={Constants.improvePoint}
        renderItem={item => _renderItem(item)}
        activeDotStyle={{ backgroundColor: Color.PRIMARY }}
        renderDoneButton={() => renderDoneButton()}
        renderNextButton={() => renderNextButton()}
        onDone={() => handleDone()}
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
        fontWeight: 'bold',
        fontSize: 18,
        paddingTop: 10,
        color: 'red'

    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 50,
    },
    text: {
        fontSize: 13,
        paddingTop: 80,
        color: Color.PRIMARY
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
        color: Color.WHITE
    },
    buttonCircle_Next: {
        width: 44,
        height: 44,
        backgroundColor: Color.PRIMARY,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonCircle_Done: {
        width: 60,
        height: 44,
        backgroundColor: Color.PRIMARY,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_buttonCircle: {
        color: Color.WHITE,
        fontSize: 12
    }
})
export default ImprovePointScreen