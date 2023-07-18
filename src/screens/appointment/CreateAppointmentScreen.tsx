import {StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import SectionTitle from '../../components/text/SectionTitle';
import {useQuery, useLazyQuery} from '@apollo/client';
import {GET_SPECIALITIES} from '../../graphql/query/speciality';
import {SEARCH_DOCTORS} from '../../graphql/query/doctor';
import {Flex, Center, Spinner, Badge, Box, Input, Button} from 'native-base';
import Colors from '../../constants/Colors';
import ErrorComponent from '../../components/ErrorComponent';
import Text from '../../components/text/Text';

import {HomeStackScreenProps} from '../../navigation/types';
import Fonts, {sizes} from '../../constants/Fonts';
import DoctorCard from '../../components/cards/DoctorCard';

const CreateAppointmentScreen = ({
  navigation,
}: HomeStackScreenProps<'CreateAppointment'>) => {
  const [name, setName] = useState('');

  const {loading, error, data} = useQuery(GET_SPECIALITIES);

  const [
    searchDocs,
    {loading: searching, error: searchError, data: searchResults},
  ] = useLazyQuery(SEARCH_DOCTORS, {
    variables: {
      name,
    },
  });

  const renderFields = () => {
    if (loading) {
      return (
        <Center height="300">
          <Spinner color={Colors.primary} />
        </Center>
      );
    }
    if (error) {
      return <ErrorComponent error={error} />;
    }
    return (
      <Flex direction="row" flexWrap="wrap">
        {data?.getSpecialities.map(sp => (
          <TouchableOpacity
            key={sp.id}
            style={{margin: 5}}
            onPress={() =>
              navigation.navigate('Specialists', {
                specialityId: sp.id,
                specialityName: sp.name,
              })
            }>
            <Badge bg="#fff">
              <Text h3>{sp.name}</Text>
            </Badge>
          </TouchableOpacity>
        ))}
      </Flex>
    );
  };

  const renderSearchResults = () => {
    if (searching) {
      return (
        <Center height="300">
          <Spinner color={Colors.primary} />
        </Center>
      );
    }
    if (searchError) {
      return <ErrorComponent error={searchError} />;
    }
    if (searchResults) {
      if (searchResults?.searchDoctors.length === 0) {
        return (
          <Center height="200">
            <Text h3>Doctor not found.</Text>
          </Center>
        );
      } else {
        return (
          <FlatList
            data={searchResults?.searchDoctors}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <DoctorCard
                name={item.name}
                image={item.image!}
                id={item.id}
                experience={item.experience}
                speciality={item.speciality.name}
                onPress={() =>
                  navigation.navigate('TimeSlot', {doctorId: item.id})
                }
              />
            )}
          />
        );
      }
    }
  };

  return (
    <View style={styles.main}>
      <SectionTitle>What field you're looking a doctor for?</SectionTitle>
      {renderFields()}
      <Box mt={15}>
        <SectionTitle>Search for a specific doctor.</SectionTitle>
        <View style={styles.inputContainer}>
          <Input
            placeholder="search doctors"
            variant="outline"
            style={styles.inputText}
            value={name}
            onChangeText={setName}
          />
          <Button
            style={styles.btn}
            isDisabled={name === '' || searching}
            onPress={() => searchDocs()}>
            <Text h4 style={{color: '#fff'}}>
              GO
            </Text>
          </Button>
        </View>
        {renderSearchResults()}
      </Box>
    </View>
  );
};

export default CreateAppointmentScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  inputContainer: {
    marginTop: 12,
    marginBottom: 10,
    position: 'relative',
  },
  inputText: {
    ...Fonts.regular,
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    fontSize: sizes.body3,
    paddingVertical: 8,
    borderColor: Colors.primary,
    height: 50,
  },
  btn: {
    position: 'absolute',
    top: 6,
    right: 5,
    width: 48,
    height: 40,
    backgroundColor: Colors.primary,
  },
});
