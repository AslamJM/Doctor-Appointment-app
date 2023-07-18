import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import SectionTitle from '../../components/text/SectionTitle';
import {useApolloClient, useMutation, useQuery} from '@apollo/client';
import {HomeStackScreenProps} from '../../navigation/types';
import {
  Avatar,
  Box,
  Button,
  Center,
  Checkbox,
  HStack,
  Spinner,
  Stack,
  useDisclose,
} from 'native-base';
import Text from '../../components/text/Text';
import Colors from '../../constants/Colors';
import dayjs from 'dayjs';
import {useAppContext} from '../../context/GlobalContext';
import {DOCTOR_INFO} from '../../graphql/query/doctor';
import {CREATE_APPOINTMENT} from '../../graphql/mutation/appointment';
import {GET_PATIENTS} from '../../graphql/query/patient';
import ErrorComponent from '../../components/ErrorComponent';
import Fonts, {sizes} from '../../constants/Fonts';
import CreatePatientActionSheet from '../patient/CreatePatientActionSheet';
import Icons from '../../constants/Icons';

const Appointment = ({
  navigation,
  route,
}: HomeStackScreenProps<'Appointment'>) => {
  const {doctorId} = route.params;
  const client = useApolloClient();
  const {selectedSlot, setSelectedSlot, selectedDate} = useAppContext();
  const [loading, setLoading] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState('');

  // states for createPatient
  const {onOpen, onClose, isOpen} = useDisclose();

  const {data, loading: patientsLoad, error} = useQuery(GET_PATIENTS);

  // appointment mutation
  const [createMutation] = useMutation(CREATE_APPOINTMENT, {
    variables: {
      appointmentInput: {
        doctorId,
        patientId: selectedPatient,
        time: selectedSlot,
        date: selectedDate,
      },
    },
    refetchQueries: ['GetUserAppointments'],
  });

  // get Doctor data from the cache
  const doctor = client.readFragment({
    id: `Doctor:${doctorId}`,
    fragment: DOCTOR_INFO,
  })!;

  // patients section

  const renderPatientSection = () => {
    if (patientsLoad) {
      return (
        <Center h="100">
          <Spinner color={Colors.primary} />
        </Center>
      );
    }
    if (error) {
      return <ErrorComponent error={error} />;
    }
    const patients = data?.getPatientsOfUser;
    return (
      <Box>
        <FlatList
          data={patients}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <HStack
              justifyContent="space-between"
              alignItems="center"
              py="2"
              bg="white"
              rounded="md"
              my="1"
              px="3">
              <Stack>
                <Text h3 style={{color: 'black'}}>
                  {item.name}
                </Text>
                <Text h4>{`${item.age} years old`}</Text>
              </Stack>
              <Checkbox
                value={item.id}
                onChange={checked => {
                  if (checked) {
                    setSelectedPatient(item.id);
                  } else {
                    setSelectedPatient('');
                  }
                }}
                isDisabled={
                  selectedPatient.length > 0 && selectedPatient !== item.id
                }
                aria-label="select patient"
                color={Colors.primary}
              />
            </HStack>
          )}
        />
        <Center w="full" py="2" mt="3">
          <Button
            variant="outline"
            _text={{
              ...Fonts.regular,
              color: Colors.primary,
              fontSize: sizes.body3,
            }}
            onPress={onOpen}
            borderColor={Colors.primary}>
            Create Patient
          </Button>
        </Center>
      </Box>
    );
  };

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
      setSelectedSlot('');
    }
  };

  return (
    <View style={styles.container}>
      <SectionTitle>Doctor Details</SectionTitle>
      {/* Doctor Details */}
      <HStack py="3" my="2" px="2" bg={Colors.white} rounded="md">
        <Avatar
          width={50}
          height={50}
          source={doctor.image ? {uri: doctor.image} : Icons.DoctorProfile}
        />
        <Stack ml="2">
          <Text h3>{doctor.name}</Text>
          <Text h4>{doctor?.speciality.name}</Text>
        </Stack>
      </HStack>
      {/* Appointment Details */}
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
      <SectionTitle>Select Patient</SectionTitle>
      {/* patient list select */}
      {renderPatientSection()}

      <Center position="absolute" bottom={2} w="100%" mb="4">
        <Button
          isDisabled={selectedPatient.length === 0}
          bg={Colors.primary}
          isLoading={loading}
          onPress={createAppointment}
          _spinner={{color: Colors.white}}
          isLoadingText="Creating"
          width="250"
          height="50"
          _text={{
            ...Fonts.regular,
            color: 'white',
            fontSize: sizes.body3,
          }}>
          Confirm Appointment
        </Button>
      </Center>
      <CreatePatientActionSheet onClose={onClose} isOpen={isOpen} />
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
