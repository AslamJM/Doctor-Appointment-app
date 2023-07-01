import {StyleSheet, View} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {NativeBaseProvider} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import {NavigationContainer} from '@react-navigation/native';

const Providers = ({children}: PropsWithChildren) => {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <View style={styles.container}>{children}</View>
        </NavigationContainer>
      </NativeBaseProvider>
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
