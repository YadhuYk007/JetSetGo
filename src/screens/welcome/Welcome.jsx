import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Background from '../../components/Background';
import PrimaryButton from '../../components/PrimaryButton';
import colors from '../../constants/colors';

const Welcome = ({navigation}) => {
  return (
    <Background>
      <View style={styles.main}>
        <Image
          style={{height: 100, width: 100}}
          source={require('../../assets/icons/logo.png')}
        />
        <Text style={styles.title}>JetSetGo</Text>
        <Text style={styles.info}>simplifying flight bookings.</Text>
      </View>
      <View style={{flex: 0.1}}>
        <PrimaryButton
          text={'Start Booking'}
          textColor="white"
          onPressed={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: colors.PEACOCK_GREEN,
    fontFamily: 'DMSans-Bold',
  },
  info: {color: colors.PEACOCK_GREEN, fontFamily: 'DMSans-Regular'},
});

export default Welcome;
