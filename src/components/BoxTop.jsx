import React from 'react'
import {AiOutlineRight} from "react-icons/ai"
const BoxTop = () => {
  return (
    <div className='rounded-2xl p-10 bg-white 2xl:absolute 2xl:w-[30rem] 2xl:top-[38rem] 2xl:right-80 w-4/5 block mt-10 mx-auto relative shadow-lg'>
        <div className='text-[#daa520] flex gap-2 justify-center font-bold items-center text-xl pb-4'><p>Our mission </p> <AiOutlineRight/></div>
        <p>A daily commitment to serve our clients through passion, knowledge, and excellence.</p>
        <p></p>
    </div>
  )
}

export default BoxTop