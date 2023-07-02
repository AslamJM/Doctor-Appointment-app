import {StyleSheet, View} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {NativeBaseProvider} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import {NavigationContainer} from '@react-navigation/native';
import AppProvider from '../context/GlobalContext';
import ApolloProviderWrapper from '../graphql/ApolloWrapper';
import {ClerkProvider} from '@clerk/clerk-expo';
import {tokenCache} from '../auth/cache';

const Providers = ({children}: PropsWithChildren) => {
  return (
    <SafeAreaProvider>
      <ClerkProvider
        tokenCache={tokenCache}
        publishableKey="pk_test_YWxlcnQtY2FyaWJvdS03OS5jbGVyay5hY2NvdW50cy5kZXYk">
        <ApolloProviderWrapper>
          <NativeBaseProvider>
            <AppProvider>
              <NavigationContainer>
                <View style={styles.container}>{children}</View>
              </NavigationContainer>
            </AppProvider>
          </NativeBaseProvider>
        </ApolloProviderWrapper>
      </ClerkProvider>
    </SafeAreaProvider>
  );
};

export default Providers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgGray,
  },
});
