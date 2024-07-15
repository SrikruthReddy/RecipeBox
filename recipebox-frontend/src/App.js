import React, { useState } from 'react';
import RecipeList from './components/RecipeList/RecipeList';
import AddRecipeForm from './components/AddRecipeForm/AddRecipeForm';
import './App.css';
import './variables.css';

const App = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipeClick = () => {
    setIsAdding(true);
  };

  const handleCloseForm = () => {
    setIsAdding(false);
  };

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Recipe Box</h1>
        <button className="add-recipe-button" onClick={handleAddRecipeClick}>
          Add Recipe
        </button>
      </header>
      <main>
        {isAdding && (
          <AddRecipeForm onClose={handleCloseForm} onAdd={handleAddRecipe} />
        )}
        <RecipeList recipes={recipes} setRecipes={setRecipes} />
      </main>
    </div>
  );
};

export default App;
