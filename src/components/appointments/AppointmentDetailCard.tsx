import React from 'react';
import {HStack, Stack, Box} from 'native-base';
import Colors from '../../constants/Colors';
import Text from '../text/Text';
import dayjs from 'dayjs';

interface Props {
  time: string;
  date: string;
}

const AppointmentDetailCard = ({time, date}: Props) => {
  return (
    <Box py="3" my="2" px="2" bg={Colors.white} rounded="md">
      <HStack justifyContent="space-between">
        <Stack w="1/2">
          <Text h3>Date</Text>
          <Text h4>{dayjs(date).format('DD MMM YYYY')}</Text>
        </Stack>
        <Stack w="1/2">
          <Text h3>Time</Text>
          <Text h4>{time}</Text>
        </Stack>
      </HStack>
    </Box>
  );
};

export default AppointmentDetailCard;
