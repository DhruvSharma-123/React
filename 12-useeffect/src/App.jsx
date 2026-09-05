import React, { useEffect, useState } from 'react'

const App = () => {
const [num,SEtNum]=useState(0);
const [num2,SetNum2]=useState(10);
useEffect(()=>{
  console.log("Use effect is running");
},[])

  return (
    <div>
    <h1>Value first is {num}</h1>
    <h1>Valur Second is {num2}</h1>
    <button onMouseEnter={()=>{SEtNum(num+1)}} onMouseLeave={()=>{SetNum2(num2+1)}}>Submit</button>
    </div>
  )
}

export default App
