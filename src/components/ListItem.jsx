import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../constants/colors';

const ListItem = ({
  sourceCity,
  destinationCity,
  departTime,
  arrivalTime,
  airlineName,
  airlineNumber,
  fare,
  onPressed,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.itemView}
      onPress={() => {
        onPressed();
      }}>
      <View style={styles.itemRowStyle}>
        <Text style={styles.infoHeader}>{`${sourceCity}`}</Text>
        <Text style={styles.infoHeader}>{`${destinationCity}`}</Text>
      </View>
      <View style={styles.itemRowStyle}>
        <Text style={styles.info}>{departTime}</Text>
        <Text style={styles.info}>{arrivalTime}</Text>
      </View>
      <View style={styles.itemRowStyle}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{paddingRight: 5}}>
            <Image
              style={{height: 15, width: 15}}
              source={require('../assets/icons/plane.png')}
            />
          </View>
          <View>
            <Text style={styles.infoHeader}>{airlineName}</Text>
            <Text style={styles.info}>{airlineNumber}</Text>
          </View>
        </View>

        <Text style={styles.infoHeader}>{`Rs ${fare}/-`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  info: {
    fontFamily: 'DMSans-Regular',
    color: colors.BLACK,
    fontSize: 14,
  },
  itemRowStyle: {flexDirection: 'row', justifyContent: 'space-between'},
  infoHeader: {
    fontFamily: 'DMSans-Bold',
    color: colors.BLACK,
    fontSize: 16,
  },
  itemView: {
    borderColor: colors.PEACOCK_GREEN,
    borderWidth: 2,
    borderRadius: 8,
    marginVertical: 5,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default ListItem;
