import React from 'react';
import {Center} from 'native-base';
import Icons from '../constants/Icons';
import {Image} from 'react-native';

const SplashScreen = () => {
  return (
    <Center flex={1}>
      <Image
        source={Icons.WelcomeIcon}
        alt="Splash"
        style={{
          width: 100,
          height: 100,
        }}
      />
    </Center>
  );
};

export default SplashScreen;
