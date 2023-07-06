import {StyleSheet} from 'react-native';
import React from 'react';
import {StackHeaderProps} from '@react-navigation/stack';
import {Center, ArrowBackIcon, IconButton} from 'native-base';
import Text from '../components/text/Text';
import Colors from '../constants/Colors';

const StackHeaderBar = (props: StackHeaderProps) => {
  return (
    <Center bg="white" py="3" {...props} position="relative">
      <Center position="absolute" left="0" p="1">
        <IconButton
          rounded="full"
          colorScheme={Colors.primary}
          onPress={() => props.navigation.goBack()}>
          <ArrowBackIcon color={Colors.primary} size="22" />
        </IconButton>
      </Center>
      <Text h3>{props.options.title || ''}</Text>
    </Center>
  );
};

export default StackHeaderBar;

const styles = StyleSheet.create({});
