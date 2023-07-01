import {StyleSheet, Text, TextProps} from 'react-native';
import React from 'react';
import Fonts, {sizes} from '../../constants/Fonts';
import Colors from '../../constants/Colors';

const Paragraph = ({children, ...props}: TextProps) => {
  return (
    <Text style={styles.text} {...props}>
      {children}
    </Text>
  );
};

export default Paragraph;

const styles = StyleSheet.create({
  text: {
    ...Fonts.light,
    fontSize: sizes.body3,
    color: Colors.gray,
    marginVertical: 5,
  },
});
