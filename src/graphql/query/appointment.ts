import {gql} from '../../__generated__';

export const GET_MY_APPOINTMENTS = gql(`
  query GetUserAppointments {
    getUserAppointments {
      id
      time
      status
      patient {
        name
        age
      }
      doctor {
        name
        phone
        image
        address
        speciality {
          name
        }
      }
    }
  }
`);
