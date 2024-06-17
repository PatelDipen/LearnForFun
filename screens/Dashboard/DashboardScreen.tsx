import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';
import {FEATURE_TYPE, NAV_SCREEN} from '../UIConstants';
import {
  DashboardStackNavigationProps,
  DashboardStackParamList,
} from '../../Navigation/BottomTabNavigator';
import {StackNavigationProp} from '@react-navigation/stack';

type Prop = DashboardStackNavigationProps<NAV_SCREEN.DASHBOARD_SCREEN>;

const DATA = [
  {title: FEATURE_TYPE.FEATURE_TEXT_VIEW},
  {title: FEATURE_TYPE.FEATURE_MODAL},
  {title: FEATURE_TYPE.FEATURE_USE_STATE_HOOK},
  {title: FEATURE_TYPE.FEATURE_CONTEXT_API},
  {title: FEATURE_TYPE.FEATURE_REDUX_TOOLKIT},
  {title: FEATURE_TYPE.FEATURE_REDUX_TOOLKIT_SAGA},
  {title: FEATURE_TYPE.FEATURE_VIEW_PAGER},
  {title: FEATURE_TYPE.FEATURE_FONT_TEST},
];

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
      if (title === FEATURE_TYPE.FEATURE_TEXT_VIEW) {
        navigation.navigate(NAV_SCREEN.TEXTVIEW_SCREEN);
      } else if (title === FEATURE_TYPE.FEATURE_MODAL) {
        navigation.navigate(NAV_SCREEN.MODAL_SCREEN);
      } else if (title === FEATURE_TYPE.FEATURE_USE_STATE_HOOK) {
        navigation.navigate(NAV_SCREEN.COUNTER_USESTATE_SCREEN);
      } else if (title === FEATURE_TYPE.FEATURE_CONTEXT_API) {
        navigation.navigate(NAV_SCREEN.COUNTER_CONTEXT_API_SCREEN);
      } else if (title === FEATURE_TYPE.FEATURE_REDUX_TOOLKIT) {
        navigation.navigate(NAV_SCREEN.COUNTER_REDUX_SCREEN);
      } else if (title === FEATURE_TYPE.FEATURE_REDUX_TOOLKIT_SAGA) {
        navigation.navigate(NAV_SCREEN.COUNTER_REDUX_SAGA_SCREEN);
      } else if (title === FEATURE_TYPE.FEATURE_VIEW_PAGER) {
        navigation.navigate(NAV_SCREEN.VIEW_PAGER);
      } else if (title === FEATURE_TYPE.FEATURE_FONT_TEST) {
        navigation.navigate(NAV_SCREEN.FONT_TEST);
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
    fontSize: 22,
  },
});
