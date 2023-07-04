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

import {useQuery} from '@apollo/client';
import {GET_SPECIALITIES} from '../../graphql/query/speciality';
import {GET_HOSPITALS} from '../../graphql/query/hospitals';

import ErrorComponent from '../../components/ErrorComponent';
import {
  SpecialtyLoading,
  HospitalLoading,
} from '../../components/skeletons/Loading';

const HomeScreen = ({navigation}: HomeStackScreenProps<'Home'>) => {
  const {loading, data, error} = useQuery(GET_SPECIALITIES);
  const {
    loading: hosLoading,
    data: hosData,
    error: hosError,
  } = useQuery(GET_HOSPITALS);

  // render specialities
  const renderSpecialities = () => {
    if (loading) {
      return <SpecialtyLoading />;
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
        horizontal
        showsHorizontalScrollIndicator={false}
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
            <SpecialityCard
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

  // render Hospitals
  const renderHospitals = () => {
    if (hosLoading) {
      return <HospitalLoading />;
    }
    if (hosError) {
      return <ErrorComponent error={hosError} />;
    }
    if (!hosLoading && (!hosData || !hosData.getHospitals)) {
      return (
        <ErrorComponent error="an unknown error occurred. checkout later" />
      );
    }

    const hospitals = hosData?.getHospitals;

    return (
      <FlatList
        initialNumToRender={10}
        data={hospitals}
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
            <HospitalCard
              name={item.name}
              address={item.address}
              image={item.image}
              onPress={() =>
                navigation.navigate('Hospital', {hospitalId: item.id})
              }
            />
          );
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <ChooseCity />
      <View style={styles.specialityBox}>
        <SectionTitle>Find doctor by speciality</SectionTitle>
        {renderSpecialities()}
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
        {renderHospitals()}
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
