import React from 'react'
import {ImEarth, ImMobile} from "react-icons/im"
import {SiAdobeindesign} from "react-icons/si"
import {GiTeacher} from "react-icons/gi"
import {MdSell, MdAnalytics} from "react-icons/md"
const Services2 = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
        
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            
            <span className="relative">Services</span>
          </span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Our services are quality
        </p>
      </div>
      <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
        <div className="max-w-md mx-auto text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
            <ImEarth size={30} className='block mx-auto w-24'/>
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">Web Development</h6>
          <p className="mb-3 text-sm text-gray-900">
          we offer comprehensive web development services to help businesses establish a strong online presence and achieve their digital goals. Our team of skilled web developers utilizes the latest web technologies, frameworks, and best practices to create web solutions that are visually appealing, user-friendly, and optimized for performance
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="max-w-md mx-auto text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
            <ImMobile size={30} className='block mx-auto w-24'/>
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">Mobile Development</h6>
          <p className="mb-3 text-sm text-gray-900">
          From iOS to Android, we have the expertise to build mobile apps that deliver seamless experiences, engage users, and drive results. Whether you need a native app, a cross-platform solution, or a mobile-optimized web app, we have the skills and creativity to bring your vision to life. Our team of experienced mobile developers harness the latest technologies and industry best practices to create mobile applications that are fast, user-friendly, and visually captivating.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="max-w-md mx-auto text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
            <SiAdobeindesign size={30} className='block mx-auto w-24'/>
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">Graphic Design</h6>
          <p className="mb-3 text-sm text-gray-900">
          Our team of talented graphic designers combines artistic flair with strategic thinking to craft designs that leave a lasting impression. Whether it's creating eye-catching logos, designing engaging social media graphics, crafting compelling marketing materials, or developing captivating UI/UX designs, we strive for perfection in every pixel. With our innovative and forward-thinking approach, we transform your ideas into compelling visual experiences.    
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="max-w-md mx-auto text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
            <GiTeacher size={30} className='block mx-auto w-24'/>
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">Training</h6>
          <p className="mb-3 text-sm text-gray-900">
          At Nolojia, we believe in empowering individuals with the skills and knowledge they need to succeed in the ever-evolving world of technology. Our comprehensive training programs are designed to equip you with the tools and expertise you need to thrive in the digital age. Whether you want to learn software engineering, master graphic design, or gain a deep understanding of data analytics, our experienced instructors will guide you every step of the way. Join Us Today!
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="max-w-md mx-auto text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
            <MdSell size={30} className='block mx-auto w-24'/>
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">Digital Marketing</h6>
          <p className="mb-3 text-sm text-gray-900">
          Are you ready to take your online presence to the next level? Our tech company offers cutting-edge digital marketing solutions that drive results. From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media management and content marketing, our team of experienced digital marketers knows how to make your brand stand out in the crowded digital landscape.     
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="max-w-md mx-auto text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
            <MdAnalytics size={30} className='block mx-auto w-24'/>
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">Data Analytics</h6>
          <p className="mb-3 text-sm text-gray-900">
          Data analytics is more than just crunching numbers. It's about turning data into insights and using those insights to make informed decisions that drive your business forward. Our team of experts uses cutting-edge tools and techniques to help you harness the power of your data, identify patterns and trends, and make data-driven decisions that can have a real impact on your bottom line.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  )
}

export default Services2