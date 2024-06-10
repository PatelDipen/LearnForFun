import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';
import {NAV_SCREEN} from '../UIConstants';
import {
  DashboardStackNavigationProps,
  DashboardStackParamList,
} from '../../Navigation/BottomTabNavigator';
import {StackNavigationProp} from '@react-navigation/stack';

type Prop = DashboardStackNavigationProps<NAV_SCREEN.DASHBOARD_SCREEN>;

const DATA = [{title: 'Text View'}, {title: 'Modal'}, {title: 'TODO'}];

const DashboardScreen = ({navigation, route}: Prop) => {
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({item, index, separators}) => (
          <Item
            title={item.title}
            separators={separators}
            navigation={navigation}
          />
        )}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default DashboardScreen;

type ItemProps = {
  title: string;
  separators: any;
  navigation: StackNavigationProp<
    DashboardStackParamList,
    NAV_SCREEN.DASHBOARD_SCREEN
  >;
};

const Item = ({title, separators, navigation}: ItemProps) => (
  <TouchableHighlight
    key={title}
    onPress={() => {
      if (title === 'Text View') {
        navigation.navigate(NAV_SCREEN.TEXTVIEW_SCREEN);
      } else if (title === 'Modal') {
        navigation.navigate(NAV_SCREEN.MODAL_SCREEN);
      }
    }}
    onShowUnderlay={separators.highlight}
    onHideUnderlay={separators.unhighlight}>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 22,
    alignItems: 'center',
    backgroundColor: '#FF00FF',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
