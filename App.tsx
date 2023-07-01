import React from 'react';
import Providers from './src/components/Providers';
import BottomTabNavigator from './src/navigation/BottomTabsNavigation';

const App = () => {
  return (
    <Providers>
      <BottomTabNavigator />
    </Providers>
  );
};

export default App;
