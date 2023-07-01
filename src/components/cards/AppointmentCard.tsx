import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {Box, Flex, Circle} from 'native-base';
import Colors from '../../constants/Colors';
import Fonts, {sizes} from '../../constants/Fonts';

const AppointmentCard = () => {
  return (
    <Flex direction="row" style={styles.container}>
      <Circle style={styles.circle}>
        <Text style={styles.date}>15 oct 2022</Text>
      </Circle>
      <Box style={styles.content}>
        <Text style={styles.time}>10.00 A.M</Text>
        <Text style={styles.name}>Dr.kattakunju</Text>
        <Text style={styles.field}>boobalogy</Text>
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
  },
  circle: {
    backgroundColor: Colors.amber,
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
