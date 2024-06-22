import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GuitarCord from '../Components/GuitarCord';
import {ScrollView} from 'react-native-gesture-handler';

const InstrumentScreen = () => {
  return (
    <ScrollView>
      <View style={styles.guitar_container}>
        <GuitarCord buttonMarging={'5%'} />
        <GuitarCord buttonMarging={'20%'} />
        <GuitarCord buttonMarging={'40%'} />
        <GuitarCord buttonMarging={'60%'} />
        <GuitarCord buttonMarging={'80%'} />
      </View>
    </ScrollView>
  );
};

export default InstrumentScreen;

const styles = StyleSheet.create({
  guitar_container: {
    flex: 1,
    flexDirection: 'column',

    backgroundColor: 'lightblue',
    marginHorizontal: 36,
    marginVertical: 12,
  },
  guitar_cord: {},
});
