import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Background from '../../../../components/Background';
import colors from '../../../../constants/colors';
import {useSelector} from 'react-redux';
import PrimaryButton from '../../../../components/PrimaryButton';

const BookingConfirmation = () => {
  const flightData = useSelector(state => state.flights.selectedFlight);
  return (
    <Background>
      <ScrollView>
        <View style={{marginHorizontal: 10}}>
          <Text style={styles.title}>Confirm Booking</Text>
          <View style={styles.card}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={
                  styles.info
                }>{`${flightData.displayData.source.airport.cityName} (${flightData.displayData.source.airport.airportCode})`}</Text>
              <Text
                style={
                  styles.info
                }>{`${flightData.displayData.destination.airport.cityName} (${flightData.displayData.destination.airport.airportCode})`}</Text>
            </View>
            <View
              style={{
                width: 20,
                height: 2,
                backgroundColor: colors.BLACK,
                alignSelf: 'center',
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={
                  styles.minInfo
                }>{`${flightData.displayData.source.airport.airportName}`}</Text>
              <Text
                style={
                  styles.minInfo
                }>{`${flightData.displayData.destination.airport.airportName}`}</Text>
            </View>
          </View>
          <Text
            style={
              styles.info
            }>{`Aircraft - ${flightData.displayData.airlines[0].airlineName} ${flightData.displayData.airlines[0].airlineCode} ${flightData.displayData.airlines[0].flightNumber}`}</Text>
          <Text
            style={
              styles.info
            }>{`Travelling on ${flightData.displayData.source.depTime}`}</Text>

          <Text
            style={styles.fare}>{`Total Amount : Rs${flightData.fare}`}</Text>
        </View>
      </ScrollView>
      <View style={{marginBottom: 10}}>
        <PrimaryButton text={'Confirm'} />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.PEACOCK_GREEN,
    fontSize: 24,
    marginTop: 30,
    fontFamily: 'DMSans-Bold',
  },
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
  card: {
    padding: 15,
    borderWidth: 0.5,
    borderColor: colors.LIGHT_GRAY,
    borderRadius: 8,
    marginVertical: 20,
  },
  info: {
    fontFamily: 'DMSans-Regular',
    color: colors.BLACK,
    fontSize: 16,
  },
  minInfo: {
    fontFamily: 'DMSans-Regular',
    color: colors.BLACK,
    fontSize: 10,
  },
  fare: {
    color: 'black',
    fontFamily: 'DMSans-Bold',
    fontSize: 20,
    marginVertical: 10,
  },
  bar: {
    height: 50,
    width: 3,
    backgroundColor: colors.PEACOCK_GREEN,
    marginLeft: 20,
  },
  type: {
    color: colors.BLACK,
    fontFamily: 'DMSans-Bold',
    fontSize: 20,
    paddingBottom: 10,
  },
});

export default BookingConfirmation;
