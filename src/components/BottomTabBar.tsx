import React from 'react';
import {
  View,
  StyleSheet,
  ColorValue,
  StyleProp,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import {BottomTabParamList} from '../navigation/types';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../constants/Colors';

type Routes = keyof BottomTabParamList;

const BottomTabBar = ({state, navigation}: BottomTabBarProps) => {
  const iconGenerator = (
    routeName: Routes,
    color?: ColorValue,
    style?: StyleProp<TextStyle>,
  ) => {
    switch (routeName) {
      case 'Main':
        return <AntDesign name="home" size={26} color={color} style={style} />;
      case 'Appointments':
        return (
          <AntDesign name="calendar" size={26} color={color} style={style} />
        );
      case 'Messages':
        return <AntDesign name="mail" size={26} color={color} style={style} />;
      case 'Profile':
        return <AntDesign name="user" size={26} color={color} style={style} />;
    }
  };
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        //const {options} = descriptors[route.key];

        // const label =
        //   options.tabBarLabel !== undefined
        //     ? options.tabBarLabel
        //     : options.title !== undefined
        //     ? options.title
        //     : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <View key={index} style={styles.mainItemContainer}>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.iconContainer}>
                {iconGenerator(
                  route.name as Routes,
                  isFocused ? Colors.primary : Colors.gray,
                )}
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    height: 55,
    flexDirection: 'row',
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1,
    borderColor: '#333B42',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  shippingBox: {
    width: 24,
    height: 24,
  },
});

export default BottomTabBar;
