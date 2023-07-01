import {gql} from '@apollo/client';

export const GET_APPOINTMENTS = gql`
  query GetAppointments {
    getAppointments {
      id
      doctor {
        name
        speciality {
          name
        }
      }
      time
    }
  }
`;
