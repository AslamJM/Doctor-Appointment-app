import {gql} from '../../__generated__';

export const CREATE_APPOINTMENT = gql(`
  mutation CreateAppointment($appointmentInput: AppointmentInput!) {
  createAppointment(appointmentInput: $appointmentInput) {
    message
    success
  }
}
`);

export const UPDATE_APPOINTMENT = gql(`
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
`);
