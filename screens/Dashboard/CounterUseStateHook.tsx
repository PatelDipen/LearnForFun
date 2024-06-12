import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const CounterUseStateHook = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Counter Use State</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count + 1)}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{count}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count - 1)}>
        <Text>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CounterUseStateHook;

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
