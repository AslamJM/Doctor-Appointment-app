import {StyleSheet, FlatList, View} from 'react-native';
import React from 'react';
import SearchBar from '../../components/SearchBar';
import SpecialityCardHorizontal from '../../components/cards/SpecialityCardHorizontal';
import {HomeStackScreenProps} from '../../navigation/types';

const dataArray = [
  {id: '1', name: 'Cardiology', image: 'https://via.placeholder.com/300'},
  {id: ' 2', name: 'Dentistry', image: 'https://via.placeholder.com/300'},
  {id: ' 3', name: 'Orthopedics', image: 'https://via.placeholder.com/300'},
  {id: ' 4', name: 'Neurology', image: 'https://via.placeholder.com/300'},
  {id: ' 5', name: 'Pediatrics', image: 'https://via.placeholder.com/300'},
  {id: ' 6', name: 'Ophthalmology', image: 'https://via.placeholder.com/300'},
  {
    id: ' 7',
    name: 'Gastroenterology',
    image: 'https://via.placeholder.com/300',
  },
  {id: ' 8', name: 'Dermatology', image: 'https://via.placeholder.com/300'},
  {id: ' 9', name: 'Endocrinology', image: 'https://via.placeholder.com/300'},
  {id: '10', name: 'Oncology', image: 'https://via.placeholder.com/300'},
];

const AllSpecialitiesScreen = ({
  navigation,
}: HomeStackScreenProps<'AllSpecialities'>) => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <FlatList
        // data={loading ? Array.from([1, 2, 3, 4], i => ({id: i})) : fields}
        data={dataArray}
        keyExtractor={item => `k-${item.id}`}
        // renderItem={loading ? skelitonItem : renderItem}
        renderItem={({item}) => (
          <SpecialityCardHorizontal
            name={item.name}
            image={item.image}
            id={item.id}
            onPress={() =>
              navigation.navigate('Specialists', {specialityId: item.id})
            }
          />
        )}
      />
    </View>
  );
};

export default AllSpecialitiesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
