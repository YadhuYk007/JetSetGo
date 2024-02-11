import React, {useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../constants/colors';
import PrimaryButton from '../PrimaryButton';
import RadioForm from 'react-native-simple-radio-button';
import {useDispatch, useSelector} from 'react-redux';
import {setSortType} from '../../redux/slices/flightsSlice';

const SortModal = ({visibility, onApply}) => {
  const values = [
    {label: 'No Filter', value: 'none'},
    {label: 'Price Low-High', value: 'ascending'},
    {label: 'Price High-Low', value: 'descending'},
  ];
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const sort = useSelector(state => state.flights.sort);

  const setInitial = () => {
    /***  setting initial value, if user has set any sort previously, it ill be set ***/

    if (sort == undefined || sort == 'none') {
      return 0;
    } else if (sort == 'ascending') {
      return 1;
    } else if (sort == 'descending') {
      return 2;
    }
  };

  return (
    <Modal animationType={'slide'} visible={visibility} transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.box}>
          <View style={styles.title}>
            <Text style={styles.bottomTextCollection}>{`Sort`}</Text>
            <TouchableOpacity
              onPress={() => {
                onApply();
              }}>
              <Image
                style={styles.filters}
                source={require('../../assets/icons/close.png')}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.info}>{`Sort Airlines By Price`}</Text>
          <View style={{marginVertical: 10}}>
            <RadioForm
              radio_props={values}
              onPress={value => {
                setValue(value);
              }}
              initial={setInitial()}
            />
          </View>

          <PrimaryButton
            text={'Apply'}
            onPressed={() => {
              dispatch(setSortType(value));
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
    justifyContent: 'space-between',
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
  filters: {height: 15, width: 15},
});

export default SortModal;
