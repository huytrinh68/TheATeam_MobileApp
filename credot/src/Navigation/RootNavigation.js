import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    HomeScreen,
    UserScreen,
    LoginScreen,
    RequestLoan,
    ListLoan,
    SplashScreens,
    IntroductionScreen,
    ImprovePointScreen,
    RegisterScreen,
    DetailLoanScreen,
    RequestSuccessScreen,
    HistoryScreen,
    UserInformationScreen
} from '@Container'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTab from '../Components/CustomTab'


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
                    animationEnabled: false,
                    headerShown: false
                }}

            />
            <HomeStack.Screen name="ImprovePoint" component={ImprovePointScreen} />
            <HomeStack.Screen name="Request" component={RequestLoan} />
            <HomeStack.Screen name="ListLoan" component={ListLoan} />
            <HomeStack.Screen name="DetailLoan" component={DetailLoanScreen} />
            <HomeStack.Screen name="RequestSuccess" component={RequestSuccessScreen} />
            <HomeStack.Screen name="History" component={HistoryScreen} />

        </HomeStack.Navigator>
    )
}

const UserStack = createStackNavigator()
function UserScreenStack() {
    return (
        <UserStack.Navigator
            initialRouteName="User"
            headerMode="none"
        >
            <UserStack.Screen name="User" component={UserScreen} />
            <UserStack.Screen name="History" component={HistoryScreen} />
            <UserStack.Screen name="UserInformation" component={UserInformationScreen} />
        </UserStack.Navigator>
    )
}

const AuthenticationStack = createStackNavigator();
function AuthenticationScreenStack() {
    return (
        <AuthenticationStack.Navigator
            initialRouteName="Login"
            headerMode="none"
        >
            <AuthenticationStack.Screen name="Login" component={LoginScreen} />
            <AuthenticationStack.Screen name="Register" component={RegisterScreen} />
        </AuthenticationStack.Navigator>
    )
}

const App = createBottomTabNavigator();
function ApplicationStack() {
    return (
        <App.Navigator
            initialRouteName="HomeStack"
            tabBar={props => <CustomTab {...props} />}
        >
            <App.Screen
                name="HomeStack"
                component={HomeScreenStack}
                options={{ animationEnabled: true }}
            />
            <App.Screen name="UserStack" component={UserScreenStack} />
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
                    name="Authentication"
                    component={AuthenticationScreenStack}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation;