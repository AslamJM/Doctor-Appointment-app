import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Avatar, Button, Flex, Box} from 'native-base';
import Icons from '../../constants/Icons';
import Text from '../../components/text/Text';
import Colors from '../../constants/Colors';
import SectionTitle from '../../components/text/SectionTitle';
import ProfileScreenList from '../../components/cards/ProfileScreenList';

// Icons
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const accountData = [
  {
    title: 'Patient Directory',
    icon: () => <Octicons name="file-directory" size={30} />,
    onPress: () => {},
  },
  {
    title: 'My History',
    icon: () => <Octicons name="history" size={30} />,
    onPress: () => {},
  },
];

const appData = [
  {
    title: 'Coupon Codes',
    icon: () => <AntDesign name="qrcode" size={30} />,
    onPress: () => {},
  },
  {
    title: 'About Us',
    icon: () => <Entypo name="users" size={30} />,
    onPress: () => {},
  },
  {
    title: 'Rate Us',
    icon: () => <AntDesign name="star" size={30} />,
    onPress: () => {},
  },
  {
    title: 'Help',
    icon: () => <Entypo name="help-with-circle" size={30} />,
    onPress: () => {},
  },
];

const ProfileScreen = () => {
  const logout = () => {
    //
  };

  return (
    <View style={styles.container}>
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        px={5}
        py={4}
        bg={Colors.white}>
        <Flex direction="row" alignItems="center">
          <Avatar source={Icons.DoctorImage} style={styles.avatarImage} />
          <Text h3>Patioent zeo</Text>
        </Flex>
        <Button variant="ghost">
          <Text h3 style={styles.editbtnText}>
            Edit Profile
          </Text>
        </Button>
      </Flex>
      <Box px={5}>
        <SectionTitle>Account Info</SectionTitle>
        {accountData.map(dat => (
          <ProfileScreenList
            key={dat.title}
            title={dat.title}
            ListIcon={dat.icon}
            onPress={dat.onPress}
          />
        ))}
      </Box>
      <Box px={5} py={5}>
        <SectionTitle>About App</SectionTitle>
        {appData.map(dat => (
          <ProfileScreenList
            key={dat.title}
            title={dat.title}
            ListIcon={dat.icon}
            onPress={dat.onPress}
          />
        ))}
      </Box>
      <Box px={5} mt={3}>
        <ProfileScreenList
          // eslint-disable-next-line react/no-unstable-nested-components
          ListIcon={() => <Entypo name="log-out" size={30} />}
          title="Log Out"
          onPress={logout}
        />
      </Box>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  editbtnText: {
    color: Colors.primary,
  },
});
