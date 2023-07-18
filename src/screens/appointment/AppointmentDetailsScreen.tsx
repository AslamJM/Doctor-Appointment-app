import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

import {AppointmentStackScreenProps} from '../../navigation/types';
import {useApolloClient, useMutation} from '@apollo/client';
import {APPOINTMENT_INFO} from '../../graphql/query/appointment';
import SectionTitle from '../../components/text/SectionTitle';
import AppointmentDetailCard from '../../components/appointments/AppointmentDetailCard';
import AppointmentDoctorInfo from '../../components/appointments/AppointmentDoctorInfo';
import PatientCard from '../../components/cards/PatientCard';
import {Button} from 'native-base';
import Text from '../../components/text/Text';
import Colors from '../../constants/Colors';
import {UPDATE_APPOINTMENT} from '../../graphql/mutation/appointment';
import {AppointmentStatus} from '../../__generated__/graphql';
import Fonts, {sizes} from '../../constants/Fonts';

const AppointmentDetailsScreen = ({
  navigation,
  route,
}: AppointmentStackScreenProps<'AppointmentDetail'>) => {
  const {appointmentId} = route.params;
  const [loading, setLoading] = useState(false);

  const client = useApolloClient();

  const appointment = client.readFragment({
    id: `Appointment:${appointmentId}`,
    fragment: APPOINTMENT_INFO,
  })!;

  const doctor = appointment.doctor;
  const patient = appointment.patient;
  const status = appointment.status;

  const [updateAppointment] = useMutation(UPDATE_APPOINTMENT, {
    variables: {
      updateAppointmentId: appointmentId,
      updateAppointmentInput: {
        status:
          status === AppointmentStatus.Cancelled
            ? AppointmentStatus.Pending
            : AppointmentStatus.Cancelled,
      },
    },
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

  const updateAppointmentHandler = async () => {
    setLoading(true);
    try {
      const res = await updateAppointment();
      if (res.data?.updateAppointment.success) {
        navigation.navigate('AppointmentTabs');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const cancelButton = () => {
    return (
      <Button
        variant="outline"
        borderColor={Colors.red}
        isLoading={loading}
        onPress={updateAppointmentHandler}
        isLoadingText="Cancelling..."
        _spinner={{color: Colors.red}}
        _text={{
          fontFamily: Fonts.regular.fontFamily,
          color: Colors.red,
          fontSize: sizes.h3,
        }}
        width={200}>
        Cancel Appointment
      </Button>
    );
  };

  const restoreButton = () => {
    return (
      <Button
        variant="outline"
        borderColor={Colors.primary}
        isLoading={loading}
        onPress={updateAppointmentHandler}
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

  return (
    <View style={styles.container}>
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
          cancelButton()
        ) : (
          <></>
        )}
      </View>
    </View>
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
