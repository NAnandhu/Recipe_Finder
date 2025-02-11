'use client'; 

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 

const Login = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      Email,
      Password,
    };

    try {
      const response = await fetch('/api/Login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.status === 200) {
        setMessage('Login successful');
        setError('');
          router.push('/Home'); 
        
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
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      ></script>

      <style>
        {`
          body {
            background-image: url('/Images/Hp2.jpeg'); 
            background-size: cover;
            background-position: center; 
            background-repeat: no-repeat;
            height: 100vh; 
            margin: 0; 
          }
          .login-container {
            background-color: rgba(255, 255, 255, 0.8); 
            border-radius: 10px;
            padding: 30px;
            width: 100%;
            max-width: 400px;
            margin: auto;
            margin-top: 100px;
          }
          h1 {
            text-align: center;
            margin-bottom: 20px;
          }
          .form-control {
            margin-bottom: 15px;
          }
          .btn-primary {
            width: 75px;
            padding: 5px;
          }
          .footer-text {
            text-align: center;
            margin-top: 15px;        
          }
          .btn{
            background-color: red;
          }
        `}
      </style>

      <div className="login-container border col-xs-12 col-sm-6 col-lg-4 col-xl-2">
        <h1><span style={{color: 'red'}}>L</span>OG<span style={{color: 'red'}}>I</span>N</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div> 

          {error && <p style={{ color: 'red' }}>{error}</p>}
          {message && <p style={{ color: 'green' }}>{message}</p>}

          <div className="d-flex justify-content-between">  
            <div className="footer-text">
              <p>Don't have an account? <a href="/Signup">Sign Up</a></p>
            </div>
            <div>
              <button type="submit" className="btn btn-danger">Login</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

