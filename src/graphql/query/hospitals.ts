import {gql} from '../../__generated__';

export const GET_HOSPITALS = gql(`
  query GetHospitals {
    getHospitals {
      id
      name
      address
      image
      openTime
    }
  }
`);

export const GET_HOSPITAL = gql(`
  query GetHospital($getHospitalId: ID!) {
    getHospital(id: $getHospitalId) {
      address
      facilities
      geolocation {
        coordinates
        type
      }
      id
      name
      image
      email
      phone
      city
      openTime
    }
  }
`);
