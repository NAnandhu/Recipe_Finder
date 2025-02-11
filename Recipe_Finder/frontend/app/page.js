'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const Index = () => {

const router = useRouter();

function Start(){
  router.push('/Login')
}
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
            background-image: url(/Images/Hp2.jpeg); 
            background-size: cover;
            background-position: center; 
            background-repeat: no-repeat;
            height: 100vh; 
            margin: 0; 
          }
          .Link {
            margin-right: 400px;
            margin-top: 20px;
            
          }
          .btn {
            background-color: red;
            width: 200px;
            border-radius: 20px;
            margin-top: 30px;
            margin-left: 490px;
          }
          h1 {
            text-align: center;
            margin-top: 150px;
            margin-right: 80px;
          }
          h4 {
            margin-top: 15px;
            margin-left: 510px; 
            padding: 11px;
          }
        `}
      </style>

      <nav>
        <ul className="list-unstyled d-flex justify-content-between">
          <li>
          <img
          className="Logo"
          src="/Images/logo.png"
          alt="recipe logo"
          width={100}
          height={38}
        />
          </li>
          <li className="Link">
            <a
              href="/Signup"
              className="fs-4 fw-bold"
              style={{ color: 'black', padding: '15px', textDecoration: 'none' }}
            >
              <span style={{ color: 'red' }}>S</span>ign<span style={{ color: 'red' }}>U</span>p
            </a>
            <a
              href="/Login"
              className="fs-4 fw-bold"
              style={{ color: 'black', padding: '15px', textDecoration: 'none' }}
            >
              <span style={{ color: 'red' }}>L</span>og<span style={{ color: 'red' }}>i</span>n
            </a>
          </li>
        </ul>
      </nav>

      <div>
        <h1 className="fs-1 fw-bold fst-italic">
          <span style={{ color: 'red' }}>F</span>ind <span style={{ color: 'red' }}>Y</span>our
          <span style={{ color: 'red' }}>R</span>ecipe
        </h1>
        <h4 className="fs-5">Find Your Taste</h4>
      </div>
      <div>
        <button className="btn btn-danger rounded-lg fs-6 fw-bold"onClick={Start}>Get Start</button>
      </div>
    </>
  );
};

export default Index;
