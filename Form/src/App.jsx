import React, { useState } from 'react'

const App = () => {
  function submit(e){
    e.preventDefault();
    SetNummm(num+""+num2);

              SetNum("");
                        SetNumm("");

  }
  const [num,SetNum]=useState("");
    const [num2,SetNumm]=useState("");
  const [num3,SetNummm]=useState("");

  return (
    <div >
      <form onSubmit={(e)=>{
submit(e);
      }}>
        <input type="text" placeholder='Enter Your Data' value={num} onChange={(e)=>{
          SetNum(e.target.value);
        }}/>
        <textarea type="text" placeholder='FeedBack Area' value={num2} onChange={(e)=>{
          SetNumm(e.target.value);
        }} ></textarea>
        <button>Submit</button>
      </form>
      <div className='h-20 w-20 bg-black text-white'><p className='w-20'>{num3}</p></div>
    </div>
  )
}

export default App
