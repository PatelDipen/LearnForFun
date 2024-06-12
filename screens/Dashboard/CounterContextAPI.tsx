import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CounterContextProvider, {
  useCounter,
} from '../../ContextAPI/CounterContext';

const CounterContextAPI = () => {
  return (
    <CounterContextProvider>
      <CounterComp />
    </CounterContextProvider>
  );
};

const CounterComp = () => {
  const {increment, decrement, counter} = useCounter();

  return (
    <View>
      <Text style={styles.text}>Count: {counter.count}</Text>
      <TouchableOpacity style={styles.button} onPress={() => increment(1)}>
        <Text style={{color: 'white'}}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => decrement(1)}>
        <Text style={{color: 'white'}}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CounterContextAPI;

const styles = StyleSheet.create({
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
