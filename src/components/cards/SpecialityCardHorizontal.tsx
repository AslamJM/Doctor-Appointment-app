import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ChevronRightIcon, Flex} from 'native-base';
import Icons from '../../constants/Icons';
import Colors from '../../constants/Colors';
import Fonts, {sizes} from '../../constants/Fonts';

interface CardProps {
  image?: string;
  name: string;
  id: string;
  onPress?: () => void;
}

const SpecialityCardHorizontal = ({image, name, onPress}: CardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Flex direction="row" alignItems="center">
        <Image
          source={image ? {uri: image} : Icons.WelcomeIcon}
          alt={name}
          style={styles.image}
        />
        <Text style={styles.text}>{name}</Text>
        <ChevronRightIcon />
      </Flex>
    </TouchableOpacity>
  );
};

export default SpecialityCardHorizontal;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.radius,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  text: {
    ...Fonts.regular,
    marginTop: 5,
    fontSize: sizes.body4,
    flexGrow: 1,
    marginLeft: 15,
  },
});
