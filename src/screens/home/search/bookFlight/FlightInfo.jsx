import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Background from '../../../../components/Background';
import colors from '../../../../constants/colors';
import {useSelector} from 'react-redux';
import PrimaryButton from '../../../../components/PrimaryButton';
import screenNames from '../../../../constants/screenNames';
import {formattedDate} from '../../../../utils/time';

const FlightInfo = ({navigation}) => {
  const flightData = useSelector(state => state.flights.selectedFlight);
  return (
    <Background>
      <ScrollView>
        <View style={{marginHorizontal: 10}}>
          <Text style={styles.title}>Flight Details</Text>
          <View
            style={{padding: 20, flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{height: 25, width: 25}}
              source={require('../../../../assets/icons/plane.png')}
            />
            <View style={{paddingLeft: 10}}>
              <Text
                style={
                  styles.flightName
                }>{`${flightData.displayData.airlines[0].airlineName}`}</Text>
              <Text
                style={
                  styles.flightInfo
                }>{`${flightData.displayData.airlines[0].flightNumber}`}</Text>
              <Text
                style={
                  styles.flightInfo
                }>{`${flightData.displayData.airlines[0].airlineCode}`}</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.type}>Departure</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{height: 25, width: 25}}
                source={require('../../../../assets/icons/takeoff.png')}
              />
              <View style={{paddingLeft: 10}}>
                <Text
                  style={
                    styles.info
                  }>{`${flightData.displayData.source.airport.cityName} (${flightData.displayData.source.airport.airportCode})`}</Text>
                <Text
                  style={
                    styles.info
                  }>{`${flightData.displayData.source.airport.airportName}`}</Text>

                <Text
                  style={
                    styles.info
                  }>{`Terminal ${flightData.displayData.source.airport.terminal}`}</Text>
                <Text style={styles.info}>{`Depart Time ${formattedDate(
                  new Date(flightData.displayData.source.depTime),
                )}`}</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.bar} />
            <Text
              style={
                styles.info
              }>{`   ${flightData.displayData.totalDuration}`}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.type}>Arrival</Text>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{height: 25, width: 25}}
                source={require('../../../../assets/icons/landing.png')}
              />
              <View style={{paddingLeft: 10}}>
                <Text
                  style={
                    styles.info
                  }>{`${flightData.displayData.destination.airport.cityName} (${flightData.displayData.destination.airport.airportCode})`}</Text>
                <Text
                  style={
                    styles.info
                  }>{`${flightData.displayData.destination.airport.airportName}`}</Text>
                <Text
                  style={
                    styles.info
                  }>{`Terminal ${flightData.displayData.destination.airport.terminal}`}</Text>
                <Text style={styles.info}>{`Arrival Time ${formattedDate(
                  new Date(flightData.displayData.destination.arrTime),
                )}`}</Text>
              </View>
            </View>
          </View>
          <Text style={styles.fare}>{` Fare : Rs${flightData.fare}`}</Text>
        </View>
      </ScrollView>
      <View style={{marginBottom: 10}}>
        <PrimaryButton
          text={'Book this flight'}
          onPressed={() => {
            navigation.navigate(screenNames.FLIGHT_CONFIRM);
          }}
        />
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
  },
  info: {
    fontFamily: 'DMSans-Regular',
    color: colors.BLACK,
    fontSize: 16,
  },
  fare: {
    color: 'black',
    fontFamily: 'DMSans-Bold',
    fontSize: 20,
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

export default FlightInfo;
