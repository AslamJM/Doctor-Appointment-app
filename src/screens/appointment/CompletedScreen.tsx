import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import AppointmentCard from '../../components/cards/AppointmentCard';
import {useAppointmentContext} from '../../navigation/AppointmentTabNavigator';
import {Center, FlatList, Spinner} from 'native-base';
import Text from '../../components/text/Text';
import Colors from '../../constants/Colors';

import {AppointmentStackScreenProps} from '../../navigation/types';

const CompletedScreen = ({
  navigation,
}: AppointmentStackScreenProps<'AppointmentTabs'>) => {
  const {appointments, loading} = useAppointmentContext();
  const CompletedAppointments = useCallback(() => {
    return appointments.filter(app => app.status === 'COMPLETED');
  }, [appointments]);

  if (loading) {
    return (
      <Center flex={1}>
        <Spinner color={Colors.primary} />
      </Center>
    );
  }

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
            date={item.date}
            onPress={() =>
              navigation.navigate('AppointmentDetail', {
                appointmentId: item.id,
              })
            }
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
