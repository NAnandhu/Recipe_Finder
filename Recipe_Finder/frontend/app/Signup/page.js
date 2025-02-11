 
'use client';
import React, { useState } from 'react';

const SignUp = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare data to send
    const formData = {
      FirstName,
      LastName,
      Email,
      Password,
    };

    try {
      // Sending data to backend route
      const response = await fetch('/api/signup', { 
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.status === 201) {
        setMessage('User created successfully');
        setError('');
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
          .SignupContainer {
            background-color: rgba(255, 255, 255, 0.8); 
            border-radius: 10px;
            padding: 50px;
            width: 100%;
            height: 450px;
            max-width: 400px;
            margin: auto;
            margin-top: 100px;
          }
          h1 {
            text-align: center;
          }
          .input {
            width: 70%;
            height: 30px;
            margin-bottom: 15px;
          }       
          .form-group {
            margin-top: 30px;
            margin-bottom: 30px
          }
          .btn {
            background-color: red;
          }
        `}
      </style>

      <div className="SignupContainer border col-xs-12 col-sm-6 col-lg-4 col-xl-3 shadow-sm p-4 mb-5 bg-body-tertiary rounded">
        <h1 className="fs-2 fw-bold text-center">
          <span style={{ color: 'red' }}>S</span>ign <span style={{ color: 'red' }}>U</span>p
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}
          {message && <p style={{ color: 'green' }}>{message}</p>}

          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">
              Already have an account? <a href="/Login" className="text-decoration-none">Login</a>
            </p>
            <button type="submit" className="btn btn-danger">Sign Up</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
