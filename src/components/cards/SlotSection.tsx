import {StyleSheet, Text, FlatList} from 'react-native';
import {Button, Center} from 'native-base';
import React from 'react';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import {useAppContext} from '../../context/GlobalContext';
import {generateTimeSlots, checkPassedTime} from '../../utils/date';
import MText from '../text/Text';
import dayjs from 'dayjs';

interface SlotSectionProps {
  startTime: string;
  endTime: string;
}

const SlotSection = ({startTime, endTime}: SlotSectionProps) => {
  const {selectedSlot, setSelectedSlot, selectedDate} = useAppContext();

  if (!startTime || startTime === 'no' || !endTime || endTime === 'no') {
    return (
      <Center py={2}>
        <MText h3>Doctor is not available</MText>
      </Center>
    );
  }

  const timeSlots = generateTimeSlots(startTime, endTime);

  if (timeSlots.length === 0) {
    return (
      <Center py={2}>
        <MText h4 style={{color: Colors.red}}>
          Doctor is not available
        </MText>
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
        isDisabled={
          dayjs().format('DD/MM/YYYY') === selectedDate && checkPassedTime(item)
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
