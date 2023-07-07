import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {Box, Flex} from 'native-base';
import Icons from '../../constants/Icons';
import Colors from '../../constants/Colors';
import Text from '../../components/text/Text';
import SectionTitle from '../../components/text/SectionTitle';
import {useQuery, useApolloClient, gql} from '@apollo/client';

import {HomeStackScreenProps} from '../../navigation/types';
import {Doctor} from '../../__generated__/graphql';

const DoctorProfileScreen = ({
  route,
}: HomeStackScreenProps<'DoctorProfile'>) => {
  const {doctorId} = route.params;
  const client = useApolloClient();

  const doctor = client.readFragment<Doctor>({
    id: `Doctor:${doctorId}`,
    fragment: gql`
      fragment GetDocProf on Doctor {
        name
        image
        email
        phone
        address
      }
    `,
  });

  return (
    <View style={styles.container}>
      <Flex direction="row" style={styles.details}>
        <Box>
          <Image source={{uri: doctor!.image!}} style={styles.drImage} />
        </Box>
        <Box style={styles.drDetails}>
          <Text h3>{doctor!.name}</Text>
          <Text h4 style={styles.contactText}>
            {doctor!.phone}
          </Text>
          <Text h4 style={styles.contactText}>
            {doctor!.email || 'not available'}
          </Text>
          <Text h4>{doctor!.address}</Text>
        </Box>
      </Flex>
      <Text h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        laudantium animi aut delectus, facilis soluta dolor quas facere cum
        velit?
      </Text>
      <SectionTitle>Reviews</SectionTitle>
    </View>
  );
};

export default DoctorProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  details: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: Colors.white,
  },
  drImage: {
    height: 110,
    aspectRatio: 1,
    borderRadius: 8,
  },
  drDetails: {
    paddingHorizontal: 10,
  },
  contactText: {
    color: Colors.gray,
  },
});
