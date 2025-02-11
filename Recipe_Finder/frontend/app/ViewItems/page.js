'use client';
import React, { useEffect, useState } from 'react';

export default function ViewAll() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (query = '') => {
    try {
      setLoading(true);
      const response = await fetch(`/api/GetRecipe?search=${query}`);
      const data = await response.json();

      if (response.ok) {
        setRecipes(data.recipes || []);
      } else {
        console.error('Error fetching recipes:', data.error);
        setRecipes([]);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleSearch = () => {
    fetchRecipes(search);
  };

  return (
    <div>
      <style>
        {` 
          img {
            width: 300px; 
            height: 200px;
            border-radius: 10px;
          }
          .btn {
            background-color: red;
            margin-left: 150px;
          }
          .Sbtn {
            background-color: red;
            width: 80px;
            height: 35px;
            color: white;
            border-radius: 10px;
            border-style: none;
          }
          h1 {
            text-align: center;
          }
        `}
      </style>

      <div className="d-flex justify-content-center align-items-center">
        <img src="/Images/logo.png" alt="Recipe Logo" style={{ width: "100px", height: "90px", padding: "3px" }} />
        <h1 className="fs-2 fw-bold p-4">
          <span style={{ color: "red" }}>V</span>iew Recipes
        </h1>
      </div>

      <div className="d-flex justify-content-center my-3">
        <input
          type="text"
          className="border"
          style={{ width: "300px", height: "30px", padding: "5px" }}
          placeholder="Search Recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="Sbtn btn-danger mx-2" onClick={handleSearch}>Search</button>     
      </div>

      {loading && <p className="text-center">Loading recipes...</p>}

      <div style={{ display: 'flex', justifyContent: "center", flexWrap: "wrap", gap: "30px", marginTop: "50px",  marginLeft:"300px"}}>
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <div key={index} className="card rounded" style={{ width: "300px" }}>
              <img src={`/Images/v5s7l9ha.png`} alt={recipe.RecipeName} style={{ width: "100%", height: "200px" }} />
              <div className="card-body">
                <h5>{recipe.RecipeName}</h5>
                <p>{recipe.Ingredients}</p>
                <button className="btn btn-danger">View</button>
              </div>
            </div>
          ))
        ) : (
          !loading && <p className="text-center">No recipes found</p>
        )}
      </div>
    </div>
  );
}
