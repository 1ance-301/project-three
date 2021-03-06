const { AuthenticationError } = require('apollo-server-express');
const { User, Recipe } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    populate: 'recipes'
                });

                return user;
            }

            throw new AuthenticationError('Not logged in');
        },
        recipes: async (parent, { name }) => {
            const params = {};

            if (name) {
                params.name = {
                    $regex: name
                };
            }

            return await Product.find(params).populate('user');
        },
        recipe: async (parent, { _id }) => {
            return await Recipe.findById(_id).populate('user');
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }

            throw new AuthenticationError('Not logged in');
        },
        addRecipe: async (parent, { ingredients, steps, imageURL }, context) => {
            if (context.user) {
              const recipe = new Recipe({ ingredients, steps, imageURL });
      
              await User.findByIdAndUpdate(context.user._id, { $push: { recipes: recipe } });
      
              return recipe;
            }
      
            throw new AuthenticationError('Not logged in');
          },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        }
    }
}

module.exports = resolvers;