const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        recipes: [Recipe]
    }

    type Recipe {
        _id: ID
        name: String
        ingredients: [Ingredient!]
        steps: [String]
        imageURL: String
    }

    type Ingredient {
        quantity: String
        name: String
        type: String
    }

    type Query {
        recipes(name: String): [Recipe]
        recipe(_id: ID!): Recipe
        user: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        updateUser(username: String, email: String, password: String): User
        addRecipe(name: String!, ingredients: [Ingredient]!, steps: [String]!, imageURL: String): Recipe
        login(email: String!, password: String!): Auth
    }
    
    type Auth {
        token: ID
        user: User
    }
`;

module.exports = typeDefs;
