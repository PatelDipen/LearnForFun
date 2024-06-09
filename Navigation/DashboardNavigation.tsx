import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {NAV_SCREEN} from '../screens/UIConstants';
import {StackNavigationProp} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import ProfileScreen from '../screens/Dashboard/ProfileScreen';
import SettingsScreen from '../screens/Dashboard/SettingsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DetailScreen from '../screens/Dashboard/DetailScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FaqScreen from '../screens/Drawer/FaqScreen';
import ContactUsScreen from '../screens/Drawer/ContactUsScreen';

export type DashboardStackParamList = {
  [NAV_SCREEN.DASHBOARD_SCREEN]: undefined;
  [NAV_SCREEN.DETAIL_SCREEN]: undefined;
};

export type DashboardStackNavigationProps<
  T extends keyof DashboardStackParamList,
> = {
  navigation: StackNavigationProp<DashboardStackParamList, T>;
  route: RouteProp<DashboardStackParamList, T>;
};

const DashboardStack = createNativeStackNavigator<DashboardStackParamList>();

const DashboardStackNavigator = () => {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name={NAV_SCREEN.DASHBOARD_SCREEN}
        component={DashboardScreen}
      />
      <DashboardStack.Screen
        name={NAV_SCREEN.DETAIL_SCREEN}
        component={DetailScreen}
      />
    </DashboardStack.Navigator>
  );
};

export type BottomTabParamList = {
  [NAV_SCREEN.HOME_SCREEN]: DashboardStackParamList;
  [NAV_SCREEN.PROFILE_SCREEN]: undefined;
  [NAV_SCREEN.SETTINGS_SCREEN]: undefined;
};

export type BottomTabNavigationProps<T extends keyof BottomTabParamList> = {
  navigation: StackNavigationProp<BottomTabParamList, T>;
  route: RouteProp<BottomTabParamList, T>;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

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
        component={DashboardNavigator}
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

const DashboardNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={NAV_SCREEN.HOME_SCREEN}
        component={DashboardStackNavigator}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name={NAV_SCREEN.PROFILE_SCREEN}
        component={ProfileScreen}
      />
      <BottomTab.Screen
        name={NAV_SCREEN.SETTINGS_SCREEN}
        component={SettingsScreen}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({});
