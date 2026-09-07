import React, { use, useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  async function getdata(){
    console.log("DATA AA GYA ")
    const respond=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
   SetUserdata(respond.data);
   console.log(respond.data);
  }
const [index,SetIndex]=useState(1);
const [userdata,SetUserdata]=useState([]);
  let prisntUserdata=<h3 className='text-gray-400'>No data looking</h3>

if(userdata.length>0){
  prisntUserdata=userdata.map(function(elem,idx){
return <div>
  <a href={elem.url} target='_blank'>
 <div className='h-40 w-44 '>
  <img src={elem.download_url} alt="data" className='h-full object-cover ' />
</div>
<h2 className='font-bold text-lg'>{elem.author}</h2>
</a>
</div>

  })
}

  useEffect(()=>{
      getdata();
  },[index])
  return (
    <div className='bg-black h-screen text-white p-4 overflow-auto ' >
<div className='bg-black text-white flex flex-wrap gap-2'>{prisntUserdata}</div>
<div className='flex justify-center gap-6 items-center p-4'>
  <button className='bg-amber-400 text-sm text-black rounded px-4 py-2 cursor-pointer active:scale-95' onClick={()=>{if(index>0){SetIndex(index-1)}}}>Prev</button>
  <button className='bg-amber-400 text-sm text-black rounded px-4 py-2 cursor-pointer active:scale-95' onClick={()=>{SetIndex(index+1)}}>Next</button>
</div>
    </div>
  )
}

export default App
App