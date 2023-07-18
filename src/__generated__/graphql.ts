/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  patient: Patient;
  status: AppointmentStatus;
  time: Scalars['String']['output'];
  user: User;
};

export type AppointmentInfo = {
  __typename?: 'AppointmentInfo';
  count: Scalars['Int']['output'];
};

export type AppointmentInput = {
  doctorId: Scalars['ID']['input'];
  patientId: Scalars['ID']['input'];
  status?: InputMaybe<AppointmentStatus>;
  time: Scalars['String']['input'];
};

export type AppointmentMutationResponse = {
  __typename?: 'AppointmentMutationResponse';
  appointment?: Maybe<Appointment>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export enum AppointmentStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Pending = 'PENDING'
}

export type CreateDoctorAvailabilityInput = {
  date: Scalars['String']['input'];
  doctor: Scalars['String']['input'];
  evening?: InputMaybe<TimeRangeInput>;
  morning?: InputMaybe<TimeRangeInput>;
  night?: InputMaybe<TimeRangeInput>;
};

export type CreatePatientInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type Doctor = {
  __typename?: 'Doctor';
  address: Scalars['String']['output'];
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
  date: Scalars['String']['output'];
  doctor: Doctor;
  evening?: Maybe<TimeRange>;
  id: Scalars['ID']['output'];
  morning?: Maybe<TimeRange>;
  night?: Maybe<TimeRange>;
};

export type DoctorInfo = {
  __typename?: 'DoctorInfo';
  count: Scalars['Int']['output'];
};

export type DoctorInput = {
  address: Scalars['String']['input'];
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

export type HospitalInfo = {
  __typename?: 'HospitalInfo';
  count: Scalars['Int']['output'];
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
  createDoctorAvailability: DoctorAvailability;
  createHospital?: Maybe<HospitalMutationResponse>;
  createPatient: PatientMutationResponse;
  createSpeciality?: Maybe<SpecialityMutationResponse>;
  createUser: UserMutationResponse;
  deleteAppointment: AppointmentMutationResponse;
  deleteDoctor?: Maybe<DoctorMutationResponse>;
  deleteHospital?: Maybe<HospitalMutationResponse>;
  deletePatient: PatientMutationResponse;
  deleteSpeciality?: Maybe<SpecialityMutationResponse>;
  deleteUser: UserMutationResponse;
  updateAppointment: AppointmentMutationResponse;
  updateDoctor?: Maybe<DoctorMutationResponse>;
  updateDoctorAvailability: DoctorAvailability;
  updateHospital?: Maybe<HospitalMutationResponse>;
  updatePatient: PatientMutationResponse;
  updateSpeciality?: Maybe<SpecialityMutationResponse>;
  updateUser: UserMutationResponse;
};


export type MutationCreateAppointmentArgs = {
  appointmentInput: AppointmentInput;
};


export type MutationCreateDoctorArgs = {
  input: DoctorInput;
};


export type MutationCreateDoctorAvailabilityArgs = {
  input: CreateDoctorAvailabilityInput;
};


export type MutationCreateHospitalArgs = {
  input: HospitalInput;
};


export type MutationCreatePatientArgs = {
  input: CreatePatientInput;
};


export type MutationCreateSpecialityArgs = {
  input: SpecialityInput;
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


export type MutationDeletePatientArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSpecialityArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  authId: Scalars['String']['input'];
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
  id: Scalars['ID']['input'];
  input?: InputMaybe<UpdateDoctorAvailabilityInput>;
};


export type MutationUpdateHospitalArgs = {
  id: Scalars['ID']['input'];
  input: HospitalInput;
};


export type MutationUpdatePatientArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePatientInput;
};


export type MutationUpdateSpecialityArgs = {
  id: Scalars['ID']['input'];
  input: SpecialityInput;
};


export type MutationUpdateUserArgs = {
  authId: Scalars['String']['input'];
};

export type Patient = {
  __typename?: 'Patient';
  age?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  user: User;
};

export type PatientInfo = {
  __typename?: 'PatientInfo';
  count: Scalars['Int']['output'];
};

export type PatientMutationResponse = {
  __typename?: 'PatientMutationResponse';
  message?: Maybe<Scalars['String']['output']>;
  patient?: Maybe<Patient>;
  success: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAppointment: Appointment;
  getAppointments: Array<Appointment>;
  getAppointmentsInfo: AppointmentInfo;
  getDoctor: Doctor;
  getDoctorAvailability?: Maybe<DoctorAvailability>;
  getDoctors: Array<Doctor>;
  getDoctorsInfo: DoctorInfo;
  getHospital: Hospital;
  getHospitals: Array<Hospital>;
  getHospitalsInfo: HospitalInfo;
  getPatients: Array<Patient>;
  getPatientsOfUser: Array<Patient>;
  getPatientssInfo: PatientInfo;
  getSinglePatient: Patient;
  getSpecialists: Array<Doctor>;
  getSpecialities: Array<Speciality>;
  getSpeciality: Speciality;
  getUser: User;
  getUserAppointments: Array<Appointment>;
  getUsers: Array<User>;
};


export type QueryGetAppointmentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetAppointmentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetDoctorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetDoctorAvailabilityArgs = {
  date: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type QueryGetDoctorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetHospitalArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetHospitalsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPatientsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetSinglePatientArgs = {
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


export type QueryGetUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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

export type TimeRange = {
  __typename?: 'TimeRange';
  endTime?: Maybe<Scalars['String']['output']>;
  startTime?: Maybe<Scalars['String']['output']>;
};

export type TimeRangeInput = {
  endTime?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAppointmentInput = {
  status?: InputMaybe<AppointmentStatus>;
  time?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDoctorAvailabilityInput = {
  evening?: InputMaybe<TimeRangeInput>;
  morning?: InputMaybe<TimeRangeInput>;
  night?: InputMaybe<TimeRangeInput>;
};

export type UpdatePatientInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  token: Scalars['String']['output'];
};

export type UserMutationResponse = {
  __typename?: 'UserMutationResponse';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type CreateAppointmentMutationVariables = Exact<{
  appointmentInput: AppointmentInput;
}>;


export type CreateAppointmentMutation = { __typename?: 'Mutation', createAppointment: { __typename?: 'AppointmentMutationResponse', message: string, success: boolean } };

export type UpdateAppointmentMutationVariables = Exact<{
  updateAppointmentId: Scalars['ID']['input'];
  updateAppointmentInput: UpdateAppointmentInput;
}>;


export type UpdateAppointmentMutation = { __typename?: 'Mutation', updateAppointment: { __typename?: 'AppointmentMutationResponse', message: string, success: boolean } };

export type CreateUserMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserMutationResponse', message: string, success: boolean } };

export type CreatePatientMutationVariables = Exact<{
  input: CreatePatientInput;
}>;


export type CreatePatientMutation = { __typename?: 'Mutation', createPatient: { __typename?: 'PatientMutationResponse', message?: string | null, success: boolean } };

export type AppointmentInfoFragment = { __typename?: 'Appointment', time: string, status: AppointmentStatus, patient: { __typename?: 'Patient', name: string, age?: number | null }, doctor: { __typename?: 'Doctor', name: string, phone: string, image?: string | null, address: string, speciality: { __typename?: 'Speciality', name: string } } } & { ' $fragmentName'?: 'AppointmentInfoFragment' };

export type GetUserAppointmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserAppointmentsQuery = { __typename?: 'Query', getUserAppointments: Array<{ __typename?: 'Appointment', id: string, time: string, status: AppointmentStatus, patient: { __typename?: 'Patient', name: string, age?: number | null }, doctor: { __typename?: 'Doctor', name: string, phone: string, image?: string | null, address: string, speciality: { __typename?: 'Speciality', name: string } } }> };

export type GetDoctorAvailabilityQueryVariables = Exact<{
  getDoctorAvailabilityId: Scalars['ID']['input'];
  date: Scalars['String']['input'];
}>;


export type GetDoctorAvailabilityQuery = { __typename?: 'Query', getDoctorAvailability?: { __typename?: 'DoctorAvailability', date: string, morning?: { __typename?: 'TimeRange', endTime?: string | null, startTime?: string | null } | null, evening?: { __typename?: 'TimeRange', endTime?: string | null, startTime?: string | null } | null, night?: { __typename?: 'TimeRange', endTime?: string | null, startTime?: string | null } | null } | null };

export type GetSpecialistsQueryVariables = Exact<{
  specialityId: Scalars['String']['input'];
}>;


export type GetSpecialistsQuery = { __typename?: 'Query', getSpecialists: Array<{ __typename?: 'Doctor', name: string, image?: string | null, rating?: number | null, experience: number, id: string, email: string, address: string, phone: string, speciality: { __typename?: 'Speciality', name: string } }> };

export type DoctorInfoFragment = { __typename?: 'Doctor', name: string, image?: string | null, rating?: number | null, experience: number, id: string, email: string, address: string, phone: string, speciality: { __typename?: 'Speciality', name: string } } & { ' $fragmentName'?: 'DoctorInfoFragment' };

export type GetDoctorQueryVariables = Exact<{
  getDoctorId: Scalars['ID']['input'];
}>;


export type GetDoctorQuery = { __typename?: 'Query', getDoctor: { __typename?: 'Doctor', address: string, description?: string | null, experience: number, id: string, image?: string | null, name: string, rating?: number | null, speciality: { __typename?: 'Speciality', name: string } } };

export type GetHospitalsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHospitalsQuery = { __typename?: 'Query', getHospitals: Array<{ __typename?: 'Hospital', id: string, name: string, address: string, image: string, openTime?: string | null }> };

export type GetHospitalQueryVariables = Exact<{
  getHospitalId: Scalars['ID']['input'];
}>;


export type GetHospitalQuery = { __typename?: 'Query', getHospital: { __typename?: 'Hospital', address: string, facilities: Array<string | null>, id: string, name: string, image: string, email: string, phone: string, city?: string | null, openTime?: string | null, geolocation: { __typename?: 'Geolocation', coordinates: Array<number | null>, type: string } } };

export type GetPatientsOfUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPatientsOfUserQuery = { __typename?: 'Query', getPatientsOfUser: Array<{ __typename?: 'Patient', age?: number | null, name: string, id: string }> };

export type GetSpecialitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSpecialitiesQuery = { __typename?: 'Query', getSpecialities: Array<{ __typename?: 'Speciality', id: string, name: string, image: string }> };

export const AppointmentInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AppointmentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Appointment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"patient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"age"}}]}},{"kind":"Field","name":{"kind":"Name","value":"doctor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"speciality"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<AppointmentInfoFragment, unknown>;
export const DoctorInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DoctorInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Doctor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"experience"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"speciality"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}}]} as unknown as DocumentNode<DoctorInfoFragment, unknown>;
export const CreateAppointmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAppointment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"appointmentInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AppointmentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAppointment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"appointmentInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"appointmentInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<CreateAppointmentMutation, CreateAppointmentMutationVariables>;
export const UpdateAppointmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAppointment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateAppointmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateAppointmentInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAppointmentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAppointment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateAppointmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"updateAppointmentInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateAppointmentInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<UpdateAppointmentMutation, UpdateAppointmentMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const CreatePatientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePatient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePatientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPatient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<CreatePatientMutation, CreatePatientMutationVariables>;
export const GetUserAppointmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserAppointments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserAppointments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"patient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"age"}}]}},{"kind":"Field","name":{"kind":"Name","value":"doctor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"speciality"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUserAppointmentsQuery, GetUserAppointmentsQueryVariables>;
export const GetDoctorAvailabilityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDoctorAvailability"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getDoctorAvailabilityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDoctorAvailability"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getDoctorAvailabilityId"}}},{"kind":"Argument","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"morning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"evening"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"night"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}}]}}]}}]}}]} as unknown as DocumentNode<GetDoctorAvailabilityQuery, GetDoctorAvailabilityQueryVariables>;
export const GetSpecialistsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSpecialists"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"specialityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSpecialists"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"specialityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"specialityId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"experience"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"speciality"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}}]}}]} as unknown as DocumentNode<GetSpecialistsQuery, GetSpecialistsQueryVariables>;
export const GetDoctorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDoctor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getDoctorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDoctor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getDoctorId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"experience"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"speciality"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetDoctorQuery, GetDoctorQueryVariables>;
export const GetHospitalsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHospitals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHospitals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"openTime"}}]}}]}}]} as unknown as DocumentNode<GetHospitalsQuery, GetHospitalsQueryVariables>;
export const GetHospitalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHospital"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getHospitalId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHospital"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getHospitalId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"facilities"}},{"kind":"Field","name":{"kind":"Name","value":"geolocation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinates"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"openTime"}}]}}]}}]} as unknown as DocumentNode<GetHospitalQuery, GetHospitalQueryVariables>;
export const GetPatientsOfUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPatientsOfUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPatientsOfUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetPatientsOfUserQuery, GetPatientsOfUserQueryVariables>;
export const GetSpecialitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSpecialities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSpecialities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<GetSpecialitiesQuery, GetSpecialitiesQueryVariables>;