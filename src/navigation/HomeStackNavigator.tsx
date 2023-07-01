import React from 'react';

import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {HomeStackParamList} from './types';
import HomeScreen from '../screens/main/HomeScreen';
import SpecialistScreen from '../screens/doctor/SpecialistScreen';
import TimeSlotScreen from '../screens/doctor/TimeSlotScreen';
import HospitalScreen from '../screens/hospital/HospitalScreen';

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Specialists" component={SpecialistScreen} />
      <HomeStack.Screen name="TimeSlot" component={TimeSlotScreen} />
      <HomeStack.Screen name="Hospital" component={HospitalScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
