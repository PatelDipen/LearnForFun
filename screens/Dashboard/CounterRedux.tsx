import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {RootState, store, AppDispatch} from '../../ReduxToolkitThunk/Store';
import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
} from '../../ReduxToolkitThunk/CounterSlice';

const CounterRedux = () => {
  return (
    <Provider store={store}>
      <Counter></Counter>
    </Provider>
  );
};

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const countAsync = useSelector(
    (state: RootState) => state.counter.countAsync,
  );

  // AppDispatch is required when we are dealing with async actions
  // If we dont have async actions, we can use useDispatch() without any type
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View>
      <Text>Counter Redux-Toolkit</Text>
      <View style={styles.container}>
        <Text>Sync Counter</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(increment(1))}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{count}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(decrement({decrementCount: 1}))}>
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text>Async Counter</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(incrementAsync({incrementCount: 2}))}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{countAsync}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(decrementAsync({decrementCount: 2}))}>
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CounterRedux;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: '#FF00D0',
  },
  text: {
    margin: 8,
    padding: 8,
    textAlign: 'center',
    fontSize: 24,
  },
  button: {
    margin: 10,
    padding: 22,
    alignItems: 'center',
    backgroundColor: '#FF0000',
  },
});
