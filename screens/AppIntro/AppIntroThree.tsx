import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NAV_SCREEN} from '../UIConstants';
import {AppIntroStackNavigationProps} from '../../Navigation/RootNavigation';

type Prop = AppIntroStackNavigationProps<NAV_SCREEN.APP_INTRO_SCREEN_THREE>;

const AppIntroThree = ({navigation, route}: Prop) => {
  return (
    <View>
      <Text>AppIntroThree</Text>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate(NAV_SCREEN.APP_INTRO_SCREEN_TWO);
        }}>
        <Text>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppIntroThree;

const styles = StyleSheet.create({});
