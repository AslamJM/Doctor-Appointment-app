import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import AppointmentCard from '../../components/cards/AppointmentCard';
import {useAppointmentContext} from '../../navigation/AppointmentTabNavigator';
import {FlatList} from 'native-base';

const CompletedScreen = () => {
  const {appointments} = useAppointmentContext();
  const CompletedAppointments = useCallback(() => {
    return appointments.filter(app => app.status === 'COMPLETED');
  }, [appointments]);
  return (
    <View style={styles.main}>
      <FlatList
        data={CompletedAppointments()}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <AppointmentCard
            doctor={item.doctor}
            speciality={item.speciality}
            status="COMPLETED"
            time={item.time}
          />
        )}
      />
    </View>
  );
};

export default CompletedScreen;

const styles = StyleSheet.create({
  main: {},
});
