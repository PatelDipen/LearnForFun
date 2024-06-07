import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NAV_SCREEN} from '../UIConstants';
import {AppIntroStackNavigationProps} from '../../Navigation/RootNavigation';

type Prop = AppIntroStackNavigationProps<NAV_SCREEN.APP_INTRO_SCREEN_TWO>;

const AppIntroTwo = ({navigation, route}: Prop) => {
  var onpress = () => {
    console.log('Go to AppIntroThree');
    navigation.navigate(NAV_SCREEN.APP_INTRO_SCREEN_THREE);
  };

  return (
    <View>
      <Text>AppIntroTwo</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log('Go to AppIntroThree');
          navigation.navigate(NAV_SCREEN.APP_INTRO_SCREEN_THREE);
        }}>
        <Text>Go to AppIntroThree</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onpress();
        }}>
        <Text>Go to AppIntroThree</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppIntroTwo;

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 22,
    alignItems: 'center',
    backgroundColor: '#FF00F3',
  },
});
