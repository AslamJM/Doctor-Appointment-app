import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {Box, Flex, Circle} from 'native-base';
import Colors from '../../constants/Colors';
import Fonts, {sizes} from '../../constants/Fonts';
import dayjs from 'dayjs';

type Props = {
  status: 'PENDING' | 'COMPLETED' | 'CANCELLED';
  doctor: string;
  speciality: string;
  time: string;
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

const AppointmentCard = ({status, time, doctor, speciality}: Props) => {
  return (
    <Flex direction="row" style={styles.container}>
      <Circle style={[{...styles.circle, backgroundColor: getbgColor(status)}]}>
        <Text style={styles.date}>{dayjs(time).format('DD MMM YYYY')}</Text>
      </Circle>
      <Box style={styles.content}>
        <Text style={styles.time}>{dayjs(time).format('HH:MM A')}</Text>
        <Text style={styles.name}>{doctor}</Text>
        <Text style={styles.field}>{speciality}</Text>
      </Box>
    </Flex>
  );
};

export default AppointmentCard;

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: Colors.white,
    padding: 8,
    marginVertical: 5,
    borderRadius: 8,
  },
  circle: {
    flex: 1,
    aspectRatio: 1,
    padding: 5,
  },
  date: {
    ...Fonts.bold,
    fontSize: sizes.h4,
  },
  content: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    flex: 3,
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
});
