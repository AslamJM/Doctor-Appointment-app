import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import AppointmentCard from '../../components/cards/AppointmentCard';
import {useAppointmentContext} from '../../navigation/AppointmentTabNavigator';
import {Center, FlatList} from 'native-base';
import Text from '../../components/text/Text';

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
            doctor={item.doctor.name}
            speciality={item.doctor.speciality.name}
            status="COMPLETED"
            time={item.time}
          />
        )}
        ListEmptyComponent={
          <Center h={500}>
            <Text h3>No completed appointments</Text>
          </Center>
        }
      />
    </View>
  );
};

export default CompletedScreen;

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 10,
  },
});
