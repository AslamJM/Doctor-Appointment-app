import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {AppointmentStackScreenProps} from '../../navigation/types';

const AppointmentDetailsScreen = ({
  navigation,
  route,
}: AppointmentStackScreenProps<'AppointmentDetail'>) => {
  const {appointmentId} = route.params;
  return (
    <View>
      <Text>{appointmentId}</Text>
    </View>
  );
};

export default AppointmentDetailsScreen;

const styles = StyleSheet.create({});
