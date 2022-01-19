const mongoose = require('mongoose');

const { Schema } = mongoose;

const ingredientSchema = new Schema({
    quantity: {
        type: String,
        required: [true, 'Amount is required']
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    type: {
        type: String,
        required: [true, 'Type is required']
    }
});

const Ingredient = mongoose.model('Ingredients', ingredientSchema);

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    ingredients: [Ingredient.schema],
    steps: [String],
    imageURL: {
        type: String,
        validate: {
            validator: value => validator.isURL(value, { protocols: ['http', 'https', 'ftp'], require_tld: true, require_protocol: true }),
            message: 'Must be a Valid URL'
        }
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
