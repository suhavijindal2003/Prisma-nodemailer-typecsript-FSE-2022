// import { useEffect, useState } from 'react'
// import React from 'react'

// const App = () => {
//   // let [users, setUsers] = useState([{ name: "suhavi", age: 21 }, { name: "tanisha", age: 20 }]);
//   let [users, setUsers] = useState(null);
//   useEffect(()=>{
//     async function fetchusers(URL){
//         let response=await fetch(URL);
//         let userdata=await response.json();
//         setUsers(userdata);
//     }
//     fetchusers("https://jsonplaceholder.typicode.com/users");	
  
//   },[])

//   return (
//     <div>
//       {/* <User name={users[0].name} age={users[0].age}></User>
//       <User name={users[1].name} age={users[2].age}></User> */}


//       {users && users.map((user,idx) => {
//           return <User key={users.idx} name={user.name} email={user.email}></User>
//         })}
//     </div>
//   )


// }


// function User(props) {
//   return (
//     <div>
//       <h2>name is {props.name}</h2>
//       <h3> age is {props.email}</h3>
//     </div>
//   )
// }

// export default App



import React from 'react'
import { createContext } from 'react'
import { useContext } from 'react'  
const SomeContext = createContext(0);
const App = () => {

 let data=5;
  return (
    <div>
      <SomeContext.Provider value={data}>
        <Child1/>
      </SomeContext.Provider>
    </div>
  )

}
function Child1(){
  return(
    <div>
      <h1>Child1</h1>
      <Child2/>
    </div>
  )
}
function Child2(){
  const value=useContext(SomeContext);
  return(
    <div>
      <h1>Child2</h1>
      <h3>value is {value}</h3>
      <Child3/>
    </div>
  )
} 
function Child3(){
  // const value=useContext(SomeContext);
  return(
    <div>
      <h1>Child3</h1>
      {/* <h3>value is {value}</h3> */}
    </div>
  )
}
export default App