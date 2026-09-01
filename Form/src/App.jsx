import React, { useState } from 'react'

const App = () => {
  function submit(e){
    e.preventDefault();
    SetNum("");
          SetTnum("");


  }
  const [num,SetNum]=useState("");
  const [tnum,SetTnum]=useState("");
  return (
    <div className='bg-black'>
      <form action="" onSubmit={(e)=>{    
        submit(e);
       

        }}>
<input type="text" placeholder='Enter Your Name' value={num} onChange={(e)=>{
SetNum(e.target.value);
}}></input>

        <textarea type="text" placeholder='Give you feedback' value={tnum} onChange={(e)=>{
          SetTnum(e.target.value);
        }}></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
