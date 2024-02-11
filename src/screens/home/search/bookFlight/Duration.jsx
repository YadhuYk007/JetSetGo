import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../../../constants/colors';

const Duration = ({duration}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={styles.bar} />
      <Text style={styles.info}>{`   ${duration}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    fontFamily: 'DMSans-Regular',
    color: colors.BLACK,
    fontSize: 16,
  },

  bar: {
    height: 50,
    width: 3,
    backgroundColor: colors.PEACOCK_GREEN,
    marginLeft: 20,
  },
});

export default Duration;
