import React from 'react'
import { useEffect} from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    let [user, setUser] = React.useState({});
    let { id } = useParams();
    console.log(id)
    id = Number(id)
    // https://jsonplaceholder.typicode.com/users/id
    useEffect(() => {
        console.log("hi")
        async function fetchUser(URL) {
            let response = await fetch(URL);
            let data = await response.json();
            setUser(data);
        }
        fetchUser(`https://jsonplaceholder.typicode.com/users/${id}`)
    },[id])
    console.log(user);

  return (
                <div>

                    <h1>UserList</h1>
                    <h3>user is {id}</h3>
                    <span>Username: {user.username}</span><br></br>
        <spam>Email: {user.email}</spam> 
                </div>
            )
        }

        export default User