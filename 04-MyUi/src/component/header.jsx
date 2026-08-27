import React from 'react'
const Header = () => {
  return (
    <div className='flex justify-around h-20 pt-9 `bg-gradient-to-b` from-gray-100 to-white rounded-t-[30px] shadow-lg shadow-gray-300'>  
    <div className='flex justify-around w-2xl'>
<div><button className='bg-blue-900 rounded-full text-1xl font-semibold text-white w-12 h-12 -translate-y-2.5'>5U</button></div>
<div><button className="
  transition-all duration-150
  ease-[cubic-bezier(0.2,0.8,0.2,1)]
  hover:scale-[1.05]
  hover:brightness-110
  hover:-translate-y-0.5
  active:scale-95
  font-semibold
  text-2xl
  
">About</button></div>
<div><button className=' transition-all duration-150
  ease-[cubic-bezier(0.2,0.8,0.2,1)]
  hover:scale-[1.05]
  hover:brightness-110
  hover:-translate-y-0.5
  active:scale-95
  font-semibold
  text-2xl'>PRODUCT</button></div>
<div><button className=' transition-all duration-150
  ease-[cubic-bezier(0.2,0.8,0.2,1)]
  hover:scale-[1.05]
  hover:brightness-110
  hover:-translate-y-0.5
  active:scale-95
  font-semibold
  text-2xl'>USE</button></div>
<div><button className=' transition-all duration-150
  ease-[cubic-bezier(0.2,0.8,0.2,1)]
  hover:scale-[1.05]
  hover:brightness-110
  hover:-translate-y-0.5
  active:scale-95
  font-semibold
  text-2xl'>BLOG</button></div>
</div>
<div className='font-semibold text-shadow-md'>
  5 AI Published &nbsp; ›
</div>
<div className=' transition-all duration-200
  ease-out
  hover:scale-[1.03]
  .hover:-translate-y-[1px]
  
  active:scale-[0.98]'><button className='-translate-x-65 font-bold bg-gray-200 w-36 h-10 rounded-full -translate-y-1.5 text-sm '  >BOOK A DEMO</button></div>


    </div>
  )
}

export default Header;  
