import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Box, Flex} from 'native-base';
import Icons from '../../constants/Icons';
import Fonts, {sizes} from '../../constants/Fonts';
import Colors from '../../constants/Colors';

interface HospitalCardProps {
  name: string;
  address: string;
  timing: string;
}

const HospitalPageCard = ({name, address, timing}: HospitalCardProps) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Flex direction="row">
        <Box style={styles.imageContainer}>
          <Image source={Icons.HospitalImage} style={styles.image} />
        </Box>
        <Box style={styles.contentContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.address}>{address}</Text>
          <Text style={styles.timing}>Timing:</Text>
          <Text style={styles.address}>{timing}</Text>
        </Box>
      </Flex>
    </TouchableOpacity>
  );
};

export default HospitalPageCard;

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    borderRadius: sizes.radius,
    paddingHorizontal: 5,
    margin: 10,
    backgroundColor: Colors.white,
  },
  imageContainer: {
    flex: 2,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    height: 150,
    width: '100%',
    borderRadius: 10,
  },
  contentContainer: {
    flex: 3,
    padding: 4,
  },
  name: {
    ...Fonts.medium,
    marginVertical: 5,
  },
  address: {
    ...Fonts.light,
  },
  timing: {
    ...Fonts.regular,
    marginTop: 12,
  },
});
