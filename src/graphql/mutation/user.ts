import {gql} from '../../__generated__';

export const CREATE_USER = gql(`
  mutation CreateUser {
  createUser {
    message
    success
  }
}
`);

export const CREATE_PATIENT = gql(`
    mutation CreatePatient($input: CreatePatientInput!) {
  createPatient(input: $input) {
    message
    success
  }
}
`);
