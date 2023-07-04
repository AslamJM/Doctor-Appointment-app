/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateAppointment($appointmentInput: AppointmentInput!) {\n    createAppointment(appointmentInput: $appointmentInput) {\n      appointment {\n        id\n      status\n      doctor {\n        name\n        speciality {\n          name\n        }\n      }\n      time\n      }\n      message\n      success\n    }\n  }\n": types.CreateAppointmentDocument,
    "\n  mutation UpdateAppointment(\n    $updateAppointmentId: ID!\n    $updateAppointmentInput: UpdateAppointmentInput!\n  ) {\n    updateAppointment(\n      id: $updateAppointmentId\n      updateAppointmentInput: $updateAppointmentInput\n    ) {\n      message\n      success\n    }\n  }\n": types.UpdateAppointmentDocument,
    "\n  mutation CreateUser($authId: String!) {\n    createUser(authId: $authId) {\n      success\n      message\n    }\n  }\n": types.CreateUserDocument,
    "\n  query GetAppointments {\n    getAppointments {\n      id\n      status\n      doctor {\n        name\n        speciality {\n          name\n        }\n      }\n      time\n    }\n  }\n": types.GetAppointmentsDocument,
    "\n  query GetSpecialists($specialityId: String!) {\n    getSpecialists(specialityId: $specialityId) {\n    name\n    image\n    rating\n    experience\n    id\n    speciality {\n      name\n    }\n    email\n    address\n    phone\n  }\n  }\n": types.GetSpecialistsDocument,
    "\n  fragment DoctorInfo on Doctor{\n    name\n    image\n    rating\n    experience\n    id\n    speciality {\n      name\n    }\n    email\n    address\n    phone\n  }\n": types.DoctorInfoFragmentDoc,
    "\n  query GetDoctor($getDoctorId: ID!) {\n    getDoctor(id: $getDoctorId) {\n      address\n      availability {\n        evening {\n          endTime\n          startTime\n        }\n        morning {\n          endTime\n          startTime\n        }\n        night {\n          endTime\n          startTime\n        }\n      }\n      description\n      experience\n      id\n      image\n      name\n      rating\n      speciality {\n        name\n      }\n    }\n  }\n": types.GetDoctorDocument,
    "\n  query GetDoctorAvailablity($getDoctorId: ID!) {\n    getDoctor(id: $getDoctorId) {\n      availability {\n        evening {\n          endTime\n          startTime\n        }\n        morning {\n          endTime\n          startTime\n        }\n        night {\n          endTime\n          startTime\n        }\n      }\n    }\n  }\n": types.GetDoctorAvailablityDocument,
    "\n  query GetHospitals {\n    getHospitals {\n      id\n      name\n      address\n      image\n      openTime\n    }\n  }\n": types.GetHospitalsDocument,
    "\n  query GetHospital($getHospitalId: ID!) {\n    getHospital(id: $getHospitalId) {\n      address\n      facilities\n      geolocation {\n        coordinates\n        type\n      }\n      id\n      name\n      image\n      email\n      phone\n      city\n      openTime\n    }\n  }\n": types.GetHospitalDocument,
    "\n  query GetSpecialities {\n    getSpecialities {\n      id\n      name\n      image\n    }\n  }\n": types.GetSpecialitiesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateAppointment($appointmentInput: AppointmentInput!) {\n    createAppointment(appointmentInput: $appointmentInput) {\n      appointment {\n        id\n      status\n      doctor {\n        name\n        speciality {\n          name\n        }\n      }\n      time\n      }\n      message\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation CreateAppointment($appointmentInput: AppointmentInput!) {\n    createAppointment(appointmentInput: $appointmentInput) {\n      appointment {\n        id\n      status\n      doctor {\n        name\n        speciality {\n          name\n        }\n      }\n      time\n      }\n      message\n      success\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateAppointment(\n    $updateAppointmentId: ID!\n    $updateAppointmentInput: UpdateAppointmentInput!\n  ) {\n    updateAppointment(\n      id: $updateAppointmentId\n      updateAppointmentInput: $updateAppointmentInput\n    ) {\n      message\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateAppointment(\n    $updateAppointmentId: ID!\n    $updateAppointmentInput: UpdateAppointmentInput!\n  ) {\n    updateAppointment(\n      id: $updateAppointmentId\n      updateAppointmentInput: $updateAppointmentInput\n    ) {\n      message\n      success\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateUser($authId: String!) {\n    createUser(authId: $authId) {\n      success\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser($authId: String!) {\n    createUser(authId: $authId) {\n      success\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAppointments {\n    getAppointments {\n      id\n      status\n      doctor {\n        name\n        speciality {\n          name\n        }\n      }\n      time\n    }\n  }\n"): (typeof documents)["\n  query GetAppointments {\n    getAppointments {\n      id\n      status\n      doctor {\n        name\n        speciality {\n          name\n        }\n      }\n      time\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetSpecialists($specialityId: String!) {\n    getSpecialists(specialityId: $specialityId) {\n    name\n    image\n    rating\n    experience\n    id\n    speciality {\n      name\n    }\n    email\n    address\n    phone\n  }\n  }\n"): (typeof documents)["\n  query GetSpecialists($specialityId: String!) {\n    getSpecialists(specialityId: $specialityId) {\n    name\n    image\n    rating\n    experience\n    id\n    speciality {\n      name\n    }\n    email\n    address\n    phone\n  }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment DoctorInfo on Doctor{\n    name\n    image\n    rating\n    experience\n    id\n    speciality {\n      name\n    }\n    email\n    address\n    phone\n  }\n"): (typeof documents)["\n  fragment DoctorInfo on Doctor{\n    name\n    image\n    rating\n    experience\n    id\n    speciality {\n      name\n    }\n    email\n    address\n    phone\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetDoctor($getDoctorId: ID!) {\n    getDoctor(id: $getDoctorId) {\n      address\n      availability {\n        evening {\n          endTime\n          startTime\n        }\n        morning {\n          endTime\n          startTime\n        }\n        night {\n          endTime\n          startTime\n        }\n      }\n      description\n      experience\n      id\n      image\n      name\n      rating\n      speciality {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetDoctor($getDoctorId: ID!) {\n    getDoctor(id: $getDoctorId) {\n      address\n      availability {\n        evening {\n          endTime\n          startTime\n        }\n        morning {\n          endTime\n          startTime\n        }\n        night {\n          endTime\n          startTime\n        }\n      }\n      description\n      experience\n      id\n      image\n      name\n      rating\n      speciality {\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetDoctorAvailablity($getDoctorId: ID!) {\n    getDoctor(id: $getDoctorId) {\n      availability {\n        evening {\n          endTime\n          startTime\n        }\n        morning {\n          endTime\n          startTime\n        }\n        night {\n          endTime\n          startTime\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetDoctorAvailablity($getDoctorId: ID!) {\n    getDoctor(id: $getDoctorId) {\n      availability {\n        evening {\n          endTime\n          startTime\n        }\n        morning {\n          endTime\n          startTime\n        }\n        night {\n          endTime\n          startTime\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetHospitals {\n    getHospitals {\n      id\n      name\n      address\n      image\n      openTime\n    }\n  }\n"): (typeof documents)["\n  query GetHospitals {\n    getHospitals {\n      id\n      name\n      address\n      image\n      openTime\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetHospital($getHospitalId: ID!) {\n    getHospital(id: $getHospitalId) {\n      address\n      facilities\n      geolocation {\n        coordinates\n        type\n      }\n      id\n      name\n      image\n      email\n      phone\n      city\n      openTime\n    }\n  }\n"): (typeof documents)["\n  query GetHospital($getHospitalId: ID!) {\n    getHospital(id: $getHospitalId) {\n      address\n      facilities\n      geolocation {\n        coordinates\n        type\n      }\n      id\n      name\n      image\n      email\n      phone\n      city\n      openTime\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetSpecialities {\n    getSpecialities {\n      id\n      name\n      image\n    }\n  }\n"): (typeof documents)["\n  query GetSpecialities {\n    getSpecialities {\n      id\n      name\n      image\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;