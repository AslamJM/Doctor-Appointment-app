import React from 'react';

import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {ProfileStackParams} from './types';

import ProfileScreen from '../screens/patient/Profile';
import PatientListScreen from '../screens/patient/PatientListScreen';
import StackHeaderBar from '../components/StackHeaderBar';

const ProfileStack = createStackNavigator<ProfileStackParams>();

const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <ProfileStack.Screen name="ProfileMain" component={ProfileScreen} />
      <ProfileStack.Screen
        name="Patients"
        component={PatientListScreen}
        options={{
          headerShown: true,
          title: 'Your Patient List',
          header: props => <StackHeaderBar {...props} />,
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
