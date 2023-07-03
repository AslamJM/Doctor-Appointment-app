import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Icons from '../constants/Icons';

const Logo = () => {
  return (
    <View style={styles.cnt}>
      <Image source={Icons.WelcomeIcon} style={styles.image} />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  cnt: {
    marginBottom: 20,
  },
  image: {
    height: 100,
    width: 100,
  },
});
