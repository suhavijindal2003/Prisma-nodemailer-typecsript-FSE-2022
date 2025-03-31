import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link ,useNavigate } from 'react-router-dom';

const main = () => {
  let navigate = useNavigate();

  function btnClickHandler() {
    navigate('/contact');
  }
  return (
    <div>
    <ul >
      <li >
        <Link to="/">Home</Link>
      </li>
      <li >
      <Link to="/about">About</Link>
      </li>
      <li>
      <Link to="/contact">Contact</Link>
      </li>
      <li>
      <Link to="/:username">Profile</Link>
      </li>
    </ul>
    <button onClick={btnClickHandler}>Submit</button>
  </div>
  )
}

export default main