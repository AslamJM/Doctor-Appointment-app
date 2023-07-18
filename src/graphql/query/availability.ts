import {gql} from '../../__generated__';

export const GET_DOCTOR_AVAILABILTY = gql(`
  query GetDoctorAvailability($getDoctorAvailabilityId: ID!, $date: String!) {
    getDoctorAvailability(id: $getDoctorAvailabilityId, date: $date) {
      date
      morning {
        endTime
        startTime
      }
      evening {
        endTime
        startTime
      }
      night {
        endTime
        startTime
      }
    }
  }
`);
