import React, { useEffect } from 'react'
import { View, Text, FlatList, SafeAreaView, Linking, BackHandler } from 'react-native'
import { Color, Storage, NavigationActions } from '@Helper'
import { Header, TouchableScale } from '@Components'
import { Icon, Card } from 'native-base'
import { ShareDialog } from 'react-native-fbsdk';

const listAction = [
    {
        id: '1',
        label: 'Thông tin cá nhân',
        icon: 'user'
    },
    {
        id: '2',
        label: 'Lịch sử yêu cầu',
        icon: 'history'
    },
    {
        id: '3',
        label: 'Chia sẻ ứng dụng',
        icon: 'share-alt'
    },
    {
        id: '4',
        label: 'Cài đặt',
        icon: 'cog'
    },
    {
        id: '5',
        label: 'Đăng xuất',
        icon: 'sign-out'
    },
]

const shareLinkContent = {
    contentType: 'link',
    contentUrl: "http://theateam.tech/",
    contentDescription: 'The platform for Credit Scoring!',
};

const UserScreen = ({ navigation }) => {

    const shareLinkWithShareDialog = () => {

        ShareDialog.canShow(shareLinkContent).then(
            function (canShow) {
                if (canShow) {
                    return ShareDialog.show(shareLinkContent);
                }
            }
        ).then(
            function (result) {
                if (result.isCancelled) {
                } else {
                    global.props.alert('Chia sẻ nội dung thành công!', false, true)
                }
            },
            function (error) {
                // alert('Share failed with error: ' + error.message);
            }
        );
    }
    const backAction = () => {
        global.props.alert("Bạn có chắc muốn thoát ứng dụng?", true, true, false, () => BackHandler.exitApp())
    };

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);

        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, []);

    const handlePress = type => {
        if (type === '1') {
            NavigationActions.openPage(navigation, 'UserInformation')
        }
        else if (type === '2') {
            NavigationActions.openPage(navigation, 'History')
        }
        else if (type === '3') {
            shareLinkWithShareDialog()
        }
        else if (type === '4') {
            Linking.openSettings();
        }
        else if (type === '5') {
            Storage.removeAutologinInfo()
            NavigationActions.openPage(navigation, 'Authentication')
        }
        else return null
    }

    const renderItem = (item) => {
        return (
            <TouchableScale
                onPress={() => handlePress(item.id)}
                style={{


                }}>
                <Card style={{
                    width: 350,
                    height: 60,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    flexDirection: 'row',
                    borderRadius: 30
                }}>
                    <View style={{ width: '20%', alignItems: 'center' }}>
                        <Icon
                            type={'FontAwesome'}
                            name={item.icon}
                            style={{
                                fontSize: 22,
                                color: Color.PRIMARY
                            }}
                        />
                    </View>
                    <View style={{ width: '80%', alignItems: 'flex-start' }}>
                        <Text style={{ color: Color.PRIMARY, fontFamily: 'Comfortaa' }}>{item.label}</Text>
                    </View>
                </Card>
            </TouchableScale>
        )
    }
    const itemSeprator = () => {
        return <View style={{ height: 10 }} />
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
            <Header navigation={navigation} useLeft={false} />
            <FlatList
                data={listAction}
                renderItem={({ item, index }) => renderItem(item)}
                keyExtractor={(item, index) => `flat_${index}`}
                contentContainerStyle={{ padding: 20, paddingTop: 50, width: '100%' }}
                ItemSeparatorComponent={() => itemSeprator()}
            />
        </SafeAreaView>
    )
}
export default UserScreen