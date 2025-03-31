import React from 'react'
import { useParams } from 'react-router-dom'
import Main from './main.jsx';
const Profile = () => {
    let{ username}=useParams();
  return (
    
    <div> <Main></Main>Profile page of {username}</div>
  )
}

export default Profile