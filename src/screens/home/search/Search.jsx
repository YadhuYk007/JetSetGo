import React, {useEffect, useState} from 'react';
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
import ListItem from '../../../components/ListItem';
import FilterModal from '../../../components/Modals/FilterModal';
import SortModal from '../../../components/Modals/SortModal';
import {formattedDate} from '../../../utils/time';
import {setType} from '../../../redux/slices/bookingSlice';

const Search = ({navigation}) => {
  const data = useSelector(state => state.flights.flightData);
  const sort = useSelector(state => state.flights.sort);
  const filter = useSelector(state => state.flights.filter);
  const source = useSelector(state => state.bookings.source);
  const destination = useSelector(state => state.bookings.destination);
  const dispatch = useDispatch();
  const [filterVisible, setFilterVisible] = useState(false);
  const [sortVisible, setSortVisible] = useState(false);
  const [flightData, setFlightData] = useState(data);

  useEffect(() => {
    GetFlights();
  }, []);

  useEffect(() => {
    setFlightData(data);
  }, [data]);

  useEffect(() => {
    sortData();
  }, [sort]);

  useEffect(() => {
    filter.length > 0 ? filterData() : null;
  }, [filter]);

  const sortData = () => {
    const unsorted = [...data];
    if (sort === 'ascending') {
      setFlightData(
        unsorted.sort((a, b) => parseFloat(a.fare) - parseFloat(b.fare)),
      );
    } else if (sort === 'descending') {
      setFlightData(
        unsorted.sort((a, b) => parseFloat(b.fare) - parseFloat(a.fare)),
      );
    } else if (sort === undefined || sort === 'none') {
      setFlightData(unsorted);
    }
  };

  const filterData = () => {
    const unfiltered = [...filter];
    const filteredNames = unfiltered
      .filter(item => item.is_active)
      .map(item => item.name);
    const aircrafts = [...flightData];
    const filteredArray = aircrafts.filter(item =>
      filteredNames.includes(item.displayData.airlines[0].airlineName),
    );
    setFlightData(filteredArray);
  };

  const startSearch = () => {
    const aircrafts = [...flightData];
    const filteredArray = aircrafts.filter(
      item =>
        item.displayData.source.airport.cityName === source &&
        item.displayData.destination.airport.cityName === destination,
    );
    setFlightData(filteredArray);
  };

  return (
    <Background>
      <Text style={styles.title}>JetSetGo</Text>
      <View style={styles.card}>
        <View style={{flex: 0.9}}>
          <TouchableOpacity
            style={styles.box}
            activeOpacity={0.8}
            onPress={() => {
              dispatch(setType('source'));
              navigation.navigate(screenNames.LOCATIONS);
            }}>
            <Text style={styles.boxText}>{source}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
            activeOpacity={0.8}
            onPress={() => {
              dispatch(setType('destination'));
              navigation.navigate(screenNames.LOCATIONS);
            }}>
            <Text style={styles.boxText}>{destination}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{flex: 0.1}}
          activeOpacity={0.8}
          onPress={() => {
            startSearch();
          }}>
          <Image
            style={{height: 25, width: 25}}
            source={require('../../../assets/icons/search.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.listView}>
        <View style={styles.filter}>
          <TouchableOpacity
            onPress={() => {
              setFilterVisible(true);
            }}>
            <Image
              style={{height: 25, width: 25}}
              source={require('../../../assets/icons/filter.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSortVisible(true);
            }}>
            <Image
              style={{height: 25, width: 25}}
              source={require('../../../assets/icons/sorting.png')}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={flightData}
          renderItem={item => {
            return (
              <ListItem
                airlineName={item.item.displayData.airlines[0].airlineName}
                airlineNumber={item.item.displayData.airlines[0].flightNumber}
                sourceCity={`${item.item.displayData.source.airport.cityName}(${item.item.displayData.source.airport.airportCode})`}
                departTime={formattedDate(
                  new Date(item.item.displayData.source.depTime),
                )}
                arrivalTime={formattedDate(
                  new Date(item.item.displayData.destination.arrTime),
                )}
                destinationCity={`${item.item.displayData.destination.airport.cityName}(${item.item.displayData.destination.airport.airportCode})`}
                fare={item.item.fare}
                onPressed={() => {
                  dispatch(setSelectedFlightData(item.item));
                  navigation.navigate(screenNames.FLIGHT_INFO);
                }}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={() => {
            return <Text style={styles.empty}>No Flights Found!</Text>;
          }}
        />
      </View>
      <FilterModal
        visibility={filterVisible}
        onApply={() => {
          setFilterVisible(false);
        }}
      />
      <SortModal
        visibility={sortVisible}
        onApply={() => {
          setSortVisible(false);
        }}
      />
    </Background>
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
    marginVertical: 3,
  },
  boxText: {color: colors.GRAY, padding: 15},
  listView: {
    flex: 0.8,
    marginHorizontal: 10,
    paddingBottom: 56,
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  empty: {
    color: colors.BLACK,
    marginTop: 100,
    alignSelf: 'center',
    fontFamily: 'DMSans-Regular',
    fontSize: 18,
  },
});

export default Search;
