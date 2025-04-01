import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
const About = () => {
  return (
    <>
    <Home></Home>
    <div className="container d-flex justify-content-center align-items-center bg-light">
       
      <div className="card shadow-lg p-4 justify-content-center align-items-center" >
     
        <h1 className="text-center text-primary">About Us</h1>
        <p className="text-center">
          Welcome to our hotel booking platform! We aim to provide seamless and convenient hotel reservations with the best deals.
        </p>
      </div>
    </div>
    </>
  );
};

export default About;
