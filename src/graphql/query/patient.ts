import {gql} from '../../__generated__';

export const GET_PATIENTS = gql(`
  query GetPatientsOfUser {
  getPatientsOfUser {
    age
    name
    id
  }
}
`);
