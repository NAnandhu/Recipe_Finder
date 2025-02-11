import React from 'react'

const AddRecipe = () => {
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
        .AddContainer{
            background-color: rgba(255, 255, 255, 0.8); 
            border-radius: 10px;
            padding: 30px;
            width: 100%;
            max-width: 400px;
            margin: auto;
            margin-top: 50px;
        }
        .btn{
            background-color: red;
            margin-left: 90px;
            width: 150px;
        }
        .txtarea{
            padding: 15px;
            padding-right: 25px;
            margin-left: 20px;
        }
        h1{
            text-align: center;
        }
        .input{
            align-items: center;
            margin-left: 30px;
            padding: 9px;
            border:5px
        }`}
    </style>
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
    <div>
    <img className="Logo" src="/Images/logo.png" alt="recipe logo" width={100} height={38}/>
    </div>
    <div className="AddContainer border shadow-sm p-4 mb-5 bg-body-tertiary rounded">
        <h1 className="fs-2 fw-bold"><span style={{color: 'red'}}>U</span>pdate
            <span style={{color: 'red'}}>R</span>ecipe
        </h1>
       <div className="input">
        <label for="">Item Name</label>
        <input type="text" className="border"/>
       </div>
       <div className="input">
        <label for="">Ingredients</label>
        <input type="text" className="border"/>
       </div>
       <div className="txtarea">
        <label for="">Recipe</label>
        <textarea
         name=""
        id=""
        style={{ width: '260px', height: '110px' }}
        className="border">
       </textarea>
       </div>
       <div>
        <div>
            <button className="btn btn-danger" style={{background:'red'}}>update</button>
        </div>
       </div>
    </div>
    </>
  )
}

export default AddRecipe