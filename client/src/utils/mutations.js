import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $lastName
      email: $email
      password: $password
    )
  }
`;

export const ADD_RECIPE = gql`
  mutation addRecipe(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addRecipe(
      name
      ingredients [
        ingredient {
          quantity
          name
          type
        }
      ]
      steps
      imageURL
  }
`;
