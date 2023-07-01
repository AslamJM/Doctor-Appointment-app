import {gql} from '@apollo/client';

export const CREATE_APPOINTMENT = gql`
  mutation CreateAppointment($appointmentInput: AppointmentInput!) {
    createAppointment(appointmentInput: $appointmentInput) {
      appointment {
        status
        time
      }
    }
  }
`;

export const UPDATE_APPOINTMENT = gql`
  mutation UpdateAppointment(
    $updateAppointmentId: ID!
    $updateAppointmentInput: UpdateAppointmentInput!
  ) {
    updateAppointment(
      id: $updateAppointmentId
      updateAppointmentInput: $updateAppointmentInput
    ) {
      message
      success
    }
  }
`;
