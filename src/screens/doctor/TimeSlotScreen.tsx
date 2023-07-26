import {StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
import TimeSlotCard from '../../components/cards/TimeSlotsCard';
import SlotSection from '../../components/cards/SlotSection';
import Calender from '../../components/doctor/Calender';
import {HomeStackScreenProps} from '../../navigation/types';

import {useQuery, useApolloClient, gql} from '@apollo/client';
import {GET_DOCTOR_AVAILABILTY} from '../../graphql/query/availability';
import {Doctor} from '../../__generated__/graphql';
import ErrorComponent from '../../components/ErrorComponent';
import SlotSectionHeader from '../../components/doctor/SlotSectionHeader';
import {
  Button,
  Center,
  ArrowForwardIcon,
  HStack,
  CloseIcon,
  Spinner,
  Box,
  Actionsheet,
  useDisclose,
} from 'native-base';
import Text from '../../components/text/Text';
import Icons from '../../constants/Icons';

import {useAppContext} from '../../context/GlobalContext';
import Colors from '../../constants/Colors';
import dayjs from 'dayjs';

const TimeSlotScreen = ({
  navigation,
  route,
}: HomeStackScreenProps<'TimeSlot'>) => {
  const {doctorId} = route.params;
  const client = useApolloClient();

  const {selectedSlot, setSelectedSlot} = useAppContext();
  const {isOpen, onOpen, onClose} = useDisclose();

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
      getDoctorAvailabilityId: doctorId,
      date: dayjs().format('DD/MM/YYYY'),
    },
  });

  // render Doctors timeslots

  const renderTimeSlots = () => {
    if (loading) {
      return (
        <Center height={300}>
          <Spinner color={Colors.primary} />
        </Center>
      );
    }

    if (error) {
      return <ErrorComponent error={error} />;
    }

    const notAvailableMessage = () => (
      <Center py={2}>
        <Text h3 style={{color: Colors.red}}>
          Doctor is not available
        </Text>
      </Center>
    );

    if (data && !data.getDoctorAvailability) {
      return (
        <Center height={400}>
          <Image source={Icons.NotIcon} style={{height: 50, width: 50}} />
          <Text h4>Doctor is not available today</Text>
        </Center>
      );
    }
    const morningAvailability =
      data &&
      data.getDoctorAvailability &&
      data.getDoctorAvailability.morning &&
      data.getDoctorAvailability.morning.startTime &&
      data.getDoctorAvailability.morning;

    const eveningAvailability =
      data &&
      data.getDoctorAvailability &&
      data.getDoctorAvailability.evening &&
      data.getDoctorAvailability.evening.startTime &&
      data.getDoctorAvailability.evening;

    const nightAvailability =
      data &&
      data.getDoctorAvailability &&
      data.getDoctorAvailability.night &&
      data.getDoctorAvailability.night.startTime &&
      data.getDoctorAvailability.night;

    return (
      <Box>
        <SlotSectionHeader type="Morning" />
        {morningAvailability ? (
          <SlotSection
            startTime={
              morningAvailability ? morningAvailability.startTime! : 'no'
            }
            endTime={morningAvailability ? morningAvailability.endTime! : 'no'}
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
              eveningAvailability ? eveningAvailability.startTime! : 'no'
            }
            endTime={eveningAvailability ? eveningAvailability.endTime! : 'no'}
          />
        )}
        <SlotSectionHeader type="Night" />
        {!nightAvailability ? (
          notAvailableMessage()
        ) : (
          <SlotSection
            startTime={nightAvailability ? nightAvailability.startTime! : 'no'}
            endTime={nightAvailability ? nightAvailability.endTime! : 'no'}
          />
        )}
      </Box>
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
      <Actionsheet isOpen={selectedSlot.length > 0} onClose={onClose}>
        <Actionsheet.Content>
          <HStack style={styles.next} py="2">
            <Button
              backgroundColor={Colors.red}
              onPress={() => {
                setSelectedSlot('');
                onClose();
              }}>
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
        </Actionsheet.Content>
      </Actionsheet>
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
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    paddingVertical: 50,
  },
});
