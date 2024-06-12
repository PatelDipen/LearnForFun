import {StyleSheet} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {NAV_SCREEN} from '../screens/UIConstants';
import {StackNavigationProp} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/Dashboard/ProfileScreen';
import SettingsScreen from '../screens/Dashboard/SettingsScreen';
import TextViewScreen from '../screens/Dashboard/TextViewScreen';
import ModalScreen from '../screens/Dashboard/ModalScreen';
import CounterRedux from '../screens/Dashboard/CounterRedux';
import CounterContextAPI from '../screens/Dashboard/CounterContextAPI';
import CounterUseStateHook from '../screens/Dashboard/CounterUseStateHook';
import CounterReduxSaga from '../screens/Dashboard/CounterReduxSaga';
import ViewPagerScreen from '../screens/Dashboard/ViewPagerScreen';

export type DashboardStackParamList = {
  [NAV_SCREEN.DASHBOARD_SCREEN]: undefined;
  [NAV_SCREEN.TEXTVIEW_SCREEN]: undefined;
  [NAV_SCREEN.MODAL_SCREEN]: undefined;
  [NAV_SCREEN.COUNTER_USESTATE_SCREEN]: undefined;
  [NAV_SCREEN.COUNTER_CONTEXT_API_SCREEN]: undefined;
  [NAV_SCREEN.COUNTER_REDUX_SCREEN]: undefined;
  [NAV_SCREEN.COUNTER_REDUX_SAGA_SCREEN]: undefined;
  [NAV_SCREEN.VIEW_PAGER]: undefined;
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
        name={NAV_SCREEN.TEXTVIEW_SCREEN}
        component={TextViewScreen}
      />
      <DashboardStack.Screen
        name={NAV_SCREEN.MODAL_SCREEN}
        component={ModalScreen}
      />
      <DashboardStack.Screen
        name={NAV_SCREEN.COUNTER_USESTATE_SCREEN}
        component={CounterUseStateHook}
      />
      <DashboardStack.Screen
        name={NAV_SCREEN.COUNTER_CONTEXT_API_SCREEN}
        component={CounterContextAPI}
      />
      <DashboardStack.Screen
        name={NAV_SCREEN.COUNTER_REDUX_SCREEN}
        component={CounterRedux}
      />
      <DashboardStack.Screen
        name={NAV_SCREEN.COUNTER_REDUX_SAGA_SCREEN}
        component={CounterReduxSaga}
      />
      <DashboardStack.Screen
        name={NAV_SCREEN.VIEW_PAGER}
        component={ViewPagerScreen}
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

const BottomTabNavigator = () => {
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

export default BottomTabNavigator;

const styles = StyleSheet.create({});
