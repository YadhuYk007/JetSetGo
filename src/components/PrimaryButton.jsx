import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../assets/colors';

const PrimaryButton = ({text, textColor = 'white'}) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={styles.view}
      activeOpacity={0.8}>
      <Text style={[styles.text, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.GREEN_4,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 13,
    alignItems: 'center',
  },
  text: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 16,
    fontWeight: 700,
  },
});

export default PrimaryButton;
