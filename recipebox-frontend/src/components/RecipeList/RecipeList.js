import React, { useState, useEffect } from 'react';
import { getRecipes, deleteRecipe, updateRecipe } from '../../api';
import RecipeCard from '../RecipeCard/RecipeCard';
import EditRecipeForm from '../EditRecipeForm/EditRecipeForm';
import './RecipeList.css';

const RecipeList = ({ recipes, setRecipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    getRecipes().then((response) => {
      setRecipes(response.data);
    });
  }, [setRecipes]);

  const handleDelete = (id) => {
    deleteRecipe(id).then(() => {
      setRecipes(recipes.filter((recipe) => recipe.id !== id));
    });
  };

  const handleEdit = (recipe) => {
    setSelectedRecipe(recipe);
    setIsEditing(true);
  };

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseCard = () => {
    setSelectedRecipe(null);
  };

  const handleUpdateRecipe = (updatedRecipe) => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    );
    setIsEditing(false);
  };

  const handleCloseEditForm = () => {
    setIsEditing(false);
  };

  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} onClick={() => handleSelectRecipe(recipe)}>
            <h3>{recipe.title}</h3>
            <p>{recipe.ingredients}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleEdit(recipe);
              }}
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(recipe.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {selectedRecipe && !isEditing && (
        <RecipeCard recipe={selectedRecipe} onClose={handleCloseCard} />
      )}
      {isEditing && (
        <EditRecipeForm
          recipe={selectedRecipe}
          onClose={handleCloseEditForm}
          onUpdate={handleUpdateRecipe}
        />
      )}
    </div>
  );
};

export default RecipeList;
