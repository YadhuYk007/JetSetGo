import React, {useEffect, useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../constants/colors';
import PrimaryButton from '../PrimaryButton';
import CheckBox from '@react-native-community/checkbox';
import {useDispatch, useSelector} from 'react-redux';
import {setFilter} from '../../redux/slices/flightsSlice';

const FilterModal = ({visibility, onApply}) => {
  const data = useSelector(state => state.flights.flightData);
  let checkboxData = null;
  let selectedValues = [];
  let items = [];
  const [airlines, setAirlines] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    data.forEach(element => {
      let name = element.displayData.airlines[0].airlineName;
      let obj = {};
      obj.name = name;
      obj.is_active = false;
      if (!items.some(obj => obj.name === name)) {
        items.push(obj);
      }
    });
    setAirlines(items);
  }, []);

  const toggleCheckbox = (id, index) => {
    selectedValues.includes(id)
      ? selectedValues.splice(selectedValues.indexOf(id), 1)
      : selectedValues.push(id);
    checkboxData = [...airlines];
    checkboxData[index].is_active = !checkboxData[index].is_active;
    setAirlines(checkboxData);
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
              airlines.map((item, i) => {
                return (
                  <TouchableOpacity
                    style={{flexDirection: 'row', alignItems: 'center'}}
                    onPress={() => {
                      toggleCheckbox(item, i);
                    }}
                    key={i}>
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
                );
              })}
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
