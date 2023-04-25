import React from 'react'

import {AiOutlineRight} from "react-icons/ai"
const CardServices = ({title, content, icon}) => {
  return (
    <div className='rounded-xl border-2 border-solid border-slate-100 shadow-lg p-6'>
        {icon}
        <h3 className='font-bold py-4'>{title}</h3>
        <p>{content} </p>
        <button className='inline mt-4 w-32 mx-auto bg-blue-900 text-slate-100 py-2 rounded px-3'>More <AiOutlineRight className='inline'/></button>
    </div>
  )
}

export default CardServices