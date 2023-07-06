import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Center} from 'native-base';
import Icons from '../../constants/Icons';
import Colors from '../../constants/Colors';
import Fonts, {sizes} from '../../constants/Fonts';

interface CardProps {
  image?: string;
  name: string;
  id: string;
  onPress?: () => void;
}

const SpecialityCard = ({image, name, onPress}: CardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Center>
        <Image
          source={image ? {uri: image} : Icons.WelcomeIcon}
          alt={name}
          style={styles.image}
        />
        <Text style={styles.text}>{name}</Text>
      </Center>
    </TouchableOpacity>
  );
};

export default SpecialityCard;

const styles = StyleSheet.create({
  card: {
    width: 140,
    height: 120,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.radius,
    marginHorizontal: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    ...Fonts.regular,
    marginTop: 5,
    fontSize: sizes.body4,
  },
});
