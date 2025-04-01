
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './Home'

const UserList = () => {
    // let [users, setuser] = useState([{ id: 1, username: "suhavi", email: "suhavi@123" }, { id: 2, username: "suhavi jindal", email: "@123" }, { id: 3, username: "anu", email: "anu@123" }]);
    return (
        <div>
            {/* <h1>UserList</h1>
       {
        users.map((user)=>{
            return(
               <user username={user.username} email={user.email} key={user.id}/>
            )
        })
       }  */}
       <Home></Home>
            <h1>UserList</h1>
            <Link to="1">user1</Link>
            <Link to="2">user2</Link>
            <Link to="3">user3</Link>
            <Link to="4">user4</Link>
            <Link to="5">user5</Link>
            <Outlet></Outlet>
        </div>
    )
}

export default UserList