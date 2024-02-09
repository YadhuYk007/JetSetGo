import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Background from '../../components/Background';
import PrimaryButton from '../../components/PrimaryButton';
import colors from '../../assets/colors';

const Welcome = ({navigation}) => {
  return (
    <Background>
      <View style={{flex: 0.9, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 30, color: 'green', fontWeight: 800}}>
          JetSetGo
        </Text>
        <Text style={{color: colors.GREEN_4}}>
          simplifying flight bookings.
        </Text>
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

export default Welcome;
