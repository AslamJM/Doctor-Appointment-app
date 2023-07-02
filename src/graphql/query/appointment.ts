import {gql} from '../../__generated__';

export const GET_APPOINTMENTS = gql(`
  query GetAppointments {
    getAppointments {
      id
      status
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
