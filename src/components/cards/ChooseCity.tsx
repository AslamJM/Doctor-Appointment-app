import {StyleSheet} from 'react-native';
import React from 'react';
import {Flex} from 'native-base';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Text from '../text/Text';
import Colors from '../../constants/Colors';

const ChooseCity = () => {
  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      style={styles.container}>
      <Flex direction="row" alignItems="center">
        <IonIcon name="location-sharp" size={25} />
        <Text h3>Choose City</Text>
      </Flex>
      <IonIcon name="notifications" size={25} />
    </Flex>
  );
};

export default ChooseCity;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: Colors.white,
    borderRadius: 8,
  },
});
