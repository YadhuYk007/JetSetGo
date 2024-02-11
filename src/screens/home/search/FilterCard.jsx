import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {setDestination, setSource} from '../../../redux/slices/bookingSlice';

const FilterCard = ({onDestPress, onSrcPress}) => {
  const dispatch = useDispatch();
  const source = useSelector(state => state.bookings.source);
  const destination = useSelector(state => state.bookings.destination);
  return (
    <View style={styles.card}>
      <View style={{flex: 0.9}}>
        <TouchableOpacity
          style={styles.box}
          activeOpacity={0.8}
          onPress={() => {
            onSrcPress();
          }}>
          <Image
            style={styles.search}
            source={require('../../../assets/icons/takeoff.png')}
          />
          <Text style={styles.boxText}>{source}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          activeOpacity={0.8}
          onPress={() => {
            onDestPress();
          }}>
          <Image
            style={styles.search}
            source={require('../../../assets/icons/landing.png')}
          />
          <Text style={styles.boxText}>{destination}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{flex: 0.1}}
        activeOpacity={0.8}
        onPress={() => {
          if (source !== 'Source' && destination !== 'Destination') {
            dispatch(setDestination(source));
            dispatch(setSource(destination));
          }
        }}>
        <Image
          style={styles.search}
          source={require('../../../assets/icons/change.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 0.2,
    backgroundColor: colors.PEACOCK_GREEN,
    margin: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 5,
    marginVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
  },
  boxText: {
    color: colors.BLACK,
    padding: 15,
    fontFamily: 'DMSans-Bold',
    fontSize: 14,
  },
  search: {height: 25, width: 25},
});

export default FilterCard;
