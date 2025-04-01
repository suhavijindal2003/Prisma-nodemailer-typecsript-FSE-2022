import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link ,useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();
  
  function ClickHandler() {
    navigate('/userlist');
  }
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
    <button onClick={ClickHandler}>Userlist</button>

  </div>
  )
}

export default Home;