import React from 'react';

import {FlatList, Flex} from 'native-base';
import {
  HospitalSkeleton,
  SpecialitySkeleton,
  SpecialitySkeletonVertical,
  DoctorSkeleton,
  SlotSkeleton,
} from './cards';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Colors from '../../constants/Colors';
import {View, StyleSheet, Text} from 'react-native';
import Fonts, {sizes} from '../../constants/Fonts';

interface SlotSectionProps {
  type: 'Morning' | 'Evening' | 'Night';
}

const SpecialtyLoading = () => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={Array.from([1, 2, 3, 4], i => ({id: i}))}
      keyExtractor={item => item.id.toString()}
      renderItem={() => <SpecialitySkeleton />}
    />
  );
};

const HospitalLoading = () => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={Array.from([1, 2, 3, 4, 5], i => ({id: i}))}
      keyExtractor={item => item.id.toString()}
      renderItem={() => <HospitalSkeleton />}
    />
  );
};

const SpecialityLoadingVertical = () => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={Array.from([1, 2, 3, 4, 6, 7, 8], i => ({id: i}))}
      keyExtractor={item => item.id.toString()}
      renderItem={() => <SpecialitySkeletonVertical />}
    />
  );
};

const DoctorsLoading = () => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={Array.from([1, 2, 3, 4, 6, 7, 8], i => ({id: i}))}
      keyExtractor={item => item.id.toString()}
      renderItem={() => <DoctorSkeleton />}
    />
  );
};

const SlotsLoading = ({type}: SlotSectionProps) => {
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

  const header = () => {
    return (
      <View style={styles.container}>
        <Flex direction="row" alignItems="center">
          {iconGenerate()}
          <Text style={styles.slotText}>{type} Slots</Text>
        </Flex>
      </View>
    );
  };
  return (
    <FlatList
      ListHeaderComponent={<>{header()}</>}
      data={Array.from([1, 2, 3, 4, 6, 7, 8], i => ({id: i}))}
      keyExtractor={item => item.id.toString()}
      renderItem={() => <SlotSkeleton />}
      scrollEnabled={false}
      numColumns={3}
      contentContainerStyle={styles.content}
    />
  );
};

export {
  SpecialtyLoading,
  SpecialityLoadingVertical,
  HospitalLoading,
  DoctorsLoading,
  SlotsLoading,
};

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
