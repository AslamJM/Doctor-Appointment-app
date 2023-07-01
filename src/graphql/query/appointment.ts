import {gql} from '../../__generated__';

export const GET_APPOINTMENTS = gql(`
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
`);
