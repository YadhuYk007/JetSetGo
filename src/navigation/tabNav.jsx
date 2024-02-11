import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../screens/home/search/Search';
import Bookings from '../screens/home/bookings/Bookings';
import screenNames from '../constants/screenNames';
import colors from '../constants/colors';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();
const TabNav = () => {
  return (
    <Tab.Navigator
      shifting={true}
      screenOptions={{
        animationEnabled: true,
        headerShown: false,
        tabBarStyle: {
          height: 55,
          position: 'absolute',
          paddingBottom: 2,
          backgroundColor: colors.PEACOCK_GREEN,
        },
      }}>
      <Tab.Screen
        component={Search}
        name={screenNames.SEARCH}
        options={{
          tabBarActiveTintColor: 'white',
          tabBarLabelStyle: {fontFamily: 'DMSans-Bold', fontSize: 12},
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={require('../assets/icons/HomeActive.png')}
                style={{height: 20, width: 20}}
              />
            ) : (
              <Image
                source={require('../assets/icons/HomeInactive.png')}
                style={{height: 20, width: 20}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        component={Bookings}
        name={screenNames.BOOKING}
        options={{
          tabBarActiveTintColor: 'white',
          tabBarLabelStyle: {fontFamily: 'DMSans-Bold', fontSize: 12},
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={require('../assets/icons/BookingsActive.png')}
                style={{height: 20, width: 20}}
              />
            ) : (
              <Image
                source={require('../assets/icons/BookingsInactive.png')}
                style={{height: 20, width: 20}}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
