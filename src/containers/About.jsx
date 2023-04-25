import React from 'react'
import BoxTop from '../components/BoxTop'
import BoxTopLeft from '../components/BoxTopLeft'

const About = () => {
  return (
    <section className='min-h-screen bg-slate-100 relative'>
        <h2 className='text-center font-bold text-4xl p-10 capitalize'>About us</h2>
        <h3 className='text-center semi-bold text-3xl text-black p-6'>We will help you learn coding</h3>
        <div className='w-full relative h-[30rem] rounded-xl'>
        <img src="https://www.shutterstock.com/shutterstock/videos/1099458635/thumb/1.jpg?ip=x480" className='w-3/4 mx-auto block rounded h-full object-cover' alt="" />
        </div>
        <BoxTop/>
        <BoxTopLeft/>
    </section>
  )
}

export default About