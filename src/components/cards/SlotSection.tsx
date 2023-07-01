import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {Button, Flex} from 'native-base';
import React, {useState} from 'react';
import Icons from '../../constants/Icons';
import Fonts, {sizes} from '../../constants/Fonts';
import Colors from '../../constants/Colors';

const morningSlots = [
  '8:00',
  '8:30',
  '9:00',
  '9:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
];

interface SlotSectionProps {
  type: 'Morning' | 'Evening' | 'Night';
}

const SlotSection = ({type}: SlotSectionProps) => {
  const [selectedSlot, setSelectedSlot] = useState('');

  const header = () => {
    return (
      <View style={styles.container}>
        <Flex direction="row" alignItems="center">
          <Image source={Icons.WelcomeIcon} style={styles.icon} />
          <Text style={styles.title}>{type} Slots</Text>
        </Flex>
      </View>
    );
  };

  const renderSlot = (item: string) => {
    return (
      <Button
        variant={selectedSlot === item ? 'solid' : 'outline'}
        backgroundColor={
          selectedSlot === item ? Colors.primary : Colors.transparent
        }
        width={100}
        mx={3}
        my={2}
        onPress={() => setSelectedSlot(item)}>
        <Text
          style={[
            {
              ...styles.slotText,
              color: selectedSlot === item ? Colors.white : Colors.black,
            },
          ]}>
          {item}
        </Text>
      </Button>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={<>{header()}</>}
      data={morningSlots}
      keyExtractor={index => `${type}-slot-${index}`}
      renderItem={({item}) => renderSlot(item)}
      scrollEnabled={false}
      numColumns={3}
      contentContainerStyle={styles.content}
    />
  );
};

export default SlotSection;

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
  content: {
    paddingHorizontal: 10,
  },
  slotText: {
    ...Fonts.regular,
  },
});
