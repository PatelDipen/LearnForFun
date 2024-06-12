import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PagerView from 'react-native-pager-view';

const ViewPagerScreen = () => {
  return (
    <PagerView style={styles.pagerView} initialPage={0} useNext={false}>
      <View key="1" style={styles.pagerOne}>
        <Text>First page</Text>
      </View>
      <View key="2" style={styles.pagerTwo}>
        <Text>Second page</Text>
      </View>
      <View key="3" style={styles.pagerThree}>
        <Text>Second page</Text>
      </View>
    </PagerView>
  );
};

export default ViewPagerScreen;

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  pagerOne: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagerTwo: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagerThree: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
