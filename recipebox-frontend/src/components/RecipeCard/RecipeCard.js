import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="recipe-card-overlay">
      <div className="recipe-card">
        <h2>{recipe.title}</h2>
        <p>
          <strong>Ingredients:</strong>
        </p>
        <p>{recipe.ingredients}</p>
        <p>
          <strong>Instructions:</strong>
        </p>
        <p>{recipe.instructions}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default RecipeCard;
