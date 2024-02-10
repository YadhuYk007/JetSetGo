import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Background from '../../../components/Background';
import colors from '../../../constants/colors';
import screenNames from '../../../constants/screenNames';
import {GetFlights} from '../../../api';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectedFlightData} from '../../../redux/slices/flightsSlice';

const Search = ({navigation}) => {
  const data = useSelector(state => state.flights.flightData);
  const dispatch = useDispatch();
  useEffect(() => {
    GetFlights();
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.itemView}
        onPress={() => {
          dispatch(setSelectedFlightData(item));
          navigation.navigate(screenNames.FLIGHT_INFO);
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.infoHeader}>
            {`${item.displayData.source.airport.cityName}(${item.displayData.source.airport.airportCode})`}
          </Text>
          <Text style={styles.infoHeader}>
            {`${item.displayData.destination.airport.cityName}(${item.displayData.destination.airport.airportCode})`}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.info}>{item.displayData.source.depTime}</Text>
          <Text style={styles.info}>
            {item.displayData.destination.arrTime}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{paddingRight: 5}}>
              <Image
                style={{height: 15, width: 15}}
                source={require('../../../assets/icons/plane.png')}
              />
            </View>
            <View>
              <Text style={styles.infoHeader}>
                {item.displayData.airlines[0].airlineName}
              </Text>
              <Text style={styles.info}>
                {item.displayData.airlines[0].flightNumber}
              </Text>
            </View>
          </View>

          <Text style={styles.infoHeader}>{`Rs ${item.fare}/-`}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Background>
      <Text style={styles.title}>JetSetGo</Text>
      <View style={styles.card}>
        <View>
          <TouchableOpacity
            style={styles.box}
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate(screenNames.LOCATIONS);
            }}>
            <Text style={styles.boxText}>Source</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.box}
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate(screenNames.LOCATIONS);
            }}>
            <Text style={styles.boxText}>Destination</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 0.75, marginHorizontal: 10, paddingBottom: 60}}>
        <FlatList
          data={data}
          renderItem={item => renderItem(item)}
          key={item => item.id}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 0.25,
    backgroundColor: colors.PEACOCK_GREEN,
    margin: 10,
    justifyContent: 'space-evenly',
    borderRadius: 8,
  },
  list: {flex: 0.75},
  title: {
    fontSize: 30,
    color: colors.PEACOCK_GREEN,
    fontFamily: 'DMSans-Bold',
    paddingTop: 20,
    textAlign: 'center',
  },
  box: {
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 5,
  },
  boxText: {color: colors.GRAY, padding: 15},
  info: {
    fontFamily: 'DMSans-Regular',
    color: colors.BLACK,
    fontSize: 14,
  },
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

export default Search;
