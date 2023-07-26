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
import Logo from '../../components/Logo';
import Text from '../../components/text/Text';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

import {useSignUp, useSignIn, isClerkAPIResponseError} from '@clerk/clerk-expo';
import {AuthStackScreenProps} from '../../navigation/types';

import {useMutation} from '@apollo/client';
import {CREATE_USER} from '../../graphql/mutation/user';

const VerifyCodeScreen = ({
  route,
  navigation,
}: AuthStackScreenProps<'VerifyEmail'>) => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {type} = route.params;

  // clerk
  const {isLoaded, signUp, setSession} = useSignUp();
  const {
    isLoaded: signinLoad,
    signIn,
    setSession: setSignInSession,
  } = useSignIn();
  const [create] = useMutation(CREATE_USER);

  // sign up
  const verifySignUp = async () => {
    setLoading(true);
    if (!isLoaded) {
      return;
    }
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      await setSession(completeSignUp.createdSessionId);
      await create();
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

  // sign in
  const verifySignIn = async () => {
    setLoading(true);
    if (!signinLoad) {
      return;
    }
    try {
      const completeSignIn = await signIn.attemptFirstFactor({
        strategy: 'email_code',
        code,
      });

      await setSignInSession(completeSignIn.createdSessionId);
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
      <Center px="4" mb={3}>
        <Logo />
        <Text h3>Please enter the verification code sent to </Text>
        <Text h3>{signUp?.emailAddress || signIn?.identifier || ''}</Text>
      </Center>
      <FormControl isInvalid={!!error}>
        <Stack mx="10">
          <FormControl.Label>
            <Text h4>Verfication code</Text>
          </FormControl.Label>
          <Input
            type="text"
            placeholder="6-Digit code here"
            size="lg"
            style={styles.label}
            focusOutlineColor={Colors.primary}
            value={code}
            onChangeText={setCode}
            keyboardType="numeric"
          />

          <FormControl.ErrorMessage
            leftIcon={
              <WarningOutlineIcon size="xs" />
            }></FormControl.ErrorMessage>
        </Stack>
      </FormControl>
      <Flex mt="3" alignItems="center" justifyContent="center">
        <Button
          width={100}
          backgroundColor={Colors.primary}
          isDisabled={code.length !== 6 || loading}
          isLoading={loading}
          onPress={type === 'SignIn' ? verifySignIn : verifySignUp}>
          <Text h3 style={{color: Colors.white}}>
            {loading ? 'Verifying...' : 'Verify'}
          </Text>
        </Button>
      </Flex>
    </Center>
  );
};

export default VerifyCodeScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
  },
  label: {
    ...Fonts.light,
  },
});
