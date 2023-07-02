import {StyleSheet, View} from 'react-native';
import React from 'react';
import Text from '../../components/text/Text';

const Chats = () => {
  return (
    <View style={styles.container}>
      <Text h3>Feature is coming soon...</Text>
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
