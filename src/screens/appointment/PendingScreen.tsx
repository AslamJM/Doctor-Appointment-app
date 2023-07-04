import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import AppointmentCard from '../../components/cards/AppointmentCard';
import {useAppointmentContext} from '../../navigation/AppointmentTabNavigator';
import {Center, FlatList} from 'native-base';
import Text from '../../components/text/Text';

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
        ListEmptyComponent={
          <Center h={500}>
            <Text h3>No pending appointments</Text>
          </Center>
        }
      />
    </View>
  );
};

export default PendingScreen;

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 10,
  },
});
