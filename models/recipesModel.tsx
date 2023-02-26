import {Schema, model, models} from 'mongoose';

const recipeSchema = new Schema({
    name: {type: String, required: true},
    imageLink: {type: String, required: true},
    desc: {type: String, required: true},
    category: {type: String, required: true},
});

const Recipe = models.Recipe || model('Recipe', recipeSchema);

export default Recipe;
