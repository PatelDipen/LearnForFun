import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const TextViewScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [repeatePhoneNumber, setRepeatePhoneNumber] = useState('');

  const isNumberEqual = repeatePhoneNumber === phoneNumber;
  const rp = isNumberEqual
    ? 'Phone numbers are equal'
    : 'Phone numbers are not equal';

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputtext}
        onChangeText={text => setPhoneNumber(text)}
        value={phoneNumber}
        placeholder="Enter your phone number"
        keyboardType="numeric"
      />
      <Text style={[styles.text, [styles.positivetext]]}>{phoneNumber}</Text>
      <TextInput
        style={styles.inputtext}
        onChangeText={setRepeatePhoneNumber}
        value={repeatePhoneNumber}
        placeholder="Enter your phone number again"
        keyboardType="numeric"
      />
      <Text
        style={[
          styles.text,
          [isNumberEqual ? styles.positivetext : styles.negativetext],
        ]}>
        {rp}
      </Text>
    </View>
  );
};

export default TextViewScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    margin: 10,
  },
  inputtext: {
    fontSize: 20,
    borderColor: 'red',
    borderWidth: 1,
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
  positivetext: {
    textAlign: 'right',
    color: 'green',
  },
  negativetext: {
    textAlign: 'right',
    color: 'red',
  },
});
