import {gql} from '@apollo/client';

export const GET_SPECIALITIES = gql`
  query GetSpecialities {
    getSpecialities {
      id
      name
      image
    }
  }
`;
