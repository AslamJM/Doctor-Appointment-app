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
import {SlotsLoading} from '../../components/skeletons/Loading';
import SlotSectionHeader from '../../components/doctor/SlotSectionHeader';
import {Center} from 'native-base';
import Text from '../../components/text/Text';

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

  // render Doctors timeslots

  const renderTimeSlots = () => {
    if (error) {
      return <ErrorComponent error={error} />;
    }
    if (loading) {
      return (
        <>
          <SlotsLoading type="Morning" />
          <SlotsLoading type="Evening" />
          <SlotsLoading type="Night" />
        </>
      );
    }

    const notAvailableMessage = () => (
      <Center py={2}>
        <Text h3>Doctor is not available</Text>
      </Center>
    );

    const morningAvailability =
      data && data.getDoctor.availability.morning.length > 0;

    const eveningAvailability =
      data && data.getDoctor.availability.evening.length > 0;

    const nightAvailability =
      data && data.getDoctor.availability.night.length > 0;

    return (
      <>
        <SlotSectionHeader type="Morning" />
        {morningAvailability ? (
          <SlotSection
            startTime={
              data?.getDoctor?.availability?.morning[0].startTime || 'no'
            }
            endTime={data?.getDoctor?.availability?.morning[0].endTime || 'no'}
          />
        ) : (
          notAvailableMessage()
        )}
        <SlotSectionHeader type="Evening" />
        {!eveningAvailability ? (
          notAvailableMessage()
        ) : (
          <SlotSection
            startTime={
              data?.getDoctor?.availability?.evening[0].startTime || 'no'
            }
            endTime={data?.getDoctor?.availability?.evening[0].endTime || 'no'}
          />
        )}
        <SlotSectionHeader type="Night" />
        {!nightAvailability ? (
          notAvailableMessage()
        ) : (
          <SlotSection
            startTime={
              data?.getDoctor?.availability?.night[0].startTime || 'no'
            }
            endTime={data?.getDoctor?.availability?.night[0].endTime || 'no'}
          />
        )}
      </>
    );
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
      {renderTimeSlots()}
    </ScrollView>
  );
};

export default TimeSlotScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
