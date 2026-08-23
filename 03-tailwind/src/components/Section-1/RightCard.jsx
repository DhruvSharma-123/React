import React from 'react'
import { ArrowRight } from "lucide-react";

const RightCard = (props) => {
  return (
    <div className="h-full w-80  rounded-4xl overflow-x-hidden shrink-0">
       <div className="relative top-0 left-0 w-full h-full">
   <img src={props.image}  className="h-full w-full object-cover" />

  <p className="relative bottom-46 text-white font-bold ml-3 leading-relaxed text-[17px] mb-10 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, explicabo fugit laudantium quidem tempora magni commodi officiis  quis et?</p>
  <button className="relative bottom-58 ml-3 bg-blue-700 rounded-full text-white w-30 h-9">Satisfied</button>
  <button className="relative bottom-56 left-28 ml-3 bg-blue-700 rounded-full text-white w-9 h-9 px-1.5"><ArrowRight /></button>
  </div>
    </div>
  )
}

export default RightCard
