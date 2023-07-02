import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ApolloError} from '@apollo/client';
import Text from './text/Text';

type ErrorProps = {
  error: ApolloError | string;
};

const ErrorComponent = ({error}: ErrorProps) => {
  const errorText = () => {
    if (typeof error === 'string') {
      return error;
    }
    if (error.clientErrors.length > 0) {
      return error.clientErrors[0].message;
    }
    if (error.graphQLErrors.length > 0) {
      return error.graphQLErrors[0].message;
    }
    if (error.networkError) {
      return error.networkError.message;
    }
    return error.message;
  };
  return (
    <View style={styles.main}>
      <Text h3>{errorText()}</Text>
    </View>
  );
};

export default ErrorComponent;

const styles = StyleSheet.create({
  main: {
    borderRadius: 8,
    padding: 10,
    marginVertical: 6,
  },
});
