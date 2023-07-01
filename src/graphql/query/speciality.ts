import {gql} from '../../__generated__';

export const GET_SPECIALITIES = gql(`
  query GetSpecialities {
    getSpecialities {
      id
      name
      image
    }
  }
`);
