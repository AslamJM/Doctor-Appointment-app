import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {AppointTabParams} from './types';

import PendingScreen from '../screens/appointment/PendingScreen';
import CompletedScreen from '../screens/appointment/CompletedScreen';
import CancelledScreen from '../screens/appointment/CancelledScreen';

import {GetUserAppointmentsQuery} from '../__generated__/graphql';
import {useQuery} from '@apollo/client';
import {GET_MY_APPOINTMENTS} from '../graphql/query/appointment';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';
import ErrorComponent from '../components/ErrorComponent';

const AppointmentTabs = createMaterialTopTabNavigator<AppointTabParams>();

type GetAppointments = Pick<
  GetUserAppointmentsQuery,
  'getUserAppointments'
>['getUserAppointments'];

const AppointmentContext = React.createContext<{
  appointments: GetAppointments;
  loading: boolean;
}>({
  appointments: [],
  loading: true,
});

export const useAppointmentContext = () => React.useContext(AppointmentContext);

const AppointmentTabsNavigator = () => {
  const {data, error, loading} = useQuery(GET_MY_APPOINTMENTS);

  if (error) {
    return <ErrorComponent error={error} />;
  }

  const appointments = data?.getUserAppointments;
  return (
    <AppointmentContext.Provider
      value={{appointments: appointments ?? [], loading}}>
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
