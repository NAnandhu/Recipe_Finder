import mysql from 'mysql2/promise';
import { NextResponse } from 'next/server';

// Create MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Anandhu*123',
  database: 'RecipeDb'
});

export async function POST(req) {
  try {
    const {  RecipeName, Ingredients, Recipe } = await req.json();

    // Check if the recipe already exists
    const [existingRecipe] = await pool.query(
      'SELECT * FROM AddRecipe WHERE  RecipeName = ?',
      [RecipeName]
    );

    if (existingRecipe.length > 0) {
      return NextResponse.json({ error: 'Recipe already exists' }, { status: 400 });
    }

    // Insert new recipe into the database
    await pool.query(
      'INSERT INTO AddRecipe (RecipeName, Ingredients, Recipe) VALUES (?, ?, ?)',
      [RecipeName, Ingredients, Recipe]
    );

    return NextResponse.json({ message: 'Recipe added successfully' }, { status: 201 });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
