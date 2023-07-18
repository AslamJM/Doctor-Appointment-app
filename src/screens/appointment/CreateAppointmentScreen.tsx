import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import SectionTitle from '../../components/text/SectionTitle';
import {useQuery} from '@apollo/client';
import {GET_SPECIALITIES} from '../../graphql/query/speciality';
import {Flex, Center, Spinner, Badge, Box} from 'native-base';
import Colors from '../../constants/Colors';
import ErrorComponent from '../../components/ErrorComponent';
import Text from '../../components/text/Text';

import {HomeStackScreenProps} from '../../navigation/types';
import SearchBar from '../../components/SearchBar';

const CreateAppointmentScreen = ({
  navigation,
}: HomeStackScreenProps<'CreateAppointment'>) => {
  const {loading, error, data} = useQuery(GET_SPECIALITIES);

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

  return (
    <View style={styles.main}>
      <SectionTitle>What field you're looking a doctor for?</SectionTitle>
      {renderFields()}
      <Box mt={15}>
        <SectionTitle>Search for a specific doctor.</SectionTitle>
        <SearchBar />
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
});
