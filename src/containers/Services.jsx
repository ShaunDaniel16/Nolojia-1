import React from 'react'
import CardServices from '../components/CardServices'
import {GiEarthAmerica} from "react-icons/gi"
const Services = () => {
  return (
    <section id='services' className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <h1 className='py-10 text-center text-5xl font-bold'>Services</h1>
        <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
            <CardServices title="Web Development" icon={<GiEarthAmerica size={30} className='mx-auto block w-32'/>} content="we offer comprehensive web development services to help businesses establish a strong online presence and achieve their digital goals. Our team of skilled web developers utilizes the latest web technologies, frameworks, and best practices to create web solutions that are visually appealing, user-friendly, and optimized for performance"/>
            <CardServices title="Web Development" icon={<GiEarthAmerica size={30} className='mx-auto block w-32'/>} content="we offer comprehensive web development services to help businesses establish a strong online presence and achieve their digital goals. Our team of skilled web developers utilizes the latest web technologies, frameworks, and best practices to create web solutions that are visually appealing, user-friendly, and optimized for performance"/>
            <CardServices title="Web Development" icon={<GiEarthAmerica size={30} className='mx-auto block w-32'/>} content="we offer comprehensive web development services to help businesses establish a strong online presence and achieve their digital goals. Our team of skilled web developers utilizes the latest web technologies, frameworks, and best practices to create web solutions that are visually appealing, user-friendly, and optimized for performance"/>
        </div>
    </section>
  )
}

export default Services