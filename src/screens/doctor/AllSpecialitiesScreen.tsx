import {StyleSheet, FlatList, View} from 'react-native';
import React from 'react';
import SearchBar from '../../components/SearchBar';
import SpecialityCardHorizontal from '../../components/cards/SpecialityCardHorizontal';
import {HomeStackScreenProps} from '../../navigation/types';

import {useQuery} from '@apollo/client';
import {GET_SPECIALITIES} from '../../graphql/query/speciality';
import {SpecialityLoadingVertical} from '../../components/skeletons/Loading';
import ErrorComponent from '../../components/ErrorComponent';

const AllSpecialitiesScreen = ({
  navigation,
}: HomeStackScreenProps<'AllSpecialities'>) => {
  const {loading, data, error} = useQuery(GET_SPECIALITIES);
  const renderSpecialities = () => {
    if (loading) {
      return <SpecialityLoadingVertical />;
    }
    if (error) {
      return <ErrorComponent error={error} />;
    }
    if (!loading && (!data || !data.getSpecialities)) {
      return (
        <ErrorComponent error="an unknown error occurred. checkout later" />
      );
    }
    const renderData = data!.getSpecialities!;
    return (
      <FlatList
        data={renderData}
        keyExtractor={item => {
          if (!item) {
            return Math.random().toString();
          }
          return item.id;
        }}
        renderItem={({item}) => {
          if (!item) {
            return null;
          }
          return (
            <SpecialityCardHorizontal
              name={item.name}
              image={item.image}
              id={item.id}
              onPress={() =>
                navigation.navigate('Specialists', {specialityId: item.id})
              }
            />
          );
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <SearchBar />
      {renderSpecialities()}
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
