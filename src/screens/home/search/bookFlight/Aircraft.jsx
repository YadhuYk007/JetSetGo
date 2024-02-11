import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import colors from '../../../../constants/colors';

const Aircraft = ({name, number, code}) => {
  return (
    <View style={{padding: 20, flexDirection: 'row', alignItems: 'center'}}>
      <Image
        style={{height: 25, width: 25}}
        source={require('../../../../assets/icons/plane.png')}
      />
      <View style={{paddingLeft: 10}}>
        <Text style={styles.flightName}>{name}</Text>
        <Text style={styles.flightInfo}>{number}</Text>
        <Text style={styles.flightInfo}>{code}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flightName: {
    fontFamily: 'DMSans-Bold',
    color: colors.BLACK,
    fontSize: 20,
  },
  flightInfo: {
    fontFamily: 'DMSans-Regular',
    color: colors.BLACK,
    fontSize: 16,
  },
});

export default Aircraft;
