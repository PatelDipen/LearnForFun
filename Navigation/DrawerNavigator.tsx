import {StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ContactUsScreen from '../screens/Drawer/ContactUsScreen';
import FaqScreen from '../screens/Drawer/FaqScreen';
import {NAV_SCREEN} from '../screens/UIConstants';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen
        name={NAV_SCREEN.DRAWER_HOME_SCREEN}
        component={BottomTabNavigator}
      />
      <Drawer.Screen
        name={NAV_SCREEN.DRAWER_FAQ_SCREEN}
        component={FaqScreen}
      />
      <Drawer.Screen
        name={NAV_SCREEN.DRAWER_CONTACT_US_SCREEN}
        component={ContactUsScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
