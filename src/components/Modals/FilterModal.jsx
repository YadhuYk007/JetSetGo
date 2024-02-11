/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../constants/colors';
import PrimaryButton from '../PrimaryButton';
import CheckBox from '@react-native-community/checkbox';
import {useDispatch, useSelector} from 'react-redux';
import {setFilter} from '../../redux/slices/flightsSlice';

const FilterModal = ({visibility, onApply}) => {
  const data = useSelector(state => state.flights.flightData);
  const [airlines, setAirlines] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    /*** for getting all possible airline name from the data ***/
    const items = [];
    data.forEach(element => {
      const name = element.displayData.airlines[0].airlineName;
      if (!items.some(obj => obj.name === name)) {
        items.push({name, is_active: false, id: items.length});
      }
    });
    setAirlines(items);
  }, []);

  const toggleCheckbox = id => {
    const updatedAirlines = airlines.map(item =>
      item.id === id ? {...item, is_active: !item.is_active} : item,
    );
    setAirlines(updatedAirlines);
  };

  return (
    <Modal animationType={'slide'} visible={visibility} transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.box}>
          <View style={styles.title}>
            <Text style={styles.bottomTextCollection}>{`Filters`}</Text>
          </View>
          <Text style={styles.info}>{`Airlines`}</Text>
          <View style={{marginVertical: 10}}>
            {airlines.length > 0 &&
              airlines.map(item => (
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center'}}
                  onPress={() => toggleCheckbox(item.id)}
                  key={item.id}>
                  <CheckBox
                    value={item.is_active}
                    tintColors={{
                      true: colors.PEACOCK_GREEN,
                      false: colors.PEACOCK_GREEN,
                    }}
                    style={{
                      transform: [{scaleX: 0.7}, {scaleY: 0.7}],
                    }}
                  />
                  <Text style={{color: colors.BLACK}}>{item.name}</Text>
                </TouchableOpacity>
              ))}
          </View>
          <PrimaryButton
            text={'Apply'}
            onPressed={() => {
              dispatch(setFilter(airlines));
              onApply();
            }}
          />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  centeredView: {
    backgroundColor: 'rgba(50,50,50,0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 30,
    width: '75%',
    paddingHorizontal: 16,
  },
  bottomTextCollection: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'DMSans-Bold',
  },
  info: {
    fontSize: 14,
    fontFamily: 'DMSans-Regular',
    color: colors.BLACK,
    paddingVertical: 5,
  },
});

export default FilterModal;
