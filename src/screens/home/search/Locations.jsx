import React, {useEffect, useState} from 'react';
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
import {useSelector} from 'react-redux';

const Locations = () => {
  const data = useSelector(state => state.flights.flightData);
  const [text, setText] = useState('');
  const [cityData, setCityData] = useState([]);
  let cities = [];

  useEffect(() => {
    data.forEach(element => {
      let city1 = element.displayData.source.airport.cityName;
      let city2 = element.displayData.destination.airport.cityName;
      cities.includes(city1)
        ? cities.includes(city2)
          ? null
          : cities.push(city2)
        : cities.push(city1);
    });
  }, []);

  useEffect(() => {
    if (text.length > 0) {
      let filterCitiesByCharacter = cities.filter(city =>
        city.toLowerCase().includes(text),
      );

      console.log(filterCitiesByCharacter);
      setCityData(filterCitiesByCharacter);
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
              <TouchableOpacity activeOpacity={0.8} style={styles.itemView}>
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
