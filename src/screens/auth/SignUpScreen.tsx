import {StyleSheet} from 'react-native';
import React from 'react';
import {
  Center,
  Input,
  FormControl,
  Stack,
  Button,
  WarningOutlineIcon,
  Flex,
  Box,
} from 'native-base';
import Text from '../../components/text/Text';
import Colors from '../../constants/Colors';

const SignUpScreen = () => {
  return (
    <Center flex={1}>
      <FormControl>
        <Stack mx="10">
          <FormControl.Label>Your Name</FormControl.Label>
          <Input placeholder="type here...." size="lg" />

          <FormControl.ErrorMessage
            leftIcon={
              <WarningOutlineIcon size="xs" />
            }></FormControl.ErrorMessage>
        </Stack>
      </FormControl>
      <FormControl mt="2">
        <Stack mx="10">
          <FormControl.Label>Your Email</FormControl.Label>
          <Input placeholder="type here...." size="lg" />

          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Atleast 6 characters are required.
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>
      <Flex mt="3" alignItems="start" justifyContent="start">
        <Button>
          <Text h3>Sign Up</Text>
        </Button>
      </Flex>
      <Box>
        <Text>Already Registered go to </Text>
      </Box>
    </Center>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
  },
});
