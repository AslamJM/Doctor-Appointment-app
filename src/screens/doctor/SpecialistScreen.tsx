import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import DoctorCard from '../../components/cards/DoctorCard';
import SearchBar from '../../components/SearchBar';
import {HomeStackScreenProps} from '../../navigation/types';

import {useQuery} from '@apollo/client';
import {GET_SPECIALISTS} from '../../graphql/query/doctor';
import ErrorComponent from '../../components/ErrorComponent';
import {DoctorsLoading} from '../../components/skeletons/Loading';
import {renderToStringWithData} from '@apollo/client/react/ssr';

const SpecialistScreen = ({
  navigation,
  route,
}: HomeStackScreenProps<'Specialists'>) => {
  const {specialityId} = route.params;
  const {loading, error, data} = useQuery(GET_SPECIALISTS, {
    variables: {
      specialityId,
    },
  });

  const renderSpecialists = () => {
    if (loading) {
      return <DoctorsLoading />;
    }
    if (error) {
      return <ErrorComponent error={error} />;
    }
    if (!loading && (!data || !data.getSpecialists)) {
      return (
        <ErrorComponent error="an unknown error occurred. checkout later" />
      );
    }
    const renderData = data?.getSpecialists;

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
            <DoctorCard
              name={item.name}
              image={item.image!}
              id={item.id}
              experience={item.experience}
              speciality={item.speciality.name}
              onPress={() =>
                navigation.navigate('TimeSlot', {doctorId: item.id})
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
      {renderSpecialists()}
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
