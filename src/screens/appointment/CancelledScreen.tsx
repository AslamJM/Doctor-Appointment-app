import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import AppointmentCard from '../../components/cards/AppointmentCard';
import {useAppointmentContext} from '../../navigation/AppointmentTabNavigator';
import {FlatList} from 'native-base';

const CancelledScreen = () => {
  const {appointments} = useAppointmentContext();
  const CancelledAppointments = useCallback(() => {
    return appointments.filter(app => app.status === 'CANCELLED');
  }, [appointments]);
  return (
    <View style={styles.main}>
      <FlatList
        data={CancelledAppointments()}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <AppointmentCard
            doctor={item.doctor}
            speciality={item.speciality}
            status="CANCELLED"
            time={item.time}
          />
        )}
      />
    </View>
  );
};

export default CancelledScreen;

const styles = StyleSheet.create({
  main: {},
});
