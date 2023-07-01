import {StyleSheet} from 'react-native';
import {Button, Flex, Pressable} from 'native-base';
import Text from '../text/Text';

import React from 'react';
import Colors from '../../constants/Colors';
import Entypo from 'react-native-vector-icons/Entypo';

interface Props {
  title: string;
  ListIcon: any;
  onPress: () => void;
}

const ProfileScreenList = ({title, ListIcon, onPress}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        px={2}
        py={1}>
        <Flex direction="row" alignItems="center">
          {ListIcon()}
          <Text h3 style={styles.editbtnText}>
            {title}
          </Text>
        </Flex>
        <Button variant="ghost">
          <Entypo name="chevron-right" size={30} color={Colors.primary} />
        </Button>
      </Flex>
    </Pressable>
  );
};

export default ProfileScreenList;

const styles = StyleSheet.create({
  editbtnText: {
    marginLeft: 10,
  },
});
