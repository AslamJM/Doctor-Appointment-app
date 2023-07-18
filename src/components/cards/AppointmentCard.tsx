import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Box, ChevronRightIcon, Circle, HStack} from 'native-base';
import Colors from '../../constants/Colors';
import Fonts, {sizes} from '../../constants/Fonts';
import dayjs from 'dayjs';

type Props = {
  status: 'PENDING' | 'COMPLETED' | 'CANCELLED';
  doctor: string;
  speciality: string;
  time: string;
  date: string;
  onPress: () => void;
};

const getbgColor = (status: 'PENDING' | 'COMPLETED' | 'CANCELLED') => {
  switch (status) {
    case 'PENDING':
      return Colors.amber;
    case 'CANCELLED':
      return Colors.red;
    case 'COMPLETED':
      return Colors.primary;
  }
};

const AppointmentCard = ({
  status,
  time,
  date,
  doctor,
  speciality,
  onPress,
}: Props) => {
  return (
    <HStack
      justifyContent="space-between"
      style={styles.container}
      alignItems="center">
      <HStack h="full" flexGrow={1} alignItems="center">
        <Circle
          style={[{...styles.circle, backgroundColor: getbgColor(status)}]}>
          <Text style={styles.date}>{dayjs(date).format('DD MMM YYYY')}</Text>
        </Circle>
        <Box style={styles.content}>
          <Text style={styles.time}>{time}</Text>
          <Text style={styles.name}>Dr. {doctor}</Text>
          <Text style={styles.field}>{speciality}</Text>
        </Box>
      </HStack>
      <TouchableOpacity onPress={onPress}>
        <HStack alignItems="center">
          <Text style={styles.details}>Details</Text>
          <ChevronRightIcon color={Colors.primary} ml="2" />
        </HStack>
      </TouchableOpacity>
    </HStack>
  );
};

export default AppointmentCard;

//dayjs(time).format('HH:MM A')

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: Colors.white,
    padding: 8,
    marginVertical: 5,
    borderRadius: 8,
  },
  circle: {
    aspectRatio: 1,
    padding: 5,
    width: 100,
  },
  date: {
    ...Fonts.bold,
    fontSize: sizes.h5,
  },
  content: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  time: {
    ...Fonts.bold,
    fontSize: sizes.body3,
  },
  name: {
    ...Fonts.regular,
    fontSize: sizes.body4,
  },
  field: {
    ...Fonts.light,
    color: Colors.red,
    fontSize: sizes.body5,
  },
  details: {
    ...Fonts.bold,
  },
});
