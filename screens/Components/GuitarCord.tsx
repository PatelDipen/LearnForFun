import {
  DimensionValue,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';

interface GuitarCordProps {
  buttonMarging: DimensionValue;
}

const GuitarCord: FC<GuitarCordProps> = ({buttonMarging}): JSX.Element => {
  var [isPress, setIsPress] = useState(false);
  const cordimage = isPress
    ? require('./guitar_green_cord_played.png')
    : require('./guitar_green_cord_default.png');
  const buttonimage = isPress
    ? require('./guitar_button.png')
    : require('./guitar_button.png');

  return (
    <TouchableOpacity
      onPress={() => {
        console.log('###onPress');
        setIsPress(false);
      }}
      onPressOut={() => {
        console.log('onPressOut');
        setIsPress(true);
      }}>
      <View style={styles.cord_container}>
        <Image style={styles.cord_style} source={cordimage} />
        <Image
          style={[styles.button_style, {marginStart: buttonMarging}]}
          source={buttonimage}
        />
      </View>
    </TouchableOpacity>
  );
};

export default GuitarCord;

const styles = StyleSheet.create({
  cord_container: {
    justifyContent: 'center',
    marginVertical: 20,
    backgroundColor: 'blue',
  },
  cord_style: {
    width: '100%',
  },
  button_style: {
    position: 'absolute',
  },
});
