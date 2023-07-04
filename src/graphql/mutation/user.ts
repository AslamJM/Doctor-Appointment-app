import {gql} from '../../__generated__';

export const CREATE_USER = gql(`
  mutation CreateUser($authId: String!) {
    createUser(authId: $authId) {
      success
      message
    }
  }
`);
