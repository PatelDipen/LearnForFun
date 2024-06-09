import {StyleSheet} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import {NAV_SCREEN} from '../screens/UIConstants';
import AppIntroOne from '../screens/AppIntro/AppIntroOne';
import AppIntroThree from '../screens/AppIntro/AppIntroThree';
import AppIntroTwo from '../screens/AppIntro/AppIntroTwo';
import LoginScreen from '../screens/AuthScreen/LoginScreen';
import SignUpScreen from '../screens/AuthScreen/SignUpScreen';

export type LauncherStackParamList = {
  [NAV_SCREEN.APP_INTRO_SCREEN_ONE]: undefined;
  [NAV_SCREEN.APP_INTRO_SCREEN_TWO]: undefined;
  [NAV_SCREEN.APP_INTRO_SCREEN_THREE]: undefined;
  [NAV_SCREEN.LOGIN_SCREEN]: undefined;
  [NAV_SCREEN.SIGNUP_SCREEN]: {
    email: string;
  };
};

export type LauncherStackNavigationProps<
  T extends keyof LauncherStackParamList,
> = {
  navigation: StackNavigationProp<LauncherStackParamList, T>;
  route: RouteProp<LauncherStackParamList, T>;
};

const LauncherStack = createNativeStackNavigator<LauncherStackParamList>();

const AuthNavigator = () => {
  const isFirstLaunch = true;
  const initialRouteName = isFirstLaunch
    ? NAV_SCREEN.APP_INTRO_SCREEN_ONE
    : NAV_SCREEN.LOGIN_SCREEN;

  return (
    <LauncherStack.Navigator initialRouteName={initialRouteName}>
      <LauncherStack.Screen
        name={NAV_SCREEN.APP_INTRO_SCREEN_ONE}
        component={AppIntroOne}
        options={{title: 'Intro 1'}}
      />
      <LauncherStack.Screen
        name={NAV_SCREEN.APP_INTRO_SCREEN_TWO}
        component={AppIntroTwo}
        options={{title: 'Intro 2'}}
      />
      <LauncherStack.Screen
        name={NAV_SCREEN.APP_INTRO_SCREEN_THREE}
        component={AppIntroThree}
        options={{title: 'Intro 3'}}
      />
      <LauncherStack.Screen
        name={NAV_SCREEN.LOGIN_SCREEN}
        component={LoginScreen}
        options={{title: 'Login'}}
      />
      <LauncherStack.Screen
        name={NAV_SCREEN.SIGNUP_SCREEN}
        component={SignUpScreen}
        options={{title: 'SignUp'}}
      />
    </LauncherStack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
