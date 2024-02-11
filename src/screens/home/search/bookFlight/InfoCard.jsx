import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import colors from '../../../../constants/colors';

const InfoCard = ({type, city, airport, terminal, time}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.type}>{type}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {type === 'Departure' && (
          <Image
            style={{height: 25, width: 25}}
            source={require('../../../../assets/icons/takeoff.png')}
          />
        )}
        {type === 'Arrival' && (
          <Image
            style={{height: 25, width: 25}}
            source={require('../../../../assets/icons/landing.png')}
          />
        )}
        <View style={{paddingLeft: 10}}>
          <Text style={styles.info}>{city}</Text>
          <Text style={styles.info}>{airport}</Text>

          <Text style={styles.info}>{`Terminal ${terminal}`}</Text>
          <Text style={styles.info}>{`${type} Time ${time}`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flightInfo: {
    fontFamily: 'DMSans-Regular',
    color: colors.BLACK,
    fontSize: 16,
  },
  card: {
    padding: 15,
    borderWidth: 0.5,
    borderColor: colors.LIGHT_GRAY,
    borderRadius: 8,
  },
  info: {
    fontFamily: 'DMSans-Regular',
    color: colors.BLACK,
    fontSize: 16,
  },
  type: {
    color: colors.BLACK,
    fontFamily: 'DMSans-Bold',
    fontSize: 20,
    paddingBottom: 10,
  },
});

export default InfoCard;
