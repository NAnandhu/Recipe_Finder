import mysql from 'mysql2/promise';
import { NextResponse } from 'next/server';

// Create MySQL connection
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Anandhu*123',  
  database: 'RecipeDb'
});

export async function POST(req) {
  try {
    const { FirstName, LastName, Email, Password } = await req.json();
  
    const [existingUser] = await pool.query(
      'SELECT * FROM Signup WHERE Email = ?',
      [Email]
    );
    if (existingUser.length > 0) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Insert new user
    await pool.query(
      'INSERT INTO Signup (FirstName, LastName, Email, Password) VALUES (?, ?, ?, ?)',
      [FirstName, LastName, Email, Password]
    );

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
