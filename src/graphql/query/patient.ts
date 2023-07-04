import {gql} from '../../__generated__';

export const GET_PATIENTS = gql(`
  query GetPatientsOfUser($userId: ID!) {
    getPatientsOfUser(userId: $userId) {
      age
      name
      id
    }
  }
`);
