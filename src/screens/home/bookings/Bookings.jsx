import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Background from '../../../components/Background';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../../../constants/colors';

const Bookings = () => {
  const data = useSelector(data => data.bookings.bookings);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.itemView}
        onPress={() => {
          //dispatch(setSelectedFlightData(item));
          //navigation.navigate(screenNames.FLIGHT_INFO);
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
                {`${item.displayData.airlines[0].airlineName} ${item.displayData.airlines[0].flightNumber}`}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Background>
      <View style={{marginHorizontal: 15, paddingBottom: 50}}>
        <Text style={styles.title}>My Bookings</Text>
        <FlatList
          data={data}
          renderItem={item => renderItem(item)}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  width: '80%',
                  backgroundColor: colors.LIGHT_GRAY,
                  height: 1,
                  alignSelf: 'center',
                }}
              />
            );
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
    marginVertical: 30,
    fontFamily: 'DMSans-Bold',
  },
  card: {
    flex: 0.25,
    backgroundColor: colors.PEACOCK_GREEN,
    margin: 10,
    justifyContent: 'space-evenly',
    borderRadius: 8,
  },
  list: {flex: 0.75},

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
    padding: 20,
    backgroundColor: 'white',
  },
});

export default Bookings;
