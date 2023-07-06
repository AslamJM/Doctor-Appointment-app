import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from './types';
import BottomTabBar from '../components/BottomTabBar';

//screens
import HomeStackNavigator from './HomeStackNavigator';
import AppointmentStackNavigator from './AppointmentStackNavigator';
import AppointmentTabs from '../screens/main/AppointmentTabs';
import Chats from '../screens/main/Chats';
import ProfileStack from '../screens/main/ProfileStack';
import Fonts from '../constants/Fonts';
import {Center} from 'native-base';
import Text from '../components/text/Text';

const BottomTabs = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <BottomTabs.Screen name="Main" component={HomeStackNavigator} />
      <BottomTabs.Screen
        name="Appointments"
        component={AppointmentStackNavigator}
      />
      <BottomTabs.Screen name="Messages" component={Chats} />
      <BottomTabs.Screen name="Profile" component={ProfileStack} />
    </BottomTabs.Navigator>
  );
};

export default BottomTabNavigator;
