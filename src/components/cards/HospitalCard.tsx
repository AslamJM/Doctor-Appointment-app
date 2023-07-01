import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Box, Flex} from 'native-base';
import Icons from '../../constants/Icons';
import Fonts, {sizes} from '../../constants/Fonts';
import Colors from '../../constants/Colors';

interface HospitalCardProps {
  name: string;
  address: string;
  image?: string;
  onPress: () => void;
}

const HospitalCard = ({name, address, image, onPress}: HospitalCardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Flex direction="row">
        <Box style={styles.imageContainer}>
          <Image
            source={image ? {uri: image} : Icons.HospitalImage}
            style={styles.image}
          />
        </Box>
        <Box style={styles.contentContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.address}>{address}</Text>
        </Box>
      </Flex>
    </TouchableOpacity>
  );
};

export default HospitalCard;

const styles = StyleSheet.create({
  card: {
    height: 140,
    overflow: 'hidden',
    borderRadius: sizes.radius,
    backgroundColor: Colors.white,
    marginVertical: 5,
  },
  imageContainer: {
    flex: 2,
    overflow: 'hidden',
  },
  image: {
    height: 175,
    width: '100%',
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
});
