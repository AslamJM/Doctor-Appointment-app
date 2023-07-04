import React from 'react';
import {Stack} from 'native-base';
import Text from '../text/Text';

type Props = {
  name: string;
  age: number;
};

const PatientCard = ({name, age}: Props) => {
  return (
    <Stack py="4" bg="white" rounded="md" my="3" px="3">
      <Text h3>{name}</Text>
      <Text h4>{`${age} years old`}</Text>
    </Stack>
  );
};

export default PatientCard;
