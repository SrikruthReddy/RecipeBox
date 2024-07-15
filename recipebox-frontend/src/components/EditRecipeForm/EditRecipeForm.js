import React, { useState, useEffect } from 'react';
import { updateRecipe } from '../../api';
import './EditRecipeForm.css';

const EditRecipeForm = ({ recipe, onClose, onUpdate }) => {
  const [title, setTitle] = useState(recipe.title);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [instructions, setInstructions] = useState(recipe.instructions);

  useEffect(() => {
    setTitle(recipe.title);
    setIngredients(recipe.ingredients);
    setInstructions(recipe.instructions);
  }, [recipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      title,
      ingredients,
      instructions,
    };

    updateRecipe(recipe.id, updatedRecipe).then((response) => {
      onUpdate(response.data);
      onClose();
    });
  };

  return (
    <div className="edit-recipe-form">
      <form onSubmit={handleSubmit}>
        <h2>Edit Recipe</h2>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Ingredients:
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </label>
        <label>
          Instructions:
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          />
        </label>
        <button type="submit">Update Recipe</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditRecipeForm;
