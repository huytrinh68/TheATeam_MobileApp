import React, { Fragment, useState } from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native'
import { Card } from 'native-base'
import Modal from 'react-native-modal'

const ItemCard = ({ item }) => {
    const [showModal, setShowModal] = useState(false)


    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }
    const content = (width, height) => {
        return (
            <ImageBackground
                source={item.image}
                style={{ width: width, height: height }}
            >
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 40,
                    color: '#FFFFFF',
                    position: 'absolute',
                    top: 30,
                    left: 20
                }}>{item.value}</Text>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 100,
                    color: '#FFFFFF',
                    position: 'absolute',
                    bottom: 0,
                    left: 10
                }}>
                    {item.percent}
                    <Text style={{
                        fontSize: 24,
                        fontWeight: '400'
                    }}>% / year</Text>
                </Text>
            </ImageBackground>
        )
    }
    const renderRow = (label, value) => {
        return (
            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', paddingTop:10, paddingBottom:10 }}>
                <View style={{ width: '50%' }}>
                    <Text style={{fontSize:16}}>{label}</Text>
                </View>
                <View style={{ width: '50%', alignItems:'flex-end' }}>
                    <Text>{value}</Text>
                </View>
            </View>
        )
    }
    const contentLoan = () => {
        return (
            <View style={{ width: '100%', padding: 20, paddingTop:30 }}>
                <Text style={{ fontSize: 26, fontWeight: '600', textAlign: 'center', paddingBottom:30 }}>LOAN INFORMATION</Text>
                {renderRow('Provider', 'Viettel Digital')}
                {renderRow('Loan Amount', item.value)}
                {renderRow('Percentage Rate', `${item.percent}% / year`)}
                {renderRow('Time', item.time)}
            </View>
        )
    }
    return (
        <Fragment>
            <Modal
                isVisible={showModal}
                onBackdropPress={() => closeModal()}
            >
                <View style={{ backgroundColor: '#FFFFFF', width: '100%', height: '100%', alignItems: 'center', justifyContent: "flex-start" }}>
                    {contentLoan()}
                </View>
            </Modal>
            <Pressable
                onPress={() => openModal()}
            >
                <Card>
                    {content(300, 400)}
                </Card>
            </Pressable>
        </Fragment>
    )
}
export default ItemCard