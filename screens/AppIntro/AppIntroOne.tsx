import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NAV_SCREEN} from '../UIConstants';
import {LauncherStackNavigationProps} from '../../Navigation/RootNavigation';

type Prop = LauncherStackNavigationProps<NAV_SCREEN.APP_INTRO_SCREEN_ONE>;

const AppIntroOne = ({navigation, route}: Prop) => {
  var onpress = () => {
    console.log('Go to AppIntroTwo');
    navigation.navigate(NAV_SCREEN.APP_INTRO_SCREEN_TWO);
  };

  return (
    <View>
      <Text>AppIntroOne</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log('Go to AppIntroTwo');
          navigation.navigate(NAV_SCREEN.APP_INTRO_SCREEN_TWO);
        }}>
        <Text>Go to AppIntroTwo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onpress();
        }}>
        <Text>Go to AppIntroTwo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppIntroOne;

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 22,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
});
