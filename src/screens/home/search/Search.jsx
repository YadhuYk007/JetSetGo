/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {BackHandler, StyleSheet, Text} from 'react-native';
import Background from '../../../components/Background';
import colors from '../../../constants/colors';
import screenNames from '../../../constants/screenNames';
import {GetFlights} from '../../../api';
import {useDispatch} from 'react-redux';
import FilterModal from '../../../components/Modals/FilterModal';
import SortModal from '../../../components/Modals/SortModal';
import {setType} from '../../../redux/slices/bookingSlice';
import strings from '../../../constants/strings';
import FlightList from './FlightList';
import FilterCard from './FilterCard';
import {useBackHandler} from '@react-native-community/hooks';

const Search = ({navigation}) => {
  const dispatch = useDispatch();
  const [filterVisible, setFilterVisible] = useState(false);
  const [sortVisible, setSortVisible] = useState(false);

  useBackHandler(() => {
    if (navigation.isFocused()) {
      BackHandler.exitApp();
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    GetFlights();
  }, []);

  return (
    <Background>
      <Text style={styles.title}>{strings.NAME}</Text>
      <FilterCard
        onDestPress={() => {
          dispatch(setType('destination'));
          navigation.navigate(screenNames.LOCATIONS);
        }}
        onSrcPress={() => {
          dispatch(setType('source'));
          navigation.navigate(screenNames.LOCATIONS);
        }}
      />
      <FlightList
        onItemPressed={() => {
          navigation.navigate(screenNames.FLIGHT_INFO);
        }}
        setFilterVisible={() => {
          setFilterVisible(true);
        }}
        onSortVisible={() => {
          setSortVisible(true);
        }}
      />

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
  title: {
    fontSize: 30,
    color: colors.PEACOCK_GREEN,
    fontFamily: 'DMSans-Bold',
    paddingTop: 20,
    textAlign: 'center',
  },
});

export default Search;
