import {StyleSheet, Text, Image} from 'react-native';
import React from 'react';
import {Box, Button, Flex} from 'native-base';
import Icons from '../../constants/Icons';
import Fonts, {sizes} from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import Entypo from 'react-native-vector-icons/Entypo';

interface HospitalCardProps {
  name: string;
  address: string;
  image?: string;
  onPress: () => void;
}

const HospitalCard = ({name, address, image, onPress}: HospitalCardProps) => {
  return (
    <Box style={styles.card}>
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
          <Flex direction="row" justifyContent="center" mt={2}>
            <Button variant="outline" mr={2} borderColor={Colors.amber}>
              <Text style={styles.btnText}>Call Now</Text>
            </Button>
            <Button
              onPress={onPress}
              ml={2}
              borderColor={Colors.primary}
              backgroundColor={Colors.primary}>
              <Text style={[{...styles.btnText, color: Colors.white}]}>
                Details <Entypo name="chevron-right" color={Colors.white} />
              </Text>
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
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
  btnText: {
    ...Fonts.regular,
  },
});
