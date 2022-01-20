import { gql } from '@apollo/client';

export const QUERY_RECIPES = gql`
  query getRecipes {
    recipes [
      recipe {
        _id
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
    ]
  }
`;

export const QUERY_RECIPE = gql`
query getRecipes($recipe: name) {
    recipe(name: $name) {
      _id
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

export const QUERY_USER = gql`
  {
    user {
      username
      email
      recipes [
        recipe {
          _id
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
      ]
    }
  }
`;