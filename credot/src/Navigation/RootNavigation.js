import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, UserScreen, LoginScreen, RequestLoan, ListLoan, SplashScreens, IntroductionScreen, ImprovePointScreen } from '@Container'
import CustomHeader from './CustomHeader'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTab from '../Components/CustomTab'
import { Icon } from 'native-base'


const HomeStack = createStackNavigator();
function HomeScreenStack() {
    return (
        <HomeStack.Navigator
            initialRouteName="Home"
            headerMode="none"
        >
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    animationEnabled: true,
                    headerShown: false
                }}

            />
            <HomeStack.Screen name="ImprovePoint" component={ImprovePointScreen} />
            <HomeStack.Screen name="Request" component={RequestLoan} />
            <HomeStack.Screen name="ListLoan" component={ListLoan} />
        </HomeStack.Navigator>
    )
}


const App = createBottomTabNavigator();
function ApplicationStack() {
    return (
        <App.Navigator
            initialRouteName="Home"
            tabBar={props => <CustomTab {...props} />}
        >
            <App.Screen
                name="Home"
                component={HomeScreenStack}
                options={{ animationEnabled: true }}
            />
            <App.Screen name="User" component={UserScreen} />
            {/* <App.Screen name="Category" component={CategoryStackScreen} /> */}
        </App.Navigator>
    )
}

const Stack = createStackNavigator();

function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={'Splash'}
                headerMode="none"
            >
                <Stack.Screen
                    name="Splash"
                    component={SplashScreens}
                />
                <Stack.Screen
                    name="Introduction"
                    component={IntroductionScreen}
                />
                <Stack.Screen
                    name="Application"
                    component={ApplicationStack}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation;