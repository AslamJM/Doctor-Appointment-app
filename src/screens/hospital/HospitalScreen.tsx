import {StyleSheet, Text, ScrollView} from 'react-native';
import React from 'react';
import HospitalPageCard from '../../components/cards/HospitalPageCard';
import {Divider, Box, Flex, Button, Badge} from 'native-base';
import SectionTitle from '../../components/text/SectionTitle';
import Paragraph from '../../components/text/Paragraph';
import Fonts, {sizes} from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import MapView, {Marker} from 'react-native-maps';

const facilitiesList = [
  'Parking available',
  'E-Reports available',
  'Card accepted',
  'Prescription pick up available',
  'Report doorstep drop available',
];

const HospitalScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HospitalPageCard
        name="Sidda Medicine Hospital"
        address="Sidda Medicine Hospital, Sidda road , siddaleba"
        timing="9.00 A.M to 4.00 P.M"
      />
      <Divider />
      <Box px={5}>
        <SectionTitle>Address</SectionTitle>
        <Paragraph>Sidda Medicine Hospital, Sidda road , siddaleba</Paragraph>
        <Box overflow="hidden" borderRadius={8} shadow="1">
          <MapView
            // eslint-disable-next-line react-native/no-inline-styles
            style={{height: 270.0}}
            initialRegion={{
              latitude: 37.33233141,
              longitude: -122.0312186,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}>
            <Marker
              coordinate={{latitude: 37.33233141, longitude: -122.0312186}}
              pinColor={Colors.primary}
            />
          </MapView>
        </Box>
        <SectionTitle>Facilities</SectionTitle>
        <Flex direction="row" wrap="wrap" mb={2}>
          {facilitiesList.map(f => (
            <Badge key={f} style={styles.badge}>
              <Text style={styles.badgeText}>{f}</Text>
            </Badge>
          ))}
        </Flex>
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
