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
import {Button, Center, ArrowForwardIcon, HStack, CloseIcon} from 'native-base';
import Text from '../../components/text/Text';

import {useAppContext} from '../../context/GlobalContext';
import Colors from '../../constants/Colors';

const TimeSlotScreen = ({
  navigation,
  route,
}: HomeStackScreenProps<'TimeSlot'>) => {
  const {doctorId} = route.params;
  const client = useApolloClient();

  const {selectedSlot, setSelectedSlot} = useAppContext();

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
          <SlotsLoading type="Morning" key="Morning" />
          <SlotsLoading type="Evening" key="Eorning" />
          <SlotsLoading type="Night" key="Norning" />
        </>
      );
    }

    const notAvailableMessage = () => (
      <Center py={2}>
        <Text h3 style={{color: Colors.red}}>
          Doctor is not available
        </Text>
      </Center>
    );

    const morningAvailability =
      data &&
      data.getDoctor.availability &&
      data.getDoctor.availability.morning.length > 0;

    const eveningAvailability =
      data &&
      data.getDoctor.availability &&
      data.getDoctor.availability.evening.length > 0;

    const nightAvailability =
      data &&
      data.getDoctor.availability &&
      data.getDoctor.availability.night.length > 0;

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
    <>
      <ScrollView style={styles.container}>
        {doctor && (
          <TimeSlotCard
            name={doctor.name}
            speciality={doctor.speciality.name}
            experience={doctor.experience}
            id={doctorId}
            image={doctor.image!}
            onClick={() => navigation.navigate('DoctorProfile', {doctorId})}
          />
        )}
        <Calender />
        {renderTimeSlots()}
      </ScrollView>
      <HStack
        style={styles.next}
        display={selectedSlot ? 'block' : 'none'}
        py="2">
        <Button
          backgroundColor={Colors.red}
          onPress={() => setSelectedSlot('')}>
          <HStack alignItems="center">
            <CloseIcon mx="1" color={Colors.white} />
            <Text h3 style={{color: Colors.white}}>
              Cancel
            </Text>
          </HStack>
        </Button>
        <Button
          backgroundColor={Colors.primary}
          onPress={() => navigation.navigate('Appointment', {doctorId})}>
          <HStack alignItems="center">
            <Text h3 style={{color: Colors.white}}>
              Go
            </Text>
            <ArrowForwardIcon mx="1" color={Colors.white} />
          </HStack>
        </Button>
      </HStack>
    </>
  );
};

export default TimeSlotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  next: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    paddingVertical: 50,
  },
});
