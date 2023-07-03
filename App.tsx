import React from 'react';
import Providers from './src/components/Providers';

import {SignedIn, SignedOut} from '@clerk/clerk-expo';

import BottomTabNavigator from './src/navigation/BottomTabsNavigation';
import AuthNavigator from './src/navigation/AuthStackNavigator';

const App = () => {
  return (
    <Providers>
      <SignedOut>
        <AuthNavigator />
      </SignedOut>
      <SignedIn>
        <BottomTabNavigator />
      </SignedIn>
    </Providers>
  );
};

export default App;
