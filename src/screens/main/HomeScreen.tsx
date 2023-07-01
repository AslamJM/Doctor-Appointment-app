import {StyleSheet, View, FlatList, Text} from 'react-native';
import React from 'react';
import SectionTitle from '../../components/text/SectionTitle';
import SpecialityCard from '../../components/cards/SpecialityCard';
import HospitalCard from '../../components/cards/HospitalCard';

import {HomeStackScreenProps} from '../../navigation/types';
import ChooseCity from '../../components/cards/ChooseCity';
import {Button} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../../constants/Colors';
import Fonts, {sizes} from '../../constants/Fonts';

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

const hospitalArray = [
  {name: 'Hospital A', address: '123 Main Street, City A'},
  {name: 'Hospital B', address: '456 Elm Street, City B'},
  {name: 'Hospital C', address: '789 Oak Street, City C'},
  {name: 'Hospital D', address: '321 Pine Street, City D'},
  {name: 'Hospital E', address: '654 Maple Street, City E'},
  {name: 'Hospital F', address: '987 Cedar Street, City F'},
  {name: 'Hospital G', address: '135 Walnut Street, City G'},
  {name: 'Hospital H', address: '864 Birch Street, City H'},
  {name: 'Hospital I', address: '279 Spruce Street, City I'},
  {name: 'Hospital J', address: '582 Cherry Street, City J'},
];

const HomeScreen = ({navigation}: HomeStackScreenProps<'Home'>) => {
  return (
    <View style={styles.container}>
      <ChooseCity />
      <View style={styles.specialityBox}>
        <SectionTitle>Find doctor by speciality</SectionTitle>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          // data={loading ? Array.from([1, 2, 3, 4], i => ({id: i})) : fields}
          data={dataArray}
          keyExtractor={item => `${item.id}`}
          // renderItem={loading ? skelitonItem : renderItem}
          renderItem={({item}) => (
            <SpecialityCard
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
      <Button
        variant="ghost"
        width={150}
        onPress={() => navigation.navigate('AllSpecialities')}>
        <Text style={styles.viewall}>
          View All{' '}
          <Entypo name="chevron-right" color={Colors.primary} size={16} />
        </Text>
      </Button>
      <View style={styles.scroll}>
        <SectionTitle>Hospitals near you</SectionTitle>
        <FlatList
          data={hospitalArray}
          keyExtractor={item => `${item.name}`}
          // renderItem={loading ? skelitonItem : renderItem}
          renderItem={({item}) => (
            <HospitalCard
              name={item.name}
              address={item.address}
              onPress={() =>
                navigation.navigate('Hospital', {hospitalId: item.name})
              }
            />
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  specialityBox: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  scroll: {
    paddingHorizontal: 10,
  },
  viewall: {
    ...Fonts.bold,
    color: Colors.primary,
    fontSize: sizes.body3,
  },
});
