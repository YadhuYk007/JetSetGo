/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Background from '../../../components/Background';
import colors from '../../../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {setDestination, setSource} from '../../../redux/slices/bookingSlice';

const Locations = ({navigation}) => {
  const data = useSelector(state => state.flights.flightData);
  const type = useSelector(state => state.bookings.type);
  const [text, setText] = useState('');
  const [cityData, setCityData] = useState([]);
  const cities = useRef([]);
  const dispatch = useDispatch();

  useEffect(() => {
    data.forEach(element => {
      let city1 = element.displayData.source.airport.cityName;
      let city2 = element.displayData.destination.airport.cityName;
      cities.current.includes(city1)
        ? cities.current.includes(city2)
          ? null
          : cities.current.push(city2)
        : cities.current.push(city1);
    });
  }, []);

  useEffect(() => {
    if (text.length > 0) {
      let filterCitiesByCharacter = cities.current.filter(city =>
        city.includes(text),
      );
      setCityData(filterCitiesByCharacter);
    } else {
      setCityData([]);
    }
  }, [text]);

  return (
    <Background>
      <View style={{marginHorizontal: 15}}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Location"
          placeholderTextColor={colors.GRAY}
          onChangeText={setText}
          value={text}
        />
        <FlatList
          data={cityData}
          renderItem={item => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.itemView}
                onPress={() => {
                  if (type === 'source') {
                    dispatch(setSource(item.item));
                  } else if (type === 'destination') {
                    dispatch(setDestination(item.item));
                  }
                  setText(item.item);
                  navigation.goBack();
                }}>
                <Text style={styles.itemText}>{item.item}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: colors.GRAY,
    borderWidth: 1,
    borderRadius: 8,
    color: 'black',
    marginTop: 40,
    paddingLeft: 10,
    fontSize: 14,
  },
  itemView: {
    backgroundColor: colors.PEACOCK_GREEN,
    marginVertical: 1,
    borderRadius: 5,
  },
  itemText: {color: 'white', padding: 15},
});

export default Locations;
