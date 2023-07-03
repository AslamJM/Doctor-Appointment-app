import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  Center,
  Input,
  FormControl,
  Stack,
  Button,
  WarningOutlineIcon,
  Flex,
} from 'native-base';
import Text from '../../components/text/Text';
import Colors from '../../constants/Colors';
import Logo from '../../components/Logo';

import {AuthStackScreenProps} from '../../navigation/types';
import Fonts from '../../constants/Fonts';

import {useSignUp, isClerkAPIResponseError} from '@clerk/clerk-expo';

const SignUpScreen = ({navigation}: AuthStackScreenProps<'SignUp'>) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {isLoaded, signUp} = useSignUp();

  const signUpHandler = async () => {
    setLoading(true);
    if (!isLoaded) {
      return;
    }
    try {
      await signUp.create({
        emailAddress: email,
        firstName: name,
      });
      await signUp.prepareEmailAddressVerification({strategy: 'email_code'});
      navigation.navigate('VerifyEmail', {type: 'SignUp'});
    } catch (error) {
      if (isClerkAPIResponseError(error)) {
        setError(error.message);
      } else {
        setError('Something Went Wrong');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Center flex={1}>
      <Logo />
      <Text h3>Sign Up into our application using email.</Text>
      <FormControl isInvalid={!!error}>
        <Stack mx="10">
          <FormControl.Label>
            <Text h4>Your Name</Text>
          </FormControl.Label>
          <Input
            type="text"
            placeholder="type here...."
            size="lg"
            style={styles.label}
            focusOutlineColor={Colors.primary}
            value={name}
            onChangeText={setName}
          />

          <FormControl.ErrorMessage
            leftIcon={
              <WarningOutlineIcon size="xs" />
            }></FormControl.ErrorMessage>
        </Stack>
      </FormControl>
      <FormControl mt="2" isInvalid={!!error}>
        <Stack mx="10">
          <FormControl.Label>
            <Text h4>Your Email</Text>
          </FormControl.Label>
          <Input
            placeholder="type here...."
            size="lg"
            style={styles.label}
            focusOutlineColor={Colors.primary}
            value={email}
            onChangeText={setEmail}
          />

          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {error && error}
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>
      <Flex mt="3" alignItems="center" justifyContent="center">
        <Button
          width={100}
          backgroundColor={Colors.primary}
          onPress={signUpHandler}
          isDisabled={name.length === 0 || email.length === 0 || loading}
          isLoading={loading}>
          <Text h3 style={{color: Colors.white}}>
            Sign Up
          </Text>
        </Button>
      </Flex>
      <Flex direction="row" alignItems="center" justifyContent="center" py={2}>
        <Text h3>Already Registered? go to </Text>
        <Button
          variant="ghost"
          onPress={() => navigation.navigate('SignIn')}
          px={0}>
          <Text h3 style={styles.ghostbtn}>
            Sign In
          </Text>
        </Button>
      </Flex>
    </Center>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
  },
  label: {
    ...Fonts.light,
  },
  ghostbtn: {
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
});
