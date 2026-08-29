import React, { useState } from 'react'

const App = () => {
  function submit(e){
    console.log("Form is Subbimited by ",num);
    e.preventDefault();
SetNum("");
  }
  const [num,SetNum]=useState("")
  return (
    <div>
      <form onSubmit={(e)=>{
        submit(e);
      }}>
   <input type="text" placeholder='Enter Something Here' value={num} onChange={(e)=>{
    SetNum(e.target.value)
   }} />
   <button>Submit</button>
</form>
    </div>
  )
}

export default App
