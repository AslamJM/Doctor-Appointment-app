import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import DoctorCard from '../../components/cards/DoctorCard';
import SearchBar from '../../components/SearchBar';
import {HomeStackScreenProps} from '../../navigation/types';

const dataArray = [
  {
    id: 1,
    name: 'Cardiology',
    image: 'https://via.placeholder.com/300',
    nameD: 'aslamjm',
    exp: 10,
  },
  {
    id: 2,
    name: 'Dentistry',
    image: 'https://via.placeholder.com/300',
    nameD: 'aslamjm',
    exp: 10,
  },
  {
    id: 3,
    name: 'Orthopedics',
    image: 'https://via.placeholder.com/300',
    nameD: 'aslamjm',
    exp: 10,
  },
  {
    id: 4,
    name: 'Neurology',
    image: 'https://via.placeholder.com/300',
    nameD: 'aslamjm',
    exp: 10,
  },
  {
    id: 5,
    name: 'Pediatrics',
    image: 'https://via.placeholder.com/300',
    nameD: 'aslamjm',
    exp: 10,
  },
  {
    id: 6,
    name: 'Ophthalmology',
    image: 'https://via.placeholder.com/300',
    nameD: 'aslamjm',
    exp: 10,
  },
  {
    id: 7,
    name: 'Gastroenterology',
    image: 'https://via.placeholder.com/300',
    nameD: 'aslamjm',
    exp: 10,
  },
  {
    id: 8,
    name: 'Dermatology',
    image: 'https://via.placeholder.com/300',
    nameD: 'aslamjm',
    exp: 10,
  },
  {
    id: 9,
    name: 'Endocrinology',
    image: 'https://via.placeholder.com/300',
    nameD: 'aslamjm',
    exp: 10,
  },
  {
    id: 10,
    name: 'Oncology',
    image: 'https://via.placeholder.com/300',
    nameD: 'aslamjm',
    exp: 10,
  },
];

const SpecialistScreen = ({
  navigation,
}: HomeStackScreenProps<'Specialists'>) => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <FlatList
        data={dataArray}
        keyExtractor={item => `${item.name}`}
        // renderItem={loading ? skelitonItem : renderItem}
        renderItem={({item}) => (
          <DoctorCard
            name={item.nameD}
            image={item.image}
            speciality={item.name}
            experience={item.exp}
            id={item.id.toString()}
            onPress={() =>
              navigation.navigate('TimeSlot', {doctorId: item.id.toString()})
            }
          />
        )}
      />
    </View>
  );
};

export default SpecialistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
