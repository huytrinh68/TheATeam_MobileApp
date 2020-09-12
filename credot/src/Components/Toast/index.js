import React, { PureComponent } from 'react'
import { Text, Image, View, Keyboard } from 'react-native'
import { Color, LocalImage } from "@Helper";
import Modal from 'react-native-modal'
import { Card } from 'native-base'


export default class Toast extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.type = "success";
        this.title = "";
    }
    componentWillUnMount() {
        clearTimeout();
    }
    showToast = (title = "", type = "success", duration = 2000) => {
        Keyboard.dismiss()
        this.type = type;
        this.title = title;
        this.setState(
            {
                show: true
            },
            () => {
                setTimeout(() => {
                    this.title = "";
                    this.setState({
                        show: false
                    })
                }, duration)
            }
        )
    };
    closeModal = () => {
        this.setState({ show: false })
    }

    render() {
        if (!this.state.show) return null;
        return (
            <Modal
                isVisible={this.state.show}
                onBackdropPress={() => this.closeModal()}
                backdropColor={'transparent'}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                style={{ zIndex: 9999999999 }}
            >
                <View style={{ width: '100%', backgroundColor: 'transparent', alignItems: 'center', position: 'absolute', bottom: 25 }}>
                    <Card style={{ backgroundColor: '#FFFFFF', width: '80%', borderRadius: 30, overflow: 'hidden' }}>
                        <View style={{ backgroundColor: 'transparent', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: '25%' }}>
                                <Image
                                    source={LocalImage.Logo}
                                    style={{ width: 60, height: 60 }}
                                />
                            </View>
                            <View style={{ width: '75%', paddingLeft: 10, paddingRight: 10 }}>
                                <Text style={{ fontSize: 12, color: Color.BLACK }}>{this.title}</Text>
                            </View>
                        </View>
                    </Card>
                </View>
            </Modal>
        )
    }
}
