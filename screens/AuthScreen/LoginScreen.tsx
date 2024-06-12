import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {LauncherStackNavigationProps} from '../../Navigation/AuthNavigator';
import {NAV_SCREEN} from '../UIConstants';

type Prop = LauncherStackNavigationProps<NAV_SCREEN.LOGIN_SCREEN>;

const LoginScreen = ({navigation, route}: Prop) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate(NAV_SCREEN.SIGNUP_SCREEN, {
            email: 'test@test.com',
          });
        }}>
        <Text>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 22,
    alignItems: 'center',
    backgroundColor: '#FFFF00',
  },
});
