/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Appointment = {
  __typename?: 'Appointment';
  doctor: Doctor;
  id: Scalars['ID']['output'];
  status: AppointmentStatus;
  time: Scalars['String']['output'];
  user: User;
};

export type AppointmentInput = {
  doctorId: Scalars['ID']['input'];
  status?: InputMaybe<AppointmentStatus>;
  time: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type AppointmentMutationResponse = {
  __typename?: 'AppointmentMutationResponse';
  appointment?: Maybe<Appointment>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export enum AppointmentStatus {
  Accepted = 'ACCEPTED',
  Cancelled = 'CANCELLED',
  Pending = 'PENDING'
}

export type Doctor = {
  __typename?: 'Doctor';
  address: Scalars['String']['output'];
  availability?: Maybe<DoctorAvailability>;
  description?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  experience: Scalars['Int']['output'];
  geolocation?: Maybe<Geolocation>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  speciality: Speciality;
};

export type DoctorAvailability = {
  __typename?: 'DoctorAvailability';
  evening: Array<TimeSlot>;
  morning: Array<TimeSlot>;
  night: Array<TimeSlot>;
};

export type DoctorAvailabilityInput = {
  evening: Array<TimeSlotInput>;
  morning: Array<TimeSlotInput>;
  night: Array<TimeSlotInput>;
};

export type DoctorInput = {
  address: Scalars['String']['input'];
  availability?: InputMaybe<DoctorAvailabilityInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  experience: Scalars['Int']['input'];
  geolocation?: InputMaybe<GeolocationInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  specialityId: Scalars['ID']['input'];
};

export type DoctorMutationResponse = {
  __typename?: 'DoctorMutationResponse';
  doctor?: Maybe<Doctor>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type DoctorUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  availability?: InputMaybe<DoctorAvailabilityInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  experience?: InputMaybe<Scalars['Int']['input']>;
  geolocation?: InputMaybe<GeolocationInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  specialityId?: InputMaybe<Scalars['ID']['input']>;
};

export type Geolocation = {
  __typename?: 'Geolocation';
  coordinates: Array<Maybe<Scalars['Float']['output']>>;
  type: Scalars['String']['output'];
};

export type GeolocationInput = {
  coordinates: Array<InputMaybe<Scalars['Float']['input']>>;
  type: Scalars['String']['input'];
};

export type Hospital = {
  __typename?: 'Hospital';
  address: Scalars['String']['output'];
  city?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  facilities: Array<Maybe<Scalars['String']['output']>>;
  geolocation: Geolocation;
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  openTime?: Maybe<Scalars['String']['output']>;
  phone: Scalars['String']['output'];
};

export type HospitalInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  facilities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  geolocation?: InputMaybe<GeolocationInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  openTime?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type HospitalMutationResponse = {
  __typename?: 'HospitalMutationResponse';
  hospital?: Maybe<Hospital>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAppointment: AppointmentMutationResponse;
  createDoctor?: Maybe<DoctorMutationResponse>;
  createHospital?: Maybe<HospitalMutationResponse>;
  createSpeciality?: Maybe<SpecialityMutationResponse>;
  createUser: UserMutationResponse;
  deleteAppointment: AppointmentMutationResponse;
  deleteDoctor?: Maybe<DoctorMutationResponse>;
  deleteHospital?: Maybe<HospitalMutationResponse>;
  deleteSpeciality?: Maybe<SpecialityMutationResponse>;
  deleteUser: UserMutationResponse;
  updateAppointment: AppointmentMutationResponse;
  updateDoctor?: Maybe<DoctorMutationResponse>;
  updateDoctorAvailability?: Maybe<DoctorMutationResponse>;
  updateHospital?: Maybe<HospitalMutationResponse>;
  updateSpeciality?: Maybe<SpecialityMutationResponse>;
  updateUser: UserMutationResponse;
};


export type MutationCreateAppointmentArgs = {
  appointmentInput: AppointmentInput;
};


export type MutationCreateDoctorArgs = {
  input: DoctorInput;
};


export type MutationCreateHospitalArgs = {
  input: HospitalInput;
};


export type MutationCreateSpecialityArgs = {
  input: SpecialityInput;
};


export type MutationCreateUserArgs = {
  authId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationDeleteAppointmentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDoctorArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteHospitalArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSpecialityArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateAppointmentArgs = {
  id: Scalars['ID']['input'];
  updateAppointmentInput: UpdateAppointmentInput;
};


export type MutationUpdateDoctorArgs = {
  id: Scalars['ID']['input'];
  input: DoctorUpdateInput;
};


export type MutationUpdateDoctorAvailabilityArgs = {
  availabilityInput?: InputMaybe<DoctorAvailabilityInput>;
  id: Scalars['ID']['input'];
};


export type MutationUpdateHospitalArgs = {
  id: Scalars['ID']['input'];
  input: HospitalInput;
};


export type MutationUpdateSpecialityArgs = {
  id: Scalars['ID']['input'];
  input: SpecialityInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAppointment: Appointment;
  getAppointments: Array<Appointment>;
  getDoctor?: Maybe<Doctor>;
  getDoctors?: Maybe<Array<Maybe<Doctor>>>;
  getHospital?: Maybe<Hospital>;
  getHospitals?: Maybe<Array<Maybe<Hospital>>>;
  getSpecialists?: Maybe<Array<Maybe<Doctor>>>;
  getSpecialities?: Maybe<Array<Maybe<Speciality>>>;
  getSpeciality?: Maybe<Speciality>;
  getUser?: Maybe<User>;
  getUserAppointments: Array<Maybe<Appointment>>;
  getUsers?: Maybe<Array<Maybe<User>>>;
};


export type QueryGetAppointmentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetDoctorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetHospitalArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetSpecialistsArgs = {
  specialityId: Scalars['String']['input'];
};


export type QueryGetSpecialityArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserAppointmentsArgs = {
  userId: Scalars['String']['input'];
};

export type Speciality = {
  __typename?: 'Speciality';
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type SpecialityInput = {
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type SpecialityMutationResponse = {
  __typename?: 'SpecialityMutationResponse';
  message: Scalars['String']['output'];
  speciality?: Maybe<Speciality>;
  success: Scalars['Boolean']['output'];
};

export type TimeSlot = {
  __typename?: 'TimeSlot';
  endTime: Scalars['String']['output'];
  startTime: Scalars['String']['output'];
};

export type TimeSlotInput = {
  endTime: Scalars['String']['input'];
  startTime: Scalars['String']['input'];
};

export type UpdateAppointmentInput = {
  status?: InputMaybe<AppointmentStatus>;
  time?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  authId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type UserMutationResponse = {
  __typename?: 'UserMutationResponse';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};
