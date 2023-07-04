import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';

import IonIcon from 'react-native-vector-icons/Ionicons'; //person-add-sharp
import {Center, FlatList, HStack, Spinner} from 'native-base';
import Text from '../../components/text/Text';
import SectionTitle from '../../components/text/SectionTitle';

import {useQuery} from '@apollo/client';
import {GET_PATIENTS} from '../../graphql/query/patient';
import Colors from '../../constants/Colors';
import ErrorComponent from '../../components/ErrorComponent';
import PatientCard from '../../components/cards/PatientCard';

const PatientListScreen = () => {
  const {data, loading, error} = useQuery(GET_PATIENTS);

  const renderPatients = () => {
    if (loading) {
      return (
        <Center my="3">
          <Spinner color={Colors.primary} />
        </Center>
      );
    }
    if (error) {
      return <ErrorComponent error={error} />;
    }
    const patients = data?.getPatientsOfUser;
    return (
      <FlatList
        data={patients}
        keyExtractor={item => item!.id}
        renderItem={({item}) => {
          return <PatientCard name={item!.name} age={item!.age!} />;
        }}
      />
    );
  };

  return (
    <View style={styles.main}>
      <TouchableOpacity>
        <HStack py="4">
          <IonIcon name="person-add-sharp" />
          <Text h3>Add a Patient</Text>
        </HStack>
      </TouchableOpacity>
      <SectionTitle>Patients List</SectionTitle>
      {renderPatients()}
    </View>
  );
};

export default PatientListScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
