import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import Background from '../../../../components/Background';
import PrimaryButton from '../../../../components/PrimaryButton';
import colors from '../../../../constants/colors';
import screenNames from '../../../../constants/screenNames';
import {useBackHandler} from '@react-native-community/hooks';
import {useDispatch, useSelector} from 'react-redux';
import {addBookingData} from '../../../../redux/slices/bookingSlice';

const Confirmation = ({navigation}) => {
  const flightData = useSelector(state => state.flights.selectedFlight);
  const dispatch = useDispatch();

  useEffect(() => {
    addToBookings();
  }, []);

  const addToBookings = () => {
    dispatch(addBookingData(flightData));
  };
  useBackHandler(() => {
    if (navigation.isFocused()) {
      return true;
    } else {
      return false;
    }
  });
  return (
    <Background>
      <View style={{flex: 0.9, justifyContent: 'center'}}>
        <LottieView
          source={require('../../../../assets/animations/bookingConfirm.json')}
          autoPlay
          loop={false}
          style={{aspectRatio: 1, width: '80%', alignSelf: 'center'}}
        />
        <Text style={styles.confirm}>Tickets Confirmed!</Text>
        <Text style={styles.info}>
          PNR Number and Booking id will be shared via E-Mail and Whatsapp
        </Text>
      </View>
      <View style={{flex: 0.1}}>
        <PrimaryButton
          text={'OK'}
          onPressed={() => {
            navigation.navigate(screenNames.HOME);
          }}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  info: {
    color: colors.PEACOCK_GREEN,
    fontFamily: 'DMSans-Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  confirm: {
    color: colors.PEACOCK_GREEN,
    fontFamily: 'DMSans-Bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Confirmation;
