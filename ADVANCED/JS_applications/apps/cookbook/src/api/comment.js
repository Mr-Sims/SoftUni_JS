import * as api from './api.js';
import {endpoints, addOwner} from './data.js';

export async function getCommentsByRecipeId(recipeId) {
    return api.get(endpoints)
}