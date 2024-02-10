import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/welcome/Welcome';
import TabNav from './tabNav';
import screenNames from '../constants/screenNames';
import Locations from '../screens/home/search/Locations';
import FlightInfo from '../screens/home/search/bookFlight/FlightInfo';
import BookingConfirmation from '../screens/home/search/bookFlight/bookingConfirm';

const MainStack = createNativeStackNavigator();

const MainStachScreen = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          component={Welcome}
          name={screenNames.WELCOME}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          component={TabNav}
          name={screenNames.HOME}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          component={Locations}
          name={screenNames.LOCATIONS}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          component={FlightInfo}
          name={screenNames.FLIGHT_INFO}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          component={BookingConfirmation}
          name={screenNames.FLIGHT_CONFIRM}
          options={{
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainStachScreen;
