import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {StyleSheet} from 'react-native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

const Navigation = () => {
  const isLogin = true;

  return (
    <NavigationContainer>
      {isLogin ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
