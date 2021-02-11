import React, { memo } from 'react';
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/AuthScreen/Login/LoginScreen";

const Auth = createStackNavigator();

const AuthStackNavigator = () => {
    return (
        <Auth.Navigator screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
            <Auth.Screen name="Login" component={LoginScreen}></Auth.Screen>
        </Auth.Navigator>
    );
}

export default memo(AuthStackNavigator);