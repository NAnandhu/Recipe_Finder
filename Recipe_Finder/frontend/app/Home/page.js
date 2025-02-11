import React from 'react';

const Home = () => {
  return (
    <>
   
        <title>Home Page</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />
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
            margin-left: 550px;
            padding-top: 30px;
          }
          a:hover {
            margin-top: 90px;
            color: red;
          }
          .kaushan-text {
            font-family: 'Kaushan Script', cursive;
          }
          h1 {
            margin-left: 250px;
            margin-top: 150px;
          }
        `}
      </style>

      <nav>
        <ul className="list-unstyled d-flex justify-content">
          <li>
          <img
          className="Logo"
          src="/Images/logo.png"
          alt="recipe logo"
          width={100}
          height={38}
        />
          </li>
          <div className="Link">
            <a
              href="/AddRecipe"
              className="link-dark m-5 mt-0 fs-4 fw-bold text-decoration-none"
            >
              <span style={{ color: 'red' }}>A</span>dd
            </a>
            <a
              href="/ViewItems"
              className="link-dark m-5 mt-0 fs-4 fw-bold text-decoration-none"
            >
              <span style={{ color: 'red' }}>V</span>iew
            </a>
          </div>
        </ul>
      </nav>

      <div>
        <h1 className="kaushan-text">Welcome to Cook Book</h1>
        <h3 style={{ marginLeft: '260px', marginTop: '25px', color: 'red' }}>
          Find Your Recipe
        </h3>
        <p style={{ marginLeft: '260px', marginTop: '20px' }}>Find Your Taste</p>
      </div>
    </>
  );
};
export default Home;
