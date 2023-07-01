import {StyleSheet, Text} from 'react-native';
import {Box, Flex, Avatar, Button, Center} from 'native-base';
import React from 'react';
import Icons from '../../constants/Icons';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

interface DoctorCardProps {
  name: string;
  speciality: string;
  experience: number;
  id: string;
  image?: string;
  onClick: () => void;
}

const TimeSlotCard = ({
  name,
  speciality,
  experience,
  id,
  image,
  onClick,
}: DoctorCardProps) => {
  return (
    <Flex direction="row" style={styles.card}>
      <Box>
        <Avatar source={image ? {uri: image} : Icons.DoctorImage} size="xl" />
      </Box>
      <Flex style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.speciality}>{speciality}</Text>
        <Text style={styles.experience}>{experience} years of experience</Text>
      </Flex>
      <Center>
        <Button variant="ghost" onPress={onClick}>
          <Text style={styles.buttonText}>Profile</Text>
        </Button>
      </Center>
    </Flex>
  );
};

export default TimeSlotCard;

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: Colors.white,
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
    color: Colors.primary,
  },
});
