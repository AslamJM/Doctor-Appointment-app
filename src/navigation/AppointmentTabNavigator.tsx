import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {AppointTabParams} from './types';

import PendingScreen from '../screens/appointment/PendingScreen';
import CompletedScreen from '../screens/appointment/CompletedScreen';
import CancelledScreen from '../screens/appointment/CancelledScreen';

import {Appointment} from '../__generated__/graphql';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';

const AppointmentTabs = createMaterialTopTabNavigator<AppointTabParams>();

type ContextType = {
  id: string;
  doctor: string;
  speciality: string;
  time: string;
  status: string;
  user: string;
};

const AppointmentContext = React.createContext<{appointments: ContextType[]}>({
  appointments: [],
});

export const useAppointmentContext = () => React.useContext(AppointmentContext);

const AppointmentTabsNavigator = () => {
  const arrayOfObjects = [
    {
      id: 'b161ab6d-2c4f-4b3c-a9d9-9a1f51ee9823',
      doctor: 'Dr. Smith',
      speciality: 'Cardiology',
      time: '2023-06-26T10:30:00.000Z',
      status: 'COMPLETED',
      user: '111',
    },
    {
      id: 'e249a147-4969-480d-b946-1175c38365a3',
      doctor: 'Dr. Johnson',
      speciality: 'Dentistry',
      time: '2023-06-26T14:45:00.000Z',
      status: 'CANCELLED',
      user: '111',
    },
    {
      id: '80cfc4ef-8657-4e81-b0f3-c84b46d33d8d',
      doctor: 'Dr. Williams',
      speciality: 'Orthopedics',
      time: '2023-06-26T09:15:00.000Z',
      status: 'PENDING',
      user: '111',
    },
    // Add more objects as needed
  ];

  return (
    <AppointmentContext.Provider value={{appointments: arrayOfObjects}}>
      <AppointmentTabs.Navigator>
        <AppointmentTabs.Screen
          name="Pending"
          component={PendingScreen}
          options={{
            tabBarLabelStyle: {...Fonts.bold},
            tabBarActiveTintColor: Colors.primary,
            tabBarIndicatorStyle: {
              backgroundColor: Colors.primary,
            },
          }}
        />
        <AppointmentTabs.Screen
          name="Cancelled"
          component={CancelledScreen}
          options={{
            tabBarLabelStyle: {...Fonts.bold},
            tabBarActiveTintColor: Colors.primary,
            tabBarIndicatorStyle: {
              backgroundColor: Colors.primary,
            },
          }}
        />
        <AppointmentTabs.Screen
          name="Completed"
          component={CompletedScreen}
          options={{
            tabBarLabelStyle: {...Fonts.bold},
            tabBarActiveTintColor: Colors.primary,
            tabBarIndicatorStyle: {
              backgroundColor: Colors.primary,
            },
          }}
        />
      </AppointmentTabs.Navigator>
    </AppointmentContext.Provider>
  );
};

export default AppointmentTabsNavigator;
