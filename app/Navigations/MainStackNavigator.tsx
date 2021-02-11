import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/AppScreens/Home/HomeScreen';
import Button from '../Shared/Components/Button';
import Icon from 'react-native-vector-icons/Feather';
import FONTS from '../Constants/Fonts';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    const navigation: any = useNavigation();
    return (
        <Stack.Navigator headerMode="float" screenOptions={
            {
                headerTitleStyle: { fontFamily: FONTS.Primary },
                headerLeftContainerStyle: { marginLeft: 15 },
                headerRightContainerStyle: { marginRight: 15 },
                headerLeft: () => (
                    <Icon
                        name="menu"
                        color="black"
                        size={22}
                        onPress={() => navigation.toggleDrawer()}
                    />
                ),
                headerRight: () => (
                    <Icon
                        name="more-vertical"
                        color="black"
                        size={22}
                    />
                )
            }}>
            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        </Stack.Navigator>
    );
}

export default MainStackNavigator;