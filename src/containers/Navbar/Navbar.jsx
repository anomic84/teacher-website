import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className=" -full py-3 lg:py-7">
      {/* // MONITORS */}
      <div className="hidden lg:flex flex-row justify-center items-center">
        <div className="flex">
          <div className="flex flex-1 items-center justify-end">

            <p className='lg:px-2 xl:px-3 whitespace-nowrap text-md text-orchid'><a href="#reading">READING</a></p>
            <p className='lg:px-2 xl:px-3 whitespace-nowrap text-md text-orchid'><a href="#writing">WRITING</a></p>
            <p className='lg:px-2 xl:px-3 whitespace-nowrap text-md text-orchid'><a href="#writing">SOCIAL STUDIES</a></p>
          </div>
          <div className='flex flex-1 justify-center px-5'>
            <p className='lg:px-2 text-[40px] xl:px-3 whitespace-nowrap  font-climate text-orchid'><a href="#home">ROBIN CARLSON</a></p>
          </div>
          <div className="flex flex-1 items-center justify-start">
            <p className='lg:px-2  xl:px-3 whitespace-nowrap text-md text-orchid'><a href="#about">ABOUT</a></p>
            <p className='lg:px-2  xl:px-3 whitespace-nowrap text-md text-orchid'><a href="#math">MATH</a></p>
            <p className='lg:px-2  xl:px-3 whitespace-nowrap text-md text-orchid'><a href="#science">SCIENCE</a></p>
            <p className='lg:px-2  xl:px-3 whitespace-nowrap text-md text-orchid'><a href="#contact">CONTACT</a></p>
          </div>
        </div>
      </div>
      {/* // TABLET */}
      <div className="hidden sm:flex lg:hidden flex-col items-center">
        <div>
          <p className='p-3 text-[50px] text-orchid font-climate'><a href="#home">ROBIN CARLSON</a></p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-between">
            <p className='px-3 text-sm text-orchid'><a href="#about">ABOUT</a></p>
            <p className='px-3 text-sm text-orchid'><a href="#reading">READING</a></p>
            <p className='px-3 text-sm text-orchid'><a href="#writing">WRITING</a></p>
            <p className='px-3 text-sm text-orchid'><a href="#writing">SOCIAL STUDIES</a></p>
          </div>
          <div className="flex justify-between">
            <p className='px-3 text-sm text-orchid'><a href="#math">MATH</a></p>
            <p className='px-3 text-sm text-orchid'><a href="#science">SCIENCE</a></p>
            <p className='px-3 text-sm text-orchid'><a href="#contact">CONTACT</a></p>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div className="sm:hidden flex flex-row items-center justify-between px-5">
        <div>
          <p className='text-[25px]  font-climate tracking-widest text-orchid'><a href="#home">ROBIN CARLSON</a></p>
        </div>
        <div className="pl-4  ">
          {toggleMenu
            ? <FaTimes className="text-orchid" size={27} onClick={() => setToggleMenu(false)} />
            : <FaBars className="text-orchid" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <div className="p-[3rem]">
              <div className="text-orchid dark:text-white sm:text-xl text-center">
                <p className='px-3 text-sm text-orchid'><a href="#about">ABOUT</a></p>
                <p className='px-3 text-sm text-orchid'><a href="#reading">READING</a></p>
                <p className='px-3 text-sm text-orchid'><a href="#writing">WRITING</a></p>
                <p className='px-3 text-sm text-orchid'><a href="#writing">SOCIAL STUDIES</a></p>
                <p className='px-3 text-sm text-orchid'><a href="#math">MATH</a></p>
                <p className='px-3 text-sm text-orchid'><a href="#science">SCIENCE</a></p>
                <p className='px-3 text-sm text-orchid'><a href="#contact">CONTACT</a></p>


              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar