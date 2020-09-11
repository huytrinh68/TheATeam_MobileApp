import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import { Color, LocalImage } from '@Helper'
import Modal from 'react-native-modal'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../../Components/Header'
import LinearGradient from 'react-native-linear-gradient'

const HomeScreen = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const handlePress = label => {
        if (label === 'Improve') {
            openModal()
        }
        else {
            navigation.navigate('Request')
        }
    }

    const renderTitle = () => {
        return (
            <View style={styles.view_user_point}>
                <Text style={styles.text_user_point}>Your credit point</Text>
            </View>
        )
    }


    const renderOneAction = (label) => {
        return (
            <TouchableOpacity
                onPress={() => handlePress(label)}
                style={styles.touchable_one_action}>
                <View style={styles.view_one_action}>
                    <Text style={styles.text_one_action}>{label}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const renderUserAction = () => {
        return (
            <View style={styles.view_user_action}>
                {renderOneAction('Improve')}
                {renderOneAction('Request')}
            </View>
        )
    }
    const renderPoint = () => {
        return (
            <LinearGradient
                colors={['#ff0909', '#ff8200', '#fee001','#a6f20f']}
                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                style={{ height: 200, width: 200, alignItems: 'center', justifyContent: 'center', borderRadius: 100 }}
            >
                <View style={{ height: 190, width: 190, backgroundColor: '#FFFFFF', borderRadius: 95, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ zIndex: 9999999, color: '#000000', fontSize: 26 }}>720</Text>
                </View>
            </LinearGradient>
        )
    }
    const renderModal = () => {
        return (
            <Modal
                isVisible={showModal}
                style={{ backgroundColor: '#FFFFFF' }}
                onBackdropPress={() => closeModal()}
            >
                <ScrollView
                    contentContainerStyle={{ alignItems: 'center', paddingTop: 30, paddingLeft: 10, paddingRight: 10 }}
                >
                    <Image
                        source={LocalImage.improve_point}
                        style={{ width: 200, height: 200 }}
                    />
                    <Text style={{ fontSize: 16, fontWeight: '600', paddingTop: 30 }}>How Credit Scores Are Calculated</Text>
                    <Text style={{ paddingTop: 15, paddingBottom: 50 }}>
                        You likely have dozens, if not hundreds, of credit scores. That's because a credit score is calculated by applying a mathematical algorithm to the information in one of your three credit reports, and there is no one uniform algorithm employed by all lenders or other financial companies to compute the scores. (Some credit scoring models are very common, like the FICO® Score☉ , which ranges from 300 to 850.)

                        You don't have to get hung up on having multiple scores, though, because the factors that make your scores go up or down in different scoring models are usually similar. "What makes one score go up versus down is always going to be the same—it just depends on the degree," says Barry Paperno, a consumer credit expert.

                        Most scoring models take into account your payment history on loans and credit cards, how much revolving credit you regularly use, how long you've had accounts open, the types of accounts you have and how often you apply for new credit.
        </Text>
                </ScrollView>
            </Modal>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{ alignItems: 'center' }}>
                <Header navigation={navigation} useLeft={false} />
                {renderTitle()}
                {renderPoint()}
                {renderUserAction()}
                {renderModal()}
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
        paddingRight: 10
    },
    view_one_action: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 35,
    },
    touchable_one_action: {
        backgroundColor: Color.PRIMARY,
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
        paddingTop: 20
    },

})
export default HomeScreen