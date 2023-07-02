import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Fonts, {sizes} from '../../constants/Fonts';
import {Flex} from 'native-base';
import Colors from '../../constants/Colors';

interface SlotSectionProps {
  type: 'Morning' | 'Evening' | 'Night';
}

const SlotSectionHeader = ({type}: SlotSectionProps) => {
  const iconGenerate = () => {
    switch (type) {
      case 'Morning':
        return <FeatherIcon name="sunrise" color={Colors.primary} size={30} />;
      case 'Evening':
        return <FeatherIcon name="sun" color={Colors.primary} size={30} />;
      case 'Night':
        return <FeatherIcon name="sunset" color={Colors.primary} size={30} />;
    }
  };
  return (
    <View style={styles.container}>
      <Flex direction="row" alignItems="center">
        {iconGenerate()}
        <Text style={styles.title}>{type} Slots</Text>
      </Flex>
    </View>
  );
};

export default SlotSectionHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  icon: {
    width: 50,
    height: 50,
  },
  title: {
    ...Fonts.bold,
    fontSize: sizes.h3,
    marginLeft: 8,
  },
});
