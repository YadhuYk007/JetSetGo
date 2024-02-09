import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../screens/home/search/Search';
import Bookings from '../screens/home/bookings/Bookings';
import screenNames from '../constants/screenNames';
import colors from '../constants/colors';

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
          tabBarLabelStyle: {fontWeight: '600', fontSize: 12},
        }}
      />
      <Tab.Screen
        component={Bookings}
        name={screenNames.BOOKING}
        options={{
          tabBarActiveTintColor: 'white',
          tabBarLabelStyle: {fontWeight: '600', fontSize: 12},
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
