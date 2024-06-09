import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NAV_SCREEN} from '../UIConstants';
import {LauncherStackNavigationProps} from '../../Navigation/AuthNavigator';

type Prop = LauncherStackNavigationProps<NAV_SCREEN.APP_INTRO_SCREEN_THREE>;

const AppIntroThree = ({navigation, route}: Prop) => {
  return (
    <View>
      <Text>AppIntroThree</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate(NAV_SCREEN.LOGIN_SCREEN);
        }}>
        <Text>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppIntroThree;

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 22,
    alignItems: 'center',
    backgroundColor: '#FF0000',
  },
});
