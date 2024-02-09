import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import colors from '../constants/colors';

const Background = ({children}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.LIGHT_GRAY,
      }}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      {children}
    </View>
  );
};

export default Background;
