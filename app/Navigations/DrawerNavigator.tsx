import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../Shared/Components/DrawerContent';
import HomeScreen from '../Screens/AppScreens/Home/HomeScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            drawerStyle={{ width: '85%' }}>
            <Drawer.Screen name="TabBar" component={HomeScreen} />
        </Drawer.Navigator>
    );
}
