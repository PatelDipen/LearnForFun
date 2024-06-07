import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import {NAV_SCREEN} from '../screens/UIConstants';
import {StackNavigationProp} from '@react-navigation/stack';
import AppIntroOne from '../screens/AppIntro/AppIntroOne';
import AppIntroTwo from '../screens/AppIntro/AppIntroTwo';
import AppIntroThree from '../screens/AppIntro/AppIntroThree';
import {StyleSheet} from 'react-native';
import LoginScreen from '../screens/AuthScreen/LoginScreen';
import SignUpScreen from '../screens/AuthScreen/SignUpScreen';

export type AppIntroStackParamList = {
  [NAV_SCREEN.APP_INTRO_SCREEN_ONE]: undefined;
  [NAV_SCREEN.APP_INTRO_SCREEN_TWO]: undefined;
  [NAV_SCREEN.APP_INTRO_SCREEN_THREE]: undefined;
};

export type AppIntroStackNavigationProps<
  T extends keyof AppIntroStackParamList,
> = {
  navigation: StackNavigationProp<AppIntroStackParamList, T>;
  route: RouteProp<AppIntroStackParamList, T>;
};

const IntroStack = createNativeStackNavigator<AppIntroStackParamList>();

export type LoginStackParamList = {
  [NAV_SCREEN.LOGIN_SCREEN]: undefined;
  [NAV_SCREEN.SIGNUP_SCREEN]: {
    email: string;
  };
};

export type LoginStackNavigationProps<T extends keyof LoginStackParamList> = {
  navigation: StackNavigationProp<LoginStackParamList, T>;
  route: RouteProp<LoginStackParamList, T>;
};

const LoginStack = createNativeStackNavigator<LoginStackParamList>();

const Navigation = () => {
  const isFirstLaunch = true;

  if (isFirstLaunch) {
    return (
      <NavigationContainer>
        <IntroStack.Navigator>
          <IntroStack.Screen
            name={NAV_SCREEN.APP_INTRO_SCREEN_ONE}
            component={AppIntroOne}
            options={{title: 'Intro 1'}}
          />
          <IntroStack.Screen
            name={NAV_SCREEN.APP_INTRO_SCREEN_TWO}
            component={AppIntroTwo}
            options={{title: 'Intro 2'}}
          />
          <IntroStack.Screen
            name={NAV_SCREEN.APP_INTRO_SCREEN_THREE}
            component={AppIntroThree}
            options={{title: 'Intro 3'}}
          />
        </IntroStack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <LoginStack.Navigator>
          <LoginStack.Screen
            name={NAV_SCREEN.LOGIN_SCREEN}
            component={LoginScreen}
            options={{title: 'Login'}}
          />
          <LoginStack.Screen
            name={NAV_SCREEN.SIGNUP_SCREEN}
            component={SignUpScreen}
            options={{title: 'SignUp'}}
          />
        </LoginStack.Navigator>
      </NavigationContainer>
    );
  }
};

export default Navigation;

const styles = StyleSheet.create({});
