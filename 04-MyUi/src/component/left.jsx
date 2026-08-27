import React from 'react'

const Left = () => {
  return (
    <div className='w-1/2 h-screen flex flex-col justify-around px-15'>
        <button className='text-orange-400 bg-pink-50 w-44 rounded-lg h-9 font-bold text-xs relative  transition-all duration-200
  ease-out
  hover:scale-[1.04]
  .hover:-translate-y-[1px]
  hover:shadow-[0_6px_18px_rgba(0,0,0,0.2)]
  active:scale-95'>FROM INBOX TO INVOICE</button>
        <div className=' relative bottom-35'>
      <h1 className='text-5xl font-bold'>AI Workforce.</h1>
      <h1 className='text-5xl font-semibold mt-2' >Built for Freight Teams.</h1>
        <p className='font-semibold text-lg mt-5'>They read. write and act across TMS, email</p>
      <p className='font-semibold text-lg'>and chat so your ops staff don't have to</p>
      </div>
        
<div>
    <button className='bg-orange-600 text-white h-10 w-33 rounded-lg relative bottom-65 text-sm transition-all duration-150
  ease-[cubic-bezier(0.16,1,0.3,1)]
  hover:scale-[1.07]
  hover:-translate-y-1
  hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]
  active:scale-[0.94]'>CONTACT US</button>
</div>
<div className=' relative bottom-85 bg-white shadow-2xl h-40 flex flex-col justify-around  w-63 rounded-lg px-2 py-5'>
    <p className='font-semibold text-lg'>SALESBOT</p>
    <p  className='font-semibold text-xs'> Assists sales team with smart automation </p>
    <div>
    <button className='bg-blue-50 w-15 font-semibold text-sm gap-1 transition-all duration-150
  ease-[cubic-bezier(0.16,1,0.3,1)]
  hover:scale-[1.07]
  hover:-translate-y-1
  hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]
  active:scale-[0.94] '>LEADs</button><button className='bg-blue-50 font-semibold text-sm ml-2 transition-all duration-150
  ease-[cubic-bezier(0.16,1,0.3,1)]
  hover:scale-[1.07]
  hover:-translate-y-1
  hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]
  active:scale-[0.94]'>CRM</button><button className='bg-blue-50 w-25 font-semibold text-sm ml-2 transition-all duration-150
  ease-[cubic-bezier(0.16,1,0.3,1)]
  hover:scale-[1.07]
  hover:-translate-y-1
  hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]
  active:scale-[0.94]'>FOLLOW-UP</button>
</div>  
</div>
    </div>
  )
}

export default Left;    
