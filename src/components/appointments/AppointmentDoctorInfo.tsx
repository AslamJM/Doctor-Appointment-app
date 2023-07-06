import React from 'react';
import {HStack, Stack, Box, Avatar} from 'native-base';
import Colors from '../../constants/Colors';
import Text from '../text/Text';
import dayjs from 'dayjs';

interface Props {
  address: string;
  image: string;
  name: string;
  speciality: string;
  phone: string;
}

const AppointmentDoctorInfo = ({
  image,
  name,
  speciality,
  address,
  phone,
}: Props) => {
  return (
    <Box py="3" my="2" px="2" bg={Colors.white} rounded="md">
      <HStack justifyContent="space-between">
        <HStack w="1/2">
          <Avatar source={{uri: image}} />
          <Stack ml="2">
            <Text h3>{name}</Text>
            <Text h4 style={{color: Colors.red}}>
              {speciality}
            </Text>
          </Stack>
        </HStack>
        <Stack w="1/2">
          <Text h3>Phone</Text>
          <Text h4>{phone}</Text>
        </Stack>
      </HStack>
      <Stack mt="2">
        <Text h3>Address</Text>
        <Text h4>{address}</Text>
      </Stack>
    </Box>
  );
};

export default AppointmentDoctorInfo;
