import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import AppointmentCard from '../../components/cards/AppointmentCard';
import {useAppointmentContext} from '../../navigation/AppointmentTabNavigator';
import {Center, FlatList, Spinner} from 'native-base';
import Text from '../../components/text/Text';
import Colors from '../../constants/Colors';

import {AppointmentStackScreenProps} from '../../navigation/types';

const CancelledScreen = ({
  navigation,
}: AppointmentStackScreenProps<'AppointmentTabs'>) => {
  const {appointments, loading} = useAppointmentContext();
  const CancelledAppointments = useCallback(() => {
    return appointments.filter(app => app.status === 'CANCELLED');
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
        data={CancelledAppointments()}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <AppointmentCard
            doctor={item.doctor.name}
            speciality={item.doctor.speciality.name}
            status="CANCELLED"
            time={item.time}
            onPress={() =>
              navigation.navigate('AppointmentDetail', {appointmentId: item.id})
            }
          />
        )}
        ListEmptyComponent={
          <Center h={500}>
            <Text h3>No cancelled appointments</Text>
          </Center>
        }
      />
    </View>
  );
};

export default CancelledScreen;

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 10,
  },
});
