import {StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import TimeSlotCard from '../../components/cards/TimeSlotsCard';
import SlotSection from '../../components/cards/SlotSection';
import Calender from '../../components/doctor/Calender';
import {HomeStackScreenProps} from '../../navigation/types';

import {useQuery, useApolloClient, gql} from '@apollo/client';
import {GET_DOCTOR_AVAILABILTY} from '../../graphql/query/doctor';
import {Doctor} from '../../__generated__/graphql';
import ErrorComponent from '../../components/ErrorComponent';

const TimeSlotScreen = ({
  navigation,
  route,
}: HomeStackScreenProps<'TimeSlot'>) => {
  const {doctorId} = route.params;
  const client = useApolloClient();

  // get Doctor data from the cache
  const doctor = client.readFragment<Doctor>({
    id: `Doctor:${doctorId}`,
    fragment: gql`
      fragment GetSpecialists on Doctor {
        name
        image
        experience
        speciality {
          name
        }
      }
    `,
  });

  // fetch doctor TimeSlots
  const {data, loading, error} = useQuery(GET_DOCTOR_AVAILABILTY, {
    variables: {
      getDoctorId: doctorId,
    },
  });

  const renderTimeSlots = () => {
    if (error) {
      return <ErrorComponent error={error} />;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TimeSlotCard
        name={doctor?.name || 'Jason Donut'}
        speciality={doctor?.speciality.name || 'Murivu Vaithiyam'}
        experience={doctor?.experience || 12}
        id={doctorId}
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
