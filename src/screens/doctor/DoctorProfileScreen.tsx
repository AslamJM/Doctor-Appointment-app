import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {Box, Flex} from 'native-base';
import Icons from '../../constants/Icons';
import Colors from '../../constants/Colors';
import Text from '../../components/text/Text';
import SectionTitle from '../../components/text/SectionTitle';

const DoctorProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Flex direction="row" style={styles.details}>
        <Box>
          <Image source={Icons.DoctorImage} style={styles.drImage} />
        </Box>
        <Box style={styles.drDetails}>
          <Text h3>Dr. Kiladu Daileee</Text>
          <Text h4 style={styles.contactText}>
            678-34455-565
          </Text>
          <Text h4 style={styles.contactText}>
            asad@fdfdf.com
          </Text>
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
    height: 150,
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
