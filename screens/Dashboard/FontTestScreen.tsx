import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FontTestScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fontRegular}>Font-Nunito-Regular</Text>
      <Text style={styles.fontBold}>Font-Nunito-Bold</Text>
      <Text style={styles.fontItalic}>Font-Nunito-Italic</Text>
      <Text style={styles.fontLight}>Font-Nunito-Light</Text>
    </View>
  );
};

export default FontTestScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  fontRegular: {
    fontFamily: 'nunito_regular',
    fontSize: 20,
    textAlign: 'center',
  },
  fontBold: {
    fontFamily: 'nunito_bold',
    fontSize: 20,
    textAlign: 'center',
  },
  fontItalic: {
    fontFamily: 'nunito_italic',
    fontSize: 20,
    textAlign: 'center',
  },
  fontLight: {
    fontFamily: 'nunito_light',
    fontSize: 20,
    textAlign: 'center',
  },
});
