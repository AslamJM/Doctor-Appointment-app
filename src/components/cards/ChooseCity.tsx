import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  Flex,
  useDisclose,
  Actionsheet,
  Box,
  HStack,
  Divider,
} from 'native-base';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Text from '../text/Text';
import Colors from '../../constants/Colors';
import {useAppContext} from '../../context/GlobalContext';

const ChooseCity = () => {
  const {isOpen, onOpen, onClose} = useDisclose();
  const {setCity, city} = useAppContext();
  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      style={styles.container}>
      <Flex direction="row" alignItems="center">
        <TouchableOpacity onPress={onOpen}>
          <HStack>
            <IonIcon name="location-sharp" size={25} />
            <Text h3>{city.length === 0 ? 'Choose City' : city}</Text>
          </HStack>
        </TouchableOpacity>
      </Flex>
      <IonIcon name="notifications" size={25} />
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text h3>Choose City</Text>
            <Divider />
          </Box>
          {['Batticaloa', 'Eravur', 'Kallady', 'Kattankudy'].map(city => (
            <Actionsheet.Item
              py="2"
              key={city}
              onPress={() => {
                setCity(city);
                onClose();
              }}>
              <Text h4>{city}</Text>
            </Actionsheet.Item>
          ))}
        </Actionsheet.Content>
      </Actionsheet>
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
