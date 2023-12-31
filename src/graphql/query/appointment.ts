import {gql} from '../../__generated__';

export const APPOINTMENT_INFO = gql(`
    fragment AppointmentInfo on Appointment {
      time
      date
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
`);

export const GET_MY_APPOINTMENTS = gql(`
  query GetUserAppointments {
    getUserAppointments {
      id
      time
      date
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
