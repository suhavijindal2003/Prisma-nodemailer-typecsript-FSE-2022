import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './main.jsx';
const Contact = () => {
  return (
    <div>
        <Main></Main>
        <h1>Contact</h1>
        <div className="container d-flex justify-content-center align-items-center bg-light">   
        <div className="card shadow-lg p-4 justify-content-center align-items-center" >
        <h1 className="text-center text-primary">Contact Us</h1>
        <p className="text-center">
          For inquiries, please reach out to us at:
            <br />
        </p>
        </div>
        </div>
    </div>
  )
}

export default Contact