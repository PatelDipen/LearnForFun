import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NAV_SCREEN} from '../UIConstants';
import {DashboardStackNavigationProps} from '../../Navigation/BottomTabNavigator';

type Prop = DashboardStackNavigationProps<NAV_SCREEN.DASHBOARD_SCREEN>;

const DashboardScreen = ({navigation, route}: Prop) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate(NAV_SCREEN.DETAIL_SCREEN);
        }}>
        <Text>Go to Detail Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 22,
    alignItems: 'center',
    backgroundColor: '#FF00FF',
  },
});
