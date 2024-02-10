import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../constants/colors';

const PrimaryButton = ({text, textColor = 'white', onPressed}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPressed();
      }}
      style={styles.view}
      activeOpacity={0.8}>
      <Text style={[styles.text, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.PEACOCK_GREEN,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 13,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'DMSans-Bold',
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 16,
  },
});

export default PrimaryButton;
