import React, { useState } from 'react'
import './App.css'
// import Counter from './Components/Counter'

function App() {
  const [count, setCount] = useState(0);
function Increase(){
  setCount(count+1)
}


const [bgColor, setBgColor] = useState("#ffffff"); // Initial background color

function generateRandomColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  setBgColor(randomColor);
}

  return (
    <>
      {/* <Counter/> */}

      <div style={{ backgroundColor: bgColor, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <h1>Random Background Color</h1>
      <button 
        onClick={generateRandomColor} 
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", border: "none", borderRadius: "5px", backgroundColor: "#000", color: "#fff" }}
      >
        Change Color
      </button>
    </div>
      <div>
        <h1>count:{count} </h1>
        <button onClick={Increase} >Click</button>
      </div>

      {/* <Parents/> */}
      {/* {Parents()} */}
    </>
  )
}


// function Parents(){
//   return(
//     <div>
//       <h1>parents</h1>
//       <Child name="suhavi" age="21"/>
//     </div>
//   )
// }
// function Child(p){
//   return(
//     <div>
//       <h2>Name: {p.name}</h2>
//       <h4>Age: {p.age}</h4>
//       <h1>child</h1>
//     </div>
//   )
// }

export default App
