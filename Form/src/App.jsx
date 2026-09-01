import React, { useState } from 'react'

const App = () => {
  function submit(e){
    e.preventDefault();
    SetPrint(num);
    SetNum("");
          SetTnum("");


  }
  const [num,SetNum]=useState("");
  const [tnum,SetTnum]=useState("");
  const [print,SetPrint]=useState("");
  return (
    <div className='flex flex-col'>
      <form action="" onSubmit={(e)=>{    
        submit(e);
       className="flex flex-col"

        }}>
<input type="text" placeholder='Enter Your Name' value={num} onChange={(e)=>{
SetNum(e.target.value);
}}></input>

        <textarea type="text" placeholder='Give you feedback' value={tnum} onChange={(e)=>{
          SetTnum(e.target.value);
        }}></textarea>
        <button>Submit</button>
      </form>
      <div className="h-20 w-20 bg-black text-white">{print}</div>
    </div>
  )
}

export default App
