import {StackScreenProps} from '@react-navigation/stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {
  // CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

export type HomeStackParamList = {
  Home: undefined;
  AllSpecialities: undefined;
  Specialists: {
    specialityId: string;
  };
  Hospital: {
    hospitalId: string;
  };
  TimeSlot: {
    doctorId: string;
  };
  DoctorProfile: {
    doctorId: string;
  };
  Appointment: {
    doctorId: string;
  };
};

export type HomeStackScreenProps<Screen extends keyof HomeStackParamList> =
  StackScreenProps<HomeStackParamList, Screen>;

// Bottom tabs

export type BottomTabParamList = {
  Main: NavigatorScreenParams<HomeStackParamList>;
  Appointments: undefined;
  Messages: undefined;
  Profile: undefined;
};

export type RootBottomTabScreenProps<Screen extends keyof BottomTabParamList> =
  BottomTabScreenProps<BottomTabParamList, Screen>;

// Appointment Tabs

export type AppointTabParams = {
  Pending: undefined;
  Cancelled: undefined;
  Completed: undefined;
};

export type AppointmentTabScreenProps<Screen extends keyof AppointTabParams> =
  MaterialTopTabScreenProps<AppointTabParams, Screen>;

// Auth navigation

export type AuthStackParams = {
  SignUp: undefined;
  SignIn: undefined;
  VerifyEmail: {
    type: 'SignIn' | 'SignUp';
  };
};

export type AuthStackScreenProps<Screen extends keyof AuthStackParams> =
  StackScreenProps<AuthStackParams, Screen>;
