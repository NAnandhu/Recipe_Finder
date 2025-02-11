'use client';
import React, { useState } from 'react';

const AddRecipe = () => {
  const [RecipeName, setRecipeName] = useState('');
  const [Ingredients, setIngredients] = useState('');
  const [Recipe, setRecipe] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      RecipeName,
      Ingredients,
      Recipe,
    };

    try {
      const response = await fetch('/api/AddRecipe', { // Connects with backend API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.status === 201) {
        setMessage('Recipe added successfully');
        setError('');
        setRecipeName('');
        setIngredients('');
        setRecipe('');
      } else {
        setError(result.error || 'Something went wrong');
        setMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Internal server error');
    }
  };

  return (
    <>
      <style>{`
        body {
          background-image: url('/Images/Hp2.jpeg'); 
          background-size: cover;
          background-position: center; 
          background-repeat: no-repeat;
          height: 100vh; 
          margin: 0; 
        }
        .AddContainer {
          background-color: rgba(255, 255, 255, 0.8); 
          border-radius: 10px;
          padding: 30px;
          width: 100%;
          max-width: 400px;
          margin: auto;
          margin-top: 50px;
        }
        .btn {
          background-color: red;
          width: 150px;
          display: block;
          margin: auto;
        }
        .txtarea {
          padding: 15px;
        }
        h1 {
          text-align: center;
        }
        .input {
          display: flex;
          flex-direction: column;
          margin-bottom: 15px;
        }
        .input label {
          font-weight: bold;
          margin-bottom: 5px;
        }
        .input input, .txtarea textarea {
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
          width: 100%;
        }
      `}</style>

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      ></script>

      <div>
        <img className="Logo" src="/Images/logo.png" alt="Recipe Logo" width={100} height={38} />
      </div>

      <div className="AddContainer border shadow-sm p-4 mb-5 bg-body-tertiary rounded">
        <h1 className="fs-2 fw-bold">
          <span style={{ color: 'red' }}>A</span>dd <span style={{ color: 'red' }}>R</span>ecipe
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="RecipeName">Item Name</label>
            <input
              type="text"
              id="RecipeName"
              value={RecipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              required
            />
          </div>

          <div className="input">
            <label htmlFor="Ingredients">Ingredients</label>
            <input
              type="text"
              id="Ingredients"
              value={Ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              required
            />
          </div>

          <div className="txtarea">
            <label htmlFor="Recipe">Recipe</label>
            <textarea
              id="Recipe"
              value={Recipe}
              onChange={(e) => setRecipe(e.target.value)}
              style={{ width: '100%', height: '110px' }}
              required
            ></textarea>
          </div>

          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
          {message && <p style={{ color: 'green', textAlign: 'center' }}>{message}</p>}

          <button type="submit" className="btn btn-danger">Add Recipe</button>
        </form>
      </div>
    </>
  );
};

export default AddRecipe;
