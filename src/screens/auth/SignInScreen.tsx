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
import {AuthStackScreenProps} from '../../navigation/types';
import Logo from '../../components/Logo';
import Fonts from '../../constants/Fonts';

import {useSignIn, isClerkAPIResponseError} from '@clerk/clerk-expo';

const SignInScreen = ({navigation}: AuthStackScreenProps<'SignIn'>) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {signIn, isLoaded} = useSignIn();

  const handleSignIn = async () => {
    setLoading(true);
    if (!isLoaded) {
      return;
    }
    try {
      await signIn.create({
        identifier: email,
        strategy: 'email_code',
      });
      navigation.navigate('VerifyEmail', {type: 'SignIn'});
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
      <Center mb={3}>
        <Logo />
        <Text h3>Sign In to your account</Text>
      </Center>
      <FormControl isInvalid={!!error}>
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
          isLoading={loading}
          onPress={handleSignIn}
          isDisabled={email.length === 0 || loading}>
          <Text h3 style={{color: Colors.white}}>
            Sign In
          </Text>
        </Button>
      </Flex>
      <Flex direction="row" alignItems="center" justifyContent="center" py={2}>
        <Text h3>Don't have an account? go to </Text>{' '}
        <Button
          variant="ghost"
          onPress={() => navigation.navigate('SignUp')}
          px={0}>
          <Text h3 style={styles.ghostbtn}>
            Sign Up
          </Text>
        </Button>
      </Flex>
    </Center>
  );
};

export default SignInScreen;

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
