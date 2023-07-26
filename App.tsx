import React from 'react';
import Providers from './src/components/Providers';
import {LogBox} from 'react-native';
import {
  SignedIn,
  SignedOut,
  ClerkLoading,
  ClerkLoaded,
} from '@clerk/clerk-expo';

import BottomTabNavigator from './src/navigation/BottomTabsNavigation';
import AuthNavigator from './src/navigation/AuthStackNavigator';
import SplashScreen from './src/screens/SplashScreen';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Providers>
      <ClerkLoading>
        <SplashScreen />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedOut>
          <AuthNavigator />
        </SignedOut>
        <SignedIn>
          <BottomTabNavigator />
        </SignedIn>
      </ClerkLoaded>
    </Providers>
  );
};

export default App;
