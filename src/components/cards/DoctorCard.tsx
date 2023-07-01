import {StyleSheet, Text} from 'react-native';
import {Box, Flex, Avatar, Button} from 'native-base';
import React from 'react';
import Icons from '../../constants/Icons';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

interface DoctorCardProps {
  name: string;
  speciality: string;
  experience: number;
  image?: string;
  id: string;
  onPress: () => void;
}

const DoctorCard = ({
  name,
  speciality,
  experience,
  image,
  onPress,
}: DoctorCardProps) => {
  return (
    <Box style={styles.card}>
      <Flex direction="row">
        <Box>
          <Avatar source={image ? {uri: image} : Icons.DoctorImage} size="xl" />
        </Box>
        <Flex style={styles.content}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.speciality}>{speciality}</Text>
          <Text style={styles.experience}>
            {experience} years of experience
          </Text>
        </Flex>
      </Flex>
      <Flex direction="row" alignItems="center" justifyContent="center" mt={2}>
        <Button
          variant="outline"
          borderColor={Colors.amber}
          mr={2}
          onPress={onPress}>
          <Text style={styles.buttonText}>Book Video Consult</Text>
        </Button>
        <Button
          variant="outline"
          borderColor={Colors.primary}
          ml={2}
          onPress={onPress}>
          <Text style={styles.buttonText}> Book Appointment</Text>
        </Button>
      </Flex>
    </Box>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: Colors.white,
    marginVertical: 10,
    borderRadius: 8,
  },
  content: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  name: {
    ...Fonts.bold,
    fontSize: 15,
  },
  speciality: {
    ...Fonts.regular,
    color: Colors.gray,
  },
  experience: {
    ...Fonts.regular,
    color: Colors.amber,
  },
  buttonText: {
    ...Fonts.bold,
    fontSize: 15,
  },
});
