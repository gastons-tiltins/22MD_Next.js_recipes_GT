import {Schema, model, models} from 'mongoose';

const recipeSchema = new Schema({
    name: String,
    imageLink: String,
    desc: String,
    category: String,
});

const Recipe = models.Recipe || model('Recipe', recipeSchema);

export default Recipe;
