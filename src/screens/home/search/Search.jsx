import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Background from '../../../components/Background';
import colors from '../../../constants/colors';
import screenNames from '../../../constants/screenNames';

const Search = ({navigation}) => {
  return (
    <Background>
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
      <View style={styles.list}>
        <Text style={styles.title}>JetSetGo</Text>
        <Text style={styles.info}>
          Enter from and destination to start searching for flights.
        </Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 0.25,
    backgroundColor: colors.PEACOCK_GREEN,
    marginTop: 25,
    marginHorizontal: 10,
    justifyContent: 'space-evenly',
    borderRadius: 8,
  },
  list: {flex: 0.75},
  title: {
    fontSize: 30,
    color: colors.PEACOCK_GREEN,
    fontWeight: '800',
    alignSelf: 'center',
    paddingTop: 20,
  },
  info: {
    color: colors.PEACOCK_GREEN,
    textAlign: 'center',
  },
  box: {
    width: '90%',
    backgroundColor: colors.LIGHT_GRAY,
    alignSelf: 'center',
    borderRadius: 5,
  },
  boxText: {color: colors.GRAY, padding: 15},
});

export default Search;
