import {StyleSheet, Text, ScrollView} from 'react-native';
import React from 'react';
import HospitalPageCard from '../../components/cards/HospitalPageCard';
import {Divider, Box, Flex, Button, Badge, Skeleton} from 'native-base';
import SectionTitle from '../../components/text/SectionTitle';
import Paragraph from '../../components/text/Paragraph';
import Fonts, {sizes} from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import MapView, {Marker} from 'react-native-maps';

import {gql, useApolloClient, useQuery} from '@apollo/client';
import {GET_HOSPITAL} from '../../graphql/query/hospitals';
import {HomeStackScreenProps} from '../../navigation/types';
import {Hospital} from '../../__generated__/graphql';
import ErrorComponent from '../../components/ErrorComponent';
import {MapSkeleton} from '../../components/skeletons/cards';

const HospitalScreen = ({route}: HomeStackScreenProps<'Hospital'>) => {
  const {hospitalId} = route.params;
  const client = useApolloClient();

  // read from cache
  const hospital = client.readFragment<Hospital>({
    id: `Hospital:${hospitalId}`,
    fragment: gql`
      fragment GetHospitals on Hospital {
        name
        address
        image
      }
    `,
  })!;

  // query
  const {data, error, loading} = useQuery(GET_HOSPITAL, {
    variables: {
      getHospitalId: hospitalId,
    },
  });

  const renderComponent = () => {
    if (error) {
      return <ErrorComponent error={error} />;
    }
    if (loading) {
      return (
        <>
          <MapSkeleton />
          <SectionTitle>Facilities</SectionTitle>
          <Skeleton.Text h="200" />
        </>
      );
    }
    const hospital = data?.getHospital;

    if (!loading && !hospital) {
      return <ErrorComponent error="something went wrong" />;
    }
    if (hospital) {
      const [lat, lang] = hospital.geolocation.coordinates;
      return (
        <>
          <Box overflow="hidden" borderRadius={8} shadow="1">
            <MapView
              style={{height: 270.0}}
              initialRegion={{
                latitude: lat!,
                longitude: lang!,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              }}>
              <Marker
                coordinate={{latitude: lat!, longitude: lang!}}
                pinColor={Colors.primary}
              />
            </MapView>
          </Box>
          <SectionTitle>Facilities</SectionTitle>
          <Flex direction="row" wrap="wrap" mb={2}>
            {hospital.facilities.map(f => (
              <Badge key={f} style={styles.badge}>
                <Text style={styles.badgeText}>{f}</Text>
              </Badge>
            ))}
          </Flex>
        </>
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <HospitalPageCard
        name={hospital.name}
        address={hospital.address}
        timing="9.00 A.M to 4.00 P.M"
      />
      <Divider />
      <Box px={5}>
        <SectionTitle>Address</SectionTitle>
        <Paragraph>{hospital.address}</Paragraph>
        {renderComponent()}
        <Flex direction="row" justifyContent="center" my={3}>
          <Button
            mr={2}
            variant="outline"
            backgroundColor={Colors.amber}
            borderColor={Colors.amber}
            shadow="1"
            onPress={() => {}}>
            <Text style={styles.buttontext}>Message</Text>
          </Button>
          <Button
            ml={2}
            variant="outline"
            backgroundColor={Colors.primary}
            borderColor={Colors.primary}
            shadow="1">
            <Text style={styles.buttontext}>Call Now</Text>
          </Button>
        </Flex>
      </Box>
    </ScrollView>
  );
};

export default HospitalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    height: 270,
    marginBottom: 12,
  },
  buttontext: {
    ...Fonts.bold,
    fontSize: 15,
  },
  badge: {
    padding: 4,
    backgroundColor: Colors.white,
    marginHorizontal: 4,
    marginVertical: 3,
  },
  badgeText: {
    ...Fonts.light,
    fontSize: sizes.body4,
  },
});
