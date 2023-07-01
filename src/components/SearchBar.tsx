import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Input} from 'native-base';
import Fonts, {sizes} from '../constants/Fonts';
import Colors from '../constants/Colors';

const SearchBar = () => {
  return (
    <View style={styles.inputContainer}>
      <Input
        placeholder="search doctors"
        variant="outline"
        style={styles.inputText}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 12,
    marginBottom: 10,
  },
  inputText: {
    ...Fonts.regular,
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    fontSize: sizes.body3,
    paddingVertical: 8,
    borderColor: Colors.primary,
  },
});
