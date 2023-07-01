import {StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import TimeSlotCard from '../../components/cards/TimeSlotsCard';
import SlotSection from '../../components/cards/SlotSection';
import Calender from '../../components/doctor/Calender';
import {HomeStackScreenProps} from '../../navigation/types';

const TimeSlotScreen = ({
  navigation,
  route,
}: HomeStackScreenProps<'TimeSlot'>) => {
  const {doctorId} = route.params;
  return (
    <ScrollView style={styles.container}>
      <TimeSlotCard
        name="Jason Donut"
        speciality="Murivu Vaithiyam"
        experience={12}
        id="12345"
        onClick={() => navigation.navigate('DoctorProfile', {doctorId})}
      />
      <Calender />
      <SlotSection type="Morning" />
      <SlotSection type="Evening" />
      <SlotSection type="Night" />
    </ScrollView>
  );
};

export default TimeSlotScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
