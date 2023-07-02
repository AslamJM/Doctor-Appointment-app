import {gql} from '../../__generated__';

export const GET_SPECIALISTS = gql(`
  query GetSpecialists($specialityId: String!) {
    getSpecialists(specialityId: $specialityId) {
      name
      image
      rating
      experience
      id
      speciality {
        name
      }
    }
  }
`);

export const GET_DOCTOR_BY_ID = gql(`
  query GetDoctor($getDoctorId: ID!) {
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
  query GetDoctorAvailablity($getDoctorId: ID!) {
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
