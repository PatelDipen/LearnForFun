import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LauncherStackNavigationProps} from '../../Navigation/RootNavigation';
import {NAV_SCREEN} from '../UIConstants';

type Prop = LauncherStackNavigationProps<NAV_SCREEN.SIGNUP_SCREEN>;

const SignUpScreen = ({navigation, route}: Prop) => {
  return (
    <View>
      <Text>SignUpScreen with {route.params.email}</Text>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
