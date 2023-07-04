import {gql} from '../../__generated__';

export const CREATE_USER = gql(`
  mutation CreateUser($authId: String!) {
    createUser(authId: $authId) {
      success
      message
    }
  }
`);

export const CREATE_PATIENT = gql(`
    mutation CreatePatient($input: CreatePatientInput!) {
    createPatient(input: $input) {
    message
    success
    patient {
      age
      name
      id
    }
  }
}
`);
