import {StackScreenProps} from '@react-navigation/stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {
  // CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';

export type HomeStackParamList = {
  Home: undefined;
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
