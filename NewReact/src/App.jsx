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



// import React from 'react'
// import { createContext } from 'react'
// import { useContext } from 'react'  
// const SomeContext = createContext(0);
// const App = () => {


//   return (
//     <div>
//       <h1>App</h1>
//       {/* <SomeContext.Provider value={data}>
//         <Child1/>
//       </SomeContext.Provider> */}
//       <Grandparent></Grandparent>

//     </div>
//   )

// }
// function Grandparent(){
//   let data="OLD IS GOLD";
//   return(
//     <div>
//       <h1>Grandparent</h1>
//       <SomeContext.Provider value={data}>
//         <Parent></Parent>
//       </SomeContext.Provider>
//     </div>
//   )
// }
// function Parent(){
//   return(
//     <div>
//       <h1>Parent</h1>
//       <Child/>
//     </div>
//   )

// } 
// function Child(){
//   const value=useContext(SomeContext);
//   return(
//     <div>
//       <h1>Child</h1>
//       <h3>value is {value}</h3>
//     </div>
//   )
// }
// export default App






// import React from 'react'
// import {memo} from 'react'
// import { useState } from 'react'
// const App = () => {
//   let [value,setvalue]=useState(0);
//   return (
//     <div>App
//     // <button onClick={()=>setvalue(value+1)}>Change state</button>
//     <Child1></Child1>
//     <Child2></Child2>
//     <Child3></Child3>
//   </div>
//   )
// }
// let Child1=memo(function Child1(){
//   console.log("child1");
//   return(
//     <div>child1</div>
    
//   )
// })
// let Child2=memo(function Child2(){
//   console.log("child2");
//   return(
//     <div>child2</div>
    
//   )
// })
// let Child3=memo(function Child3(){
//   console.log("child3");
//   return(
//     <div>child3</div>
//   )
// })

// export default App

import React from 'react';
import Main from './components/main.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Profile from './components/Profile.jsx';
import { BrowserRouter as Browserroutes, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
      {/* <Main /> */}
      <Browserroutes>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/:username' element={<Profile/>} />
      </Routes>
      </Browserroutes>
    </>
  );
}

export default App;