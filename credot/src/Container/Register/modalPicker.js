import React from 'react'
import { View, StyleSheet } from 'react-native'
import Modal from 'react-native-modal'
import { Color } from '@Helper'
import { Calendar } from 'react-native-calendars'


const ModalPicker = ({ show, closeModalInOutSide, getData }) => {

    const closeModalInOutSides = () => {
        return closeModalInOutSide()
    }

    const handleSelectedDate = (date) => {
        closeModalInOutSide()
        getData(date.dateString)
    }
    return (
        <Modal
            isVisible={show}
            onBackdropPress={() => closeModalInOutSides()}
        >
            <View style={styles.view_modal}>
                <Calendar
                    minDate={'1900-05-10'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={'2100-05-30'}
                    onDayPress={(day) => handleSelectedDate(day)}
                />
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    container: {

    },
    view_modal: {
        width: '100%',
        height: 300,
        backgroundColor: Color.WHITE,
        borderRadius: 30
    }
})

export default ModalPicker