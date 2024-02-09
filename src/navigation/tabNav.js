import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../screens/home/search/Search';
import Bookings from '../screens/home/bookings/Bookings';
import screenNames from '../constants/screenNames';
import colors from '../assets/colors';

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
          backgroundColor: colors.GREEN_4,
        },
      }}>
      <Tab.Screen component={Search} name={screenNames.SEARCH} />
      <Tab.Screen component={Bookings} name={screenNames.BOOKING} />
    </Tab.Navigator>
  );
};

export default TabNav;
