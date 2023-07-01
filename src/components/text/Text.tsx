import React from 'react';
import {StyleProp, StyleSheet, Text as RNText, TextStyle} from 'react-native';
import fonts, {sizes, lineHeights} from '../../constants/Fonts';

interface Props {
  style?: StyleProp<TextStyle>;
  children: string;
  medium?: boolean;
  light?: boolean;
  bold?: boolean;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  h1Style?: StyleProp<TextStyle>;
  h2Style?: StyleProp<TextStyle>;
  h3Style?: StyleProp<TextStyle>;
  h4Style?: StyleProp<TextStyle>;
  h5Style?: StyleProp<TextStyle>;
  h6Style?: StyleProp<TextStyle>;
  colorSecondary?: boolean;
  colorThird?: boolean;
  primary?: StyleProp<TextStyle>;
  secondary?: StyleProp<TextStyle>;
  third?: StyleProp<TextStyle>;
}

const Text = (props: Props) => {
  const {
    style,
    children,
    medium,
    light,
    bold,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    h1Style,
    h2Style,
    h3Style,
    h4Style,
    h5Style,
    h6Style,
    colorSecondary,
    colorThird,
    primary,
    secondary,
    third,
  } = props;
  return (
    <RNText
      style={StyleSheet.flatten([
        styles.text,
        StyleSheet.flatten([primary, style]),
        colorSecondary && secondary,
        colorThird && third,
        h1 &&
          StyleSheet.flatten([
            {
              fontSize: sizes.h1,
              lineHeight: lineHeights.h1,
            },
            h1Style,
          ]),
        h2 &&
          StyleSheet.flatten([
            {
              fontSize: sizes.h2,
              lineHeight: lineHeights.h2,
            },
            h2Style,
          ]),
        h3 &&
          StyleSheet.flatten([
            {
              fontSize: sizes.h3,
              lineHeight: lineHeights.h3,
            },
            h3Style,
          ]),
        h4 &&
          StyleSheet.flatten([
            {
              fontSize: sizes.h4,
              lineHeight: lineHeights.h4,
            },
            h4Style,
          ]),
        h5 &&
          StyleSheet.flatten([
            {
              fontSize: sizes.h5,
              lineHeight: lineHeights.h5,
            },
            h5Style,
          ]),
        h6 &&
          StyleSheet.flatten([
            {
              fontSize: sizes.h6,
              lineHeight: lineHeights.h6,
            },
            h6Style,
          ]),
        light && styles.light,
        medium && styles.medium,
        bold && styles.bold,
      ])}>
      {children}
    </RNText>
  );
};
export default Text;

const styles = StyleSheet.create({
  text: {
    fontSize: sizes.base,
    ...fonts.regular,
    textAlign: 'left',
  },
  light: {
    ...fonts.light,
  },
  medium: {
    ...fonts.medium,
  },
  bold: {
    ...fonts.bold,
  },
});
