import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Background from '../../../../components/Background';
import colors from '../../../../constants/colors';
import {useSelector} from 'react-redux';
import PrimaryButton from '../../../../components/PrimaryButton';
import screenNames from '../../../../constants/screenNames';
import {formattedDate} from '../../../../utils/time';
import InfoCard from './InfoCard';
import Duration from './Duration';
import Aircraft from './Aircraft';

const FlightInfo = ({navigation}) => {
  const flightData = useSelector(state => state.flights.selectedFlight);
  return (
    <Background>
      <ScrollView>
        <View style={{marginHorizontal: 10}}>
          <Text style={styles.title}>Flight Details</Text>
          <Aircraft
            name={flightData.displayData.airlines[0].airlineName}
            number={flightData.displayData.airlines[0].flightNumber}
            code={flightData.displayData.airlines[0].airlineCode}
          />
          <InfoCard
            type={'Departure'}
            city={`${flightData.displayData.source.airport.cityName} (${flightData.displayData.source.airport.airportCode})`}
            airport={flightData.displayData.source.airport.airportName}
            terminal={flightData.displayData.source.airport.termina}
            time={formattedDate(
              new Date(flightData.displayData.source.depTime),
            )}
          />
          <Duration duration={flightData.displayData.totalDuration} />
          <InfoCard
            type={'Arrival'}
            city={`${flightData.displayData.destination.airport.cityName} (${flightData.displayData.destination.airport.airportCode})`}
            airport={flightData.displayData.destination.airport.airportName}
            terminal={flightData.displayData.destination.airport.terminal}
            time={formattedDate(
              new Date(flightData.displayData.destination.arrTime),
            )}
          />
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
  fare: {
    color: 'black',
    fontFamily: 'DMSans-Bold',
    fontSize: 20,
  },
});

export default FlightInfo;
