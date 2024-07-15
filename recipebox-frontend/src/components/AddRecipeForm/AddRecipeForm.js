import React, { useState } from 'react';
import { createRecipe } from '../../api';
import './AddRecipeForm.css';

const AddRecipeForm = ({ onClose, onAdd }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      title,
      ingredients,
      instructions,
    };

    createRecipe(newRecipe).then((response) => {
      onAdd(response.data);
      onClose();
    });
  };

  return (
    <div className="add-recipe-form">
      <form onSubmit={handleSubmit}>
        <h2>Add Recipe</h2>
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
        <button type="submit">Add Recipe</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
