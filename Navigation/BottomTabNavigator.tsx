import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
import ActivityScreen from '../screens/Dashboard/ActivityScreen';
import DummyScreen from '../screens/Dashboard/DummyScreen';
import FontTestScreen from '../screens/Dashboard/FontTestScreen';
import InstrumentScreen from '../screens/Dashboard/InstrumentScreen';

export type DashboardStackParamList = {
  [NAV_SCREEN.DASHBOARD_SCREEN]: undefined;
  [NAV_SCREEN.TEXTVIEW_SCREEN]: undefined;
  [NAV_SCREEN.MODAL_SCREEN]: undefined;
  [NAV_SCREEN.COUNTER_USESTATE_SCREEN]: undefined;
  [NAV_SCREEN.COUNTER_CONTEXT_API_SCREEN]: undefined;
  [NAV_SCREEN.COUNTER_REDUX_SCREEN]: undefined;
  [NAV_SCREEN.COUNTER_REDUX_SAGA_SCREEN]: undefined;
  [NAV_SCREEN.VIEW_PAGER]: undefined;
  [NAV_SCREEN.FONT_TEST]: undefined;
  [NAV_SCREEN.MUSIC_INSTRUMENT_TEST]: undefined;
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
      <DashboardStack.Screen
        name={NAV_SCREEN.FONT_TEST}
        component={FontTestScreen}
      />
      <DashboardStack.Screen
        name={NAV_SCREEN.MUSIC_INSTRUMENT_TEST}
        component={InstrumentScreen}
      />
    </DashboardStack.Navigator>
  );
};

export type BottomTabParamList = {
  [NAV_SCREEN.HOME_SCREEN]: DashboardStackParamList;
  [NAV_SCREEN.PROFILE_SCREEN]: undefined;
  [NAV_SCREEN.ACTIVITY_SCREEN]: undefined;
  [NAV_SCREEN.DUMMY_SCREEN]: undefined;
  [NAV_SCREEN.SETTINGS_SCREEN]: undefined;
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
        name={NAV_SCREEN.ACTIVITY_SCREEN}
        component={ActivityScreen}
      />
      <BottomTab.Screen
        name={NAV_SCREEN.DUMMY_SCREEN}
        component={DummyScreen}
        options={{
          tabBarButton: () => (
            <View
              style={{
                position: 'relative',
                bottom: 35,
                alignItems: 'center',
                justifyContent: 'space-around',
                height: 85,
              }}>
              <TouchableOpacity
                style={styles.roundButton1}
                onPress={() => console.log('Hi')}
              />
              <Text>Add</Text>
            </View>
          ),
        }}
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

const styles = StyleSheet.create({
  roundButton1: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'orange',
  },
});
