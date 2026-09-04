import React, { useState } from 'react'

const App = () => {
  function submit(e){
    e.preventDefault();
    SetNummm([...num3,num+""+num2]);

              SetNum("");
                        SetNumm("");

  }
 
  const [num,SetNum]=useState("");
    const [num2,SetNumm]=useState("");
  const [num3,SetNummm]=useState([]);

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
        <button> Submit </button>
      </form>
      {/* /* /* /* {num3 && <div className='h-20 w-20 bg-black text-white'> */}
        {/* // {num3}</div>}                  //  V  V  I  M  P  */}
        {num3.map((data,index)=>{
          return(
<div key={index} className='w-20 h-20 bg-black text-white'>{data}</div>

        );
        })}
    </div>
  )
}

export default App
