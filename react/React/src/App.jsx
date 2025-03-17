import React, { useState } from 'react'
import './App.css'
// import Counter from './Components/Counter'

function App() {
  const [count, setCount] = useState(0);



function Increase(){
  setCount(count+1)
}


const [bgColor, setBgColor] = useState("#ffffff"); 

function generateRandomColor() {
  let bgColor=["red","pink","brown","black","yellow","green","silver" ,"purple","magenta","blue"];
  let index=Math.floor(Math.random()*bgColor.length);
  setBgColor(bgColor[index]);

}
const [value,setValue]=useState(0);
function changevalue(){
  let index=Math.floor(Math.random()*10);
  setValue(index);
}



  return (
    <>
      {/* <Counter/> */}

     
        <div Style={{height:"50vh",width:"20vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundColor:"pink"}}>
          <h1>{value}</h1>
          {/* {value===7?<img src="https://tse3.mm.bing.net/th?id=OIP.7pAr9s31kcPT0ix_tru_GQHaHa&pid=Api&P=0&h=180"></img>:<img src='https://tse4.mm.bing.net/th?id=OIP.K2trbkXTI2GgQD4y1bR4_AHaHP&pid=Api&P=0&h=180'></img>} */}
        {/* {value==7 && <h1>you win</h1>} */}
        {value==7 || <h1>you lose</h1>}
        <button  onClick={changevalue}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", border: "none", borderRadius: "5px", backgroundColor: "#000", color: "#fff" }}
      >
        Click
      </button>
     

        </div>
      

      <div style={{ backgroundColor: bgColor, height: "50vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
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
