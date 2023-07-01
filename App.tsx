import React from 'react';
import Providers from './src/components/Providers';
import SpecialistScreen from './src/screens/doctor/SpecialistScreen';

const App = () => {
  return (
    <Providers>
      <SpecialistScreen />
    </Providers>
  );
};

export default App;
