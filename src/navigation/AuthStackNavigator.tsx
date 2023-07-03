import React from 'react';

import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {AuthStackParams} from './types';
import SignUpScreen from '../screens/auth/SignUpScreen';
import SignInScreen from '../screens/auth/SignInScreen';
import VerifyCodeScreen from '../screens/auth/VerifyCodeScreen';

const AuthStack = createStackNavigator<AuthStackParams>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="VerifyEmail" component={VerifyCodeScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
