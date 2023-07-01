import {gql} from '../../__generated__';

export const GET_SPECIALISTS = gql(`
  query Query($specialityId: String!) {
    getSpecialists(specialityId: $specialityId) {
      name
      image
      rating
      experience
      id
    }
  }
`);

export const GET_DOCTOR_BY_ID = gql(`
  query Query($getDoctorId: ID!) {
    getDoctor(id: $getDoctorId) {
      address
      availability {
        evening {
          endTime
          startTime
        }
        morning {
          endTime
          startTime
        }
        night {
          endTime
          startTime
        }
      }
      description
      experience
      id
      image
      name
      rating
      speciality {
        name
      }
    }
  }
`);

export const GET_DOCTOR_AVAILABILTY = gql(`
  query Query($getDoctorId: ID!) {
    getDoctor(id: $getDoctorId) {
      availability {
        evening {
          endTime
          startTime
        }
        morning {
          endTime
          startTime
        }
        night {
          endTime
          startTime
        }
      }
    }
  }
`);
