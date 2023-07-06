import React from 'react';

import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {AppointmentStackParams} from './types';

import AppointmentTabsNavigator from './AppointmentTabNavigator';
import AppointmentDetailsScreen from '../screens/appointment/AppointmentDetailsScreen';
import {Center} from 'native-base';
import Text from '../components/text/Text';
import StackHeaderBar from '../components/StackHeaderBar';

const AppointmentStack = createStackNavigator<AppointmentStackParams>();

const AppointmentStackNavigator = () => {
  return (
    <AppointmentStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <AppointmentStack.Screen
        name="AppointmentTabs"
        component={AppointmentTabsNavigator}
        options={{
          headerShown: true,
          header(props) {
            return (
              <Center py="2" bg="white">
                <Text h3>Your Appointments</Text>
              </Center>
            );
          },
        }}
      />
      <AppointmentStack.Screen
        name="AppointmentDetail"
        component={AppointmentDetailsScreen}
        options={{
          headerShown: true,
          title: 'Appointment Details',
          header(props) {
            return <StackHeaderBar {...props} />;
          },
        }}
      />
    </AppointmentStack.Navigator>
  );
};

export default AppointmentStackNavigator;
