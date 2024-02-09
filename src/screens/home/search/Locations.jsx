import React from 'react';
import {Text, TextInput, View} from 'react-native';
import Background from '../../../components/Background';
import colors from '../../../constants/colors';

const Locations = () => {
  return (
    <Background>
      <View style={{marginHorizontal: 15}}>
        <TextInput
          style={{
            borderColor: colors.GRAY,
            borderWidth: 1,
            borderRadius: 8,
            color: colors.GRAY,
            marginTop: 40,
          }}
          placeholder=" Enter Location or Airport Code "
          placeholderTextColor={colors.GRAY}
        />
      </View>
    </Background>
  );
};

export default Locations;
