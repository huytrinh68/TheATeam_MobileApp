import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { Color } from '@Helper'
import Header from '../../Components/Header'
import LinearGradient from 'react-native-linear-gradient'
import { Card } from 'native-base'
import { useSelector } from 'react-redux'

const HomeScreen = ({ navigation }) => {

    const userInformation = useSelector(state => state.authentication.userInformation)
    const point = userInformation?.data?.user?.point
    const { width } = Dimensions.get('window')
    const handlePress = label => {
        if (label === 'Cải thiện') {
            navigation.navigate('ImprovePoint')
        }
        else {
            navigation.navigate('Request')
        }
    }

    const renderTitle = () => {
        return (
            <View style={styles.view_user_point}>
                <Text style={styles.text_user_point}>{`Điểm tín dụng của bạn`}</Text>
            </View>
        )
    }


    const renderOneAction = (label) => {
        return (
            <Card
                style={[styles.touchable_one_action, { backgroundColor: label === 'Cải thiện' ? Color.WHITE : Color.PRIMARY }]}
            >
                <TouchableOpacity
                    onPress={() => handlePress(label)}
                >
                    <View style={[styles.view_one_action, { backgroundColor: label === 'Cải thiện' ? Color.WHITE : Color.PRIMARY }]}>
                        <Text style={[styles.text_one_action, { color: label !== 'Cải thiện' ? Color.WHITE : Color.PRIMARY }]}>{label}</Text>
                    </View>
                </TouchableOpacity>
            </Card>
        )
    }
    const renderUserAction = () => {
        return (
            <View style={styles.view_user_action}>
                {renderOneAction('Cải thiện')}
                {renderOneAction('Yêu cầu vay')}
            </View>
        )
    }
    const handleColorGradient = (point) => {
        if (point < 630 && point >= 300) {
            return ['#ff7348', '#ff436c']
        } else if (point >= 630 && point < 690) {
            return ['#ffd366', '#ff7348']
        } else if (point >= 690 && point < 720) {
            return ['#2cff77', '#00fff8']
        } else {
            return ['#00fff8', '#00487b']
        }

    }
    const renderPoint = () => {
        const colorGradient = ['#ff0909', '#ff8200', '#fee001', '#a6f20f']
        return (
            <LinearGradient
                colors={handleColorGradient(point)}
                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                style={{ height: width - 80, width: width - 80, alignItems: 'center', justifyContent: 'center', borderRadius: (width - 80) / 2, marginTop: 50 }}
            >
                <View style={{ height: width - 90, width: width - 90, backgroundColor: '#FFFFFF', borderRadius: (width - 90) / 2, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ zIndex: 9999999, color: handleColorGradient(point)[0], fontSize: 70 }}>{point}</Text>
                    <Text style={{ zIndex: 9999999, color: handleColorGradient(point)[0], fontSize: 30, paddingTop: 5 }}>{userInformation?.data?.user?.title}</Text>
                </View>
            </LinearGradient>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{ alignItems: 'center', flex: 1 }}>
                <Header navigation={navigation} useLeft={false} />
                {renderTitle()}
                {renderPoint()}
                {renderUserAction()}
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    view_user_action: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        position: 'absolute',
        bottom: 10
    },
    view_one_action: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 35,
    },
    touchable_one_action: {
        // backgroundColor: Color.PRIMARY,
        width: '45%',
        borderRadius: 35,
        padding: 2
    },
    text_one_action: {
        fontSize: 16,
        fontWeight: '500',
        color: Color.PRIMARY,
    },
    text_user_point: {
        fontSize: 22,
        paddingTop: 20,
        color: Color.PRIMARY
    },

})
export default HomeScreen