import mysql from 'mysql2/promise';
import { NextResponse } from 'next/server';

// Create MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Anandhu*123',
  database: 'RecipeDb'
});

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get('search') || '';

    let query = 'SELECT * FROM AddRecipe';
    let queryParams = [];

    if (search) {
      query += ' WHERE RecipeName LIKE ?';
      queryParams.push(`%${search}%`);
    }

    const [recipes] = await pool.query(query, queryParams);

    if (recipes.length === 0) {
      return NextResponse.json({ recipes: [] }, { status: 200 }); // Return empty array
    }

    return NextResponse.json({ recipes }, { status: 200 });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
