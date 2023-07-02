import {StyleSheet, Text, FlatList} from 'react-native';
import {Button, Center} from 'native-base';
import React from 'react';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import {useAppContext} from '../../context/GlobalContext';
import {getTimeSlots} from '../../utils/date';
import MText from '../text/Text';

interface SlotSectionProps {
  startTime: string;
  endTime: string;
}

const SlotSection = ({startTime, endTime}: SlotSectionProps) => {
  const {selectedSlot, setSelectedSlot} = useAppContext();

  if (startTime === 'no' || endTime === 'no') {
    return (
      <Center py={2}>
        <MText h3>Doctor is not available</MText>
      </Center>
    );
  }

  const timeSlots = getTimeSlots(startTime, endTime);

  if (timeSlots.length === 0) {
    return (
      <Center py={2}>
        <MText h3>Doctor is not available</MText>
      </Center>
    );
  }

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
      data={timeSlots}
      keyExtractor={index => `$slot-${index}`}
      renderItem={({item}) => renderSlot(item)}
      scrollEnabled={false}
      numColumns={3}
      contentContainerStyle={styles.content}
    />
  );
};

export default SlotSection;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
  },
  slotText: {
    ...Fonts.regular,
  },
});
