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
    const { Email, Password } = await req.json();

    // Check if user exists
    const [user] = await pool.query(
      'SELECT * FROM Signup WHERE Email = ?', [Email]
    );

    if (user.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const storedUser = user[0];

    // Compare plain text passwords (Not Secure)
    if (Password !== storedUser.Password) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    return NextResponse.json({ message: 'Login successful', user: storedUser }, { status: 200 });

  } catch (error) {
    console.error('Login Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
