import React, { useEffect, useState } from 'react'
import './App.css'


function App() {
let[time,seTtime]=useState(0);

useEffect(()=>{
  let id=setInterval(()=>{
    seTtime((time)=>time+1);
  },1000)   
  return ()=>{clearInterval(id)};
})


  return (
    <>
    <div>
      <h1>{time}</h1>
    </div>
    </>
  )
}
     
export default App
