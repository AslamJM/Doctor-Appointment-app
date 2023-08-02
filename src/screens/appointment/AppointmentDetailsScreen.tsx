import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useState} from 'react';

import {AppointmentStackScreenProps} from '../../navigation/types';
import {useApolloClient, useMutation} from '@apollo/client';
import {APPOINTMENT_INFO} from '../../graphql/query/appointment';
import SectionTitle from '../../components/text/SectionTitle';
import AppointmentDetailCard from '../../components/appointments/AppointmentDetailCard';
import AppointmentDoctorInfo from '../../components/appointments/AppointmentDoctorInfo';
import PatientCard from '../../components/cards/PatientCard';
import {
  Button,
  Center,
  HStack,
  TextArea,
  KeyboardAvoidingView,
} from 'native-base';
import Colors from '../../constants/Colors';
import {UPDATE_APPOINTMENT} from '../../graphql/mutation/appointment';
import {AppointmentStatus} from '../../__generated__/graphql';
import Fonts, {sizes} from '../../constants/Fonts';
import Text from '../../components/text/Text';

const AppointmentDetailsScreen = ({
  navigation,
  route,
}: AppointmentStackScreenProps<'AppointmentDetail'>) => {
  const {appointmentId} = route.params;
  const [loading, setLoading] = useState(false);
  const [updateStatus, setUpdateStatus] = useState<
    'cancel' | 'complete' | 'restore'
  >('cancel');

  const client = useApolloClient();

  const appointment = client.readFragment({
    id: `Appointment:${appointmentId}`,
    fragment: APPOINTMENT_INFO,
  })!;

  const doctor = appointment.doctor;
  const patient = appointment.patient;
  const status = appointment.status;

  const [updateAppointment] = useMutation(UPDATE_APPOINTMENT, {
    refetchQueries: ['GetUserAppointments'],
    // update: (cache, {data}) => {
    //   const updated = data && data.updateAppointment.success;
    //   if (updated) {
    //     cache.modify({
    //       id: appointmentId,
    //       fields: {
    //         status() {
    //           return AppointmentStatus.Cancelled;
    //         },
    //       },
    //     });
    //   }
    // },
  });

  // handle functions
  const handleCancel = async () => {
    setLoading(true);
    try {
      const res = await updateAppointment({
        variables: {
          updateAppointmentId: appointmentId,
          updateAppointmentInput: {
            status: AppointmentStatus.Cancelled,
          },
        },
      });
      if (res.data?.updateAppointment.success) {
        navigation.navigate('AppointmentTabs');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleComplete = async () => {
    setLoading(true);
    try {
      const res = await updateAppointment({
        variables: {
          updateAppointmentId: appointmentId,
          updateAppointmentInput: {
            status: AppointmentStatus.Completed,
          },
        },
      });
      if (res.data?.updateAppointment.success) {
        navigation.navigate('AppointmentTabs');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRestore = async () => {
    setLoading(true);
    try {
      const res = await updateAppointment({
        variables: {
          updateAppointmentId: appointmentId,
          updateAppointmentInput: {
            status: AppointmentStatus.Pending,
          },
        },
      });
      if (res.data?.updateAppointment.success) {
        navigation.navigate('AppointmentTabs');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //

  const cancelButton = () => {
    return (
      <Button
        variant="outline"
        mx="1"
        borderColor={Colors.red}
        isLoading={updateStatus === 'cancel' && loading}
        onPress={async () => {
          setUpdateStatus('cancel');
          await handleCancel();
        }}
        isLoadingText="Cancelling..."
        _spinner={{color: Colors.red}}
        _text={{
          fontFamily: Fonts.regular.fontFamily,
          color: Colors.red,
          fontSize: sizes.h3,
        }}
        width={140}>
        Cancel
      </Button>
    );
  };

  const restoreButton = () => {
    return (
      <Button
        variant="outline"
        borderColor={Colors.primary}
        isLoading={updateStatus === 'restore' && loading}
        onPress={async () => {
          setUpdateStatus('restore');
          await handleRestore();
        }}
        isLoadingText="Restoring..."
        _spinner={{color: Colors.primary}}
        _text={{
          fontFamily: Fonts.regular.fontFamily,
          color: Colors.primary,
          fontSize: sizes.h3,
        }}
        width={200}>
        Restore Appointment
      </Button>
    );
  };

  const completeButton = () => {
    return (
      <Button
        variant="outline"
        mx="1"
        borderColor={Colors.primary}
        isLoading={updateStatus === 'complete' && loading}
        onPress={async () => {
          setUpdateStatus('complete');
          await handleComplete();
        }}
        isLoadingText="Completing..."
        _spinner={{color: Colors.primary}}
        _text={{
          fontFamily: Fonts.regular.fontFamily,
          color: Colors.primary,
          fontSize: sizes.h3,
        }}
        width={140}>
        Complete
      </Button>
    );
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <SectionTitle>Appointment</SectionTitle>
      <AppointmentDetailCard time={appointment.time} date={appointment.date} />
      <SectionTitle>Doctor Information</SectionTitle>
      <AppointmentDoctorInfo
        name={doctor.name}
        address={doctor.address}
        phone={doctor.phone}
        image={doctor.image!}
        speciality={doctor.speciality.name}
      />
      <SectionTitle>Patient</SectionTitle>
      <PatientCard name={patient.name} age={patient.age!} />
      <View style={styles.btnContainer}>
        {status === AppointmentStatus.Cancelled ? (
          restoreButton()
        ) : status === AppointmentStatus.Pending ? (
          <HStack>
            {completeButton()}
            {cancelButton()}
          </HStack>
        ) : (
          <></>
        )}
      </View>
      {status === AppointmentStatus.Completed && (
        <Center px="10px" mt="6">
          <Text h4>
            You have completed the appointment with Dr.{doctor.name}. Leave a
            review for the doctor.
          </Text>
          {/* <TextArea
            h="20"
            borderColor={Colors.primary}
            placeholder="Comment here..."
            mt="3"
            autoCompleteType=""
          /> */}
        </Center>
      )}
    </KeyboardAvoidingView>
  );
};

export default AppointmentDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    position: 'relative',
  },
  btnContainer: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
  },
});
