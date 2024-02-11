/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import colors from '../../../constants/colors';
import strings from '../../../constants/strings';
import ListItem from '../../../components/ListItem';
import {formattedDate} from '../../../utils/time';
import {setSelectedFlightData} from '../../../redux/slices/flightsSlice';
import {useDispatch, useSelector} from 'react-redux';

const FlightList = ({onItemPressed, setFilterVisible, onSortVisible}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.flights.flightData);
  const [flightData, setFlightData] = useState();
  const source = useSelector(state => state.bookings.source);
  const destination = useSelector(state => state.bookings.destination);
  const sort = useSelector(state => state.flights.sort);
  const filter = useSelector(state => state.flights.filter);

  useEffect(() => {
    setFlightData(data);
  }, [data]);

  useEffect(() => {
    sort === 'init' ? null : sortData();
    filterData();
  }, [sort, filter]);

  const sortData = () => {
    setFlightData(prevData => {
      const unsorted = [...prevData];
      let sorted = [];
      if (sort === 'ascending') {
        sorted = unsorted.sort(
          (a, b) => parseFloat(a.fare) - parseFloat(b.fare),
        );
      } else if (sort === 'descending') {
        sorted = unsorted.sort(
          (a, b) => parseFloat(b.fare) - parseFloat(a.fare),
        );
      } else if (sort === 'none') {
        sorted = data;
      }
      return sorted;
    });
  };

  const filterData = () => {
    const unfiltered = [...filter];
    const filteredNames = unfiltered
      .filter(item => item.is_active)
      .map(item => item.name);
    const aircrafts = [...data];
    const filteredArray = aircrafts.filter(item =>
      filteredNames.includes(item.displayData.airlines[0].airlineName),
    );
    setFlightData(filteredArray);
  };

  useEffect(() => {
    if (source != 'Source' && destination != 'Destination') {
      startSearch();
    }
  }, [source, destination]);

  const startSearch = () => {
    const aircrafts = [...data];
    const filteredArray = aircrafts.filter(
      item =>
        item.displayData.source.airport.cityName === source &&
        item.displayData.destination.airport.cityName === destination,
    );
    setFlightData(filteredArray);
  };

  return (
    <View style={styles.listView}>
      <View style={styles.filter}>
        <TouchableOpacity
          onPress={() => {
            setFilterVisible();
          }}
          style={{flexDirection: 'row'}}>
          <Text style={styles.settings}>Filter</Text>
          <Image
            style={styles.filters}
            source={require('../../../assets/icons/filter.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onSortVisible();
          }}
          style={{flexDirection: 'row'}}>
          <Text style={styles.settings}>Sort</Text>
          <Image
            style={styles.filters}
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
                onItemPressed();
              }}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => {
          if (source !== 'Source' && destination !== 'Destination') {
            return (
              <Text
                style={
                  styles.empty
                }>{`${strings.NO_FLIGHTS} from ${source} to ${destination}`}</Text>
            );
          } else {
            return <Text style={styles.empty}>{`${strings.NO_FLIGHTS}!`}</Text>;
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filters: {height: 20, width: 20},
  settings: {
    color: colors.BLACK,
    fontFamily: 'DMSans-Regular',
    fontSize: 16,
  },
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

export default FlightList;
