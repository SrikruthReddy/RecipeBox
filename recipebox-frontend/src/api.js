import axios from 'axios';

const API_URL = 'http://localhost:8000/api/recipes/';

export const getRecipes = () => axios.get(API_URL);
export const createRecipe = (data) => axios.post(API_URL, data);
export const deleteRecipe = (id) => axios.delete(`${API_URL}${id}/`);
export const updateRecipe = (id, data) => axios.put(`${API_URL}${id}/`, data);
