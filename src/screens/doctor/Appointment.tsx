import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import SectionTitle from '../../components/text/SectionTitle';
import {useApolloClient, useMutation} from '@apollo/client';
import {HomeStackScreenProps} from '../../navigation/types';
import {Avatar, Button, Center, HStack, Stack} from 'native-base';
import Text from '../../components/text/Text';
import Colors from '../../constants/Colors';
import {useUser} from '@clerk/clerk-expo';
import dayjs from 'dayjs';
import {useAppContext} from '../../context/GlobalContext';
import {DOCTOR_INFO} from '../../graphql/query/doctor';
import {CREATE_APPOINTMENT} from '../../graphql/mutation/appointment';
import {convertTimeToISOString} from '../../utils/date';

const Appointment = ({
  navigation,
  route,
}: HomeStackScreenProps<'Appointment'>) => {
  const {doctorId} = route.params;
  const client = useApolloClient();
  const {user} = useUser();
  const {selectedSlot} = useAppContext();
  const [loading, setLoading] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState('');

  // appointment mutation
  const [createMutation] = useMutation(CREATE_APPOINTMENT, {
    variables: {
      appointmentInput: {
        doctorId,
        patientId: selectedPatient,
        time: convertTimeToISOString(selectedSlot),
      },
    },
  });

  // get Doctor data from the cache
  const doctor = client.readFragment({
    id: `Doctor:${doctorId}`,
    fragment: DOCTOR_INFO,
  })!;

  const createAppointment = async () => {
    setLoading(true);
    try {
      const res = await createMutation();
      if (res.data && res.data.createAppointment.success) {
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <SectionTitle>Doctor Details</SectionTitle>
      {/* Doctor Details */}
      <HStack py="3" my="2" px="2" bg={Colors.white} rounded="md">
        <Avatar width={50} height={50} source={{uri: doctor.image!}} />
        <Stack ml="2">
          <Text h3>{doctor.name}</Text>
          <Text h4>{doctor?.speciality.name}</Text>
        </Stack>
      </HStack>
      <SectionTitle>Patient</SectionTitle>
      {/* patient list select */}
      <HStack py="3" my="2" px="2" bg={Colors.white} rounded="md">
        <Avatar width={50} height={50} source={{uri: user?.profileImageUrl}} />
        <Stack ml="2">
          <Text h3>{user?.fullName || 'user'}</Text>
          <Text h4>
            {user?.emailAddresses[0].emailAddress || 'email address'}
          </Text>
        </Stack>
      </HStack>
      <SectionTitle>Appointment Details</SectionTitle>
      <HStack
        py="3"
        my="2"
        px="2"
        bg={Colors.white}
        rounded="md"
        justifyContent="space-between">
        <Stack w="1/2">
          <Text h3>Date</Text>
          <Text h4>{dayjs().format('DD MMM YYYY')}</Text>
        </Stack>
        <Stack w="1/2">
          <Text h3>Time</Text>
          <Text h4>{selectedSlot}</Text>
        </Stack>
      </HStack>
      <Center position="absolute" bottom={2} w="100%">
        <Button
          bg={Colors.primary}
          isLoading={loading}
          onPress={createAppointment}>
          <Text h3 style={{color: Colors.white}}>
            {loading ? 'Submitting...' : 'Confirm Appointment'}
          </Text>
        </Button>
      </Center>
    </View>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingHorizontal: 10,
  },
});
