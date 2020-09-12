import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, LocalImage } from "@Helper";
import Modal from 'react-native-modal'
import TouchableScale from '../TouchableScale'


export default class Alert extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.content = "Bạn có chắc muốn thực hiện hành động này không?";
        this.callback = null;
        this.error = false
        this.accept = false
        this.ignore = false
        this.description = ''
    }

    alert = (content = "", accept, ignore, error, callback, description) => {
        this.content = content;
        this.callback = callback;
        this.accept = accept
        this.ignore = ignore
        this.error = error
        this.description = description
        this.openModal()
    };

    openModal = () => {
        this.setState(
            {
                show: true
            }
        );
    }

    closeModal = () => {
        this.setState(
            {
                show: false
            }
        );
    }

    headerAlert = () => {
        if (this.error) {
            return (
                <View style={styles.view_headerAlert}>
                    <Image
                        source={LocalImage.logo_error}
                        style={styles.images}
                    />
                    <Text style={styles.text_headerAlert}>Có lỗi xảy ra</Text>
                </View>
            )
        }
        return (
            <View style={styles.view_headerAlert}>
                <Image
                    source={LocalImage.icon_app}
                    style={styles.images}
                    resizeMode={'contain'}
                />
            </View>
        )
    }

    contentAlert = () => {
        return (
            <View style={styles.view_contentAlert}>
                <Text style={styles.text_contentAlert}>{this.content}</Text>
                <Text style={styles.text_descriptionAlert}>{this.description}</Text>
            </View>
        )
    }
    handleAction = (type) => {
        if (type === 'accept' || type === 'error') {
            this.closeModal()
            return this.callback()
        }
        else {
            return this.closeModal()
        }
    }

    itemAction = (type, label, color, textColor) => {
        return (
            <TouchableScale
                style={[styles.touchable_itemAction, { backgroundColor: color }]}
                onPress={() => this.handleAction(type)}
            >
                <Text style={{ color: textColor, fontWeight: 'bold' }}>{label}</Text>
            </TouchableScale>
        )
    }

    actionAlert = () => {
        return (
            <View style={styles.view_actionAlert}>
                {this.accept && this.itemAction('accept', 'Đồng ý', Color.PRIMARY, Color.WHITE)}
                {this.ignore && this.itemAction('ignore', 'Bỏ qua', 'transparent', Color.INACTIVE)}
                {this.error && this.itemAction('error', 'Thoát', Color.PRIMARY, Color.WHITE)}
            </View>
        )
    }

    render() {
        if (!this.state.show) return null;
        return (
            <Modal
                isVisible={this.state.show}
                style={styles.container}
                onBackdropPress={() => this.error ? {} : this.closeModal()}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                animationInTiming={500}
            >
                <View
                    style={styles.content_modal}
                >
                    {this.headerAlert()}
                    {this.contentAlert()}
                    {this.actionAlert()}
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent'
    },
    content_modal: {
        backgroundColor: Color.WHITE,
        width: '100%',
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20
    },
    images: {
        width: 100,
        height: 60
    },
    view_headerAlert: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        // marginTop: 10
    },
    text_headerAlert: {
        color: Color.PRIMARY,
        fontSize: 12,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    view_contentAlert: {
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 15
    },
    text_contentAlert: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text_descriptionAlert: {
        fontSize: 12,
        textAlign: 'center',
        paddingTop: 10
    },
    touchable_itemAction: {
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        marginBottom: 10
    },
    text_itemAction: {
        color: '#FFFFFF'
    },
    view_actionAlert: {
        marginTop: 25
    }
})