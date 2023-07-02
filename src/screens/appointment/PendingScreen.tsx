import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import AppointmentCard from '../../components/cards/AppointmentCard';
import {useAppointmentContext} from '../../navigation/AppointmentTabNavigator';
import {FlatList} from 'native-base';

const PendingScreen = () => {
  const {appointments} = useAppointmentContext();
  const pendingAppointments = useCallback(() => {
    return appointments.filter(app => app.status === 'PENDING');
  }, [appointments]);
  return (
    <View style={styles.main}>
      <FlatList
        data={pendingAppointments()}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <AppointmentCard
            doctor={item.doctor.name}
            speciality={item.doctor.speciality.name}
            status="PENDING"
            time={item.time}
          />
        )}
      />
    </View>
  );
};

export default PendingScreen;

const styles = StyleSheet.create({
  main: {},
});
