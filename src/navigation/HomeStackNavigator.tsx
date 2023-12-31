import React from 'react';

import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {HomeStackParamList} from './types';
import HomeScreen from '../screens/main/HomeScreen';
import SpecialistScreen from '../screens/doctor/SpecialistScreen';
import TimeSlotScreen from '../screens/doctor/TimeSlotScreen';
import HospitalScreen from '../screens/hospital/HospitalScreen';
import AllSpecialitiesScreen from '../screens/doctor/AllSpecialitiesScreen';
import DoctorProfileScreen from '../screens/doctor/DoctorProfileScreen';
import AppointmentScreen from '../screens/doctor/Appointment';
import PatientListScreen from '../screens/patient/PatientListScreen';
import StackHeaderBar from '../components/StackHeaderBar';
import CreateAppointmentScreen from '../screens/appointment/CreateAppointmentScreen';

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="Specialists"
        component={SpecialistScreen}
        options={{
          headerShown: true,
          header(props) {
            return <StackHeaderBar {...props} />;
          },
        }}
      />
      <HomeStack.Screen
        name="AllSpecialities"
        component={AllSpecialitiesScreen}
      />
      <HomeStack.Screen
        name="TimeSlot"
        component={TimeSlotScreen}
        options={{
          headerShown: true,
          title: 'Select Time Slot',
          header(props) {
            return <StackHeaderBar {...props} />;
          },
        }}
      />
      <HomeStack.Screen
        name="Hospital"
        component={HospitalScreen}
        options={{
          headerShown: true,
          title: 'Hospital Details',
          header(props) {
            return <StackHeaderBar {...props} />;
          },
        }}
      />
      <HomeStack.Screen
        name="DoctorProfile"
        component={DoctorProfileScreen}
        options={{
          headerShown: true,
          title: 'Doctor Profile',
          header(props) {
            return <StackHeaderBar {...props} />;
          },
        }}
      />
      <HomeStack.Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{
          headerShown: true,
          title: 'Create Appointment',
          header(props) {
            return <StackHeaderBar {...props} />;
          },
        }}
      />
      <HomeStack.Screen name="PatientList" component={PatientListScreen} />
      <HomeStack.Screen
        name="CreateAppointment"
        component={CreateAppointmentScreen}
        options={{
          headerShown: true,
          title: 'Choose Specialist',
          header(props) {
            return <StackHeaderBar {...props} />;
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
