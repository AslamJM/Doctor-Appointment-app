import {StyleSheet, Text, TextProps} from 'react-native';
import React from 'react';
import Fonts, {sizes} from '../../constants/Fonts';
import Colors from '../../constants/Colors';

const SectionTitle = ({children, ...props}: TextProps) => {
  return (
    <Text style={styles.text} {...props}>
      {children}
    </Text>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  text: {
    ...Fonts.bold,
    fontSize: sizes.h3,
    color: Colors.black,
    marginVertical: 5,
  },
});
