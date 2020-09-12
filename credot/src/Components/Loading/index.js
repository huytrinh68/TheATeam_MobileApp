import React from 'react'
import { View, Animated, Image, Easing, Dimensions } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { LocalImage } from '@Helper'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spinAnim: new Animated.Value(0),
            showLoading: false,
        }
    }
    runAnimation = () => {
        Animated.loop(Animated.timing(
            this.state.spinAnim,
            {
                toValue: 1,
                duration: 1700,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )).start(() => {
            if (this.state.showLoading === true) {
                this.runAnimation();
            }
        });
    }
    showLoading = (full = false) => {
        if (this.state.showLoading) return;
        this.setState({
            showLoading: true,
        })
        this.runAnimation()
    }

    hideLoading = () => {
        if (!this.state.showLoading) return;
        this.setState({
            showLoading: false,
        })
    }

    render() {
        if (!this.state.showLoading) return null;
        const spin = this.state.spinAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
        return (
            <View style={{ position: 'absolute', zIndex: 99999999999, width: '100%', height: '100%', backgroundColor: '#00000033', alignItems: 'center', justifyContent: 'center' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Animated.View
                        style={{ height: 150, width: 150, transform: [{ rotate: spin }], borderRadius: 50, justifyContent: 'center', alignItems: 'center', zIndex: 9999999 }} >
                        <AntDesign
                            name={'loading2'}
                            style={{ fontSize: 58, color: '#005ed3' }}
                        />
                    </Animated.View>
                    <View style={{
                        position: 'absolute',
                    }}>
                        <Image
                            source={LocalImage.Logo}
                            style={{
                                width: 60,
                                height: 60,
                                borderRadius: 30,
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
export default React.memo(Loading)