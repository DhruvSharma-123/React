import React from 'react'

const App = () => {
function Submit(e){
e.preventDefault();
}
  return (
    <div className='bg-black h-screen '>
      <form onSubmit={(e)=>{Submit(e);}}  className='flex flex-col gap-5 ml-5 '>
        <input type="text" placeholder='Enter Something Here'  className='bg-white w-1/4 p-3 mt-10'/>
        <textarea name="Feed Back" placeholder='Enter you feed back' className='bg-white w-1/4 p-3'></textarea>
        <button className='bg-white w-1/4'>Submit your form</button>/ 
      </form>
    </div>
  )
}

export default App
