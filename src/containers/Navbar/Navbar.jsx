import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className=' w-full lg:py-7 appgradient'>
        {/* // MONITORS */}
        <div className='hidden lg:flex flex-row justify-center items-center'>
          <div className='flex'>
            <div className='flex flex-1 items-center justify-end'>

              <p className='lg:px-2 xl:px-3 whitespace-nowrap text-md text-iris drop-shadow-lg'><Link to='/reading'>READING</Link></p>
              <p className='lg:px-2 xl:px-3 whitespace-nowrap text-md text-iris drop-shadow-lg'><Link to='/writing'>WRITING</Link></p>
              <p className='lg:px-2 xl:px-3 whitespace-nowrap text-md text-iris drop-shadow-lg'><Link to='/socialstudies'>SOCIAL STUDIES</Link></p>
            </div>
            <div className='flex flex-1 justify-center px-5'>
              <p className='lg:px-2 text-[40px] xl:px-3 whitespace-nowrap  font-climate text-iris drop-shadow-lg'><Link to='/home'>ROBIN CARLSON</Link></p>
            </div>
            <div className='flex flex-1 items-center justify-start'>
              <p className='lg:px-2  xl:px-3 whitespace-nowrap text-md text-iris drop-shadow-lg'><Link to='/about'>ABOUT</Link></p>
              <p className='lg:px-2  xl:px-3 whitespace-nowrap text-md text-iris drop-shadow-lg'><Link to='/math'>MATH</Link></p>
              <p className='lg:px-2  xl:px-3 whitespace-nowrap text-md text-iris drop-shadow-lg'><Link to='/science'>SCIENCE</Link></p>
              {/* <p className='lg:px-2  xl:px-3 whitespace-nowrap text-md text-iris drop-shadow-lg'><Link to='/contact'>CONTACT</Link></p> */}
            </div>
          </div>
        </div>
        {/* // TABLET */}
        <div className='hidden sm:flex lg:hidden flex-col items-center appgradient py-3'>
          <div>
            <p className='p-3 text-[50px] text-iris font-climate drop-shadow-lg'><Link to='/home'>ROBIN CARLSON</Link></p>
          </div>
          <div className='flex justify-between items-center font-manrope'>
            <div className='flex justify-between'>
              <p className='px-3 text-sm text-iris drop-shadow-lg'><Link to='/about'>ABOUT</Link></p>
              <p className='px-3 text-sm text-iris drop-shadow-lg'><Link to='/reading'>READING</Link></p>
              <p className='px-3 text-sm text-iris drop-shadow-lg'><Link to='/writing'>WRITING</Link></p>
              <p className='px-3 text-sm text-iris drop-shadow-lg'><Link to='/socialstudies'>SOCIAL STUDIES</Link></p>
            </div>
            <div className='flex justify-between font-manrope'>
              <p className='px-3 text-sm text-iris drop-shadow-lg'><Link to='/math'>MATH</Link></p>
              <p className='px-3 text-sm text-iris drop-shadow-lg'><Link to='/science'>SCIENCE</Link></p>
              {/* <p className='px-3 text-sm text-iris drop-shadow-lg'><Link to='/contact'>CONTACT</Link></p> */}
            </div>
          </div>
        </div>
        {/* MOBILE */}
        <div className='w-full appgradient'>
          {/* 1 */}
          <div className='sm:hidden flex flex-row items-center justify-between px-5 py-3'>
            {toggleMenu ? (
              <p className='hidden'></p>
            ) : (
              <p className='text-[25px] font-climate tracking-widest text-iris drop-shadow-xl'><Link to='/'>ROBIN CARLSON</Link></p>
            )}

            {toggleMenu ? (
              <p className='hidden'></p>
            ) : (<FaBars
              className="text-iris"
              size={27}
              onClick={() => setToggleMenu((prev) => !prev)}
            />
            )}
            {/* 2 */}
            {toggleMenu && (
              <div className="flex flex-col w-full mx-auto">

                <FaTimes className='text-iris'
                  size={27}
                  onClick={() => setToggleMenu(false)} />
                <div className='z-10 h-screen flex justify-center items-center scroll'>
                  <div className="text-iris my-auto sm:text-xl text-center w-full flex flex-col justify-center">

                    <Link to='/about' className='py-5 text-xl' onClick={() => setToggleMenu((prev) => !prev)}>ABOUT</Link>
                    <Link to='/reading' className='py-5 text-xl' onClick={() => setToggleMenu((prev) => !prev)}>READING</Link>
                    <Link to='/writing' className='py-5 text-xl' onClick={() => setToggleMenu((prev) => !prev)}>WRITING</Link>
                    <Link to='/socialsstudies' className='py-5 text-xl' onClick={() => setToggleMenu((prev) => !prev)}>SOCIAL STUDIES</Link>
                    <Link to='/math' className='py-5 text-xl' onClick={() => setToggleMenu((prev) => !prev)}>MATH</Link>
                    <Link to='/science' className='py-5 text-xl' onClick={() => setToggleMenu((prev) => !prev)}>SCIENCE</Link>
                    <Link to='/contact' className='py-5 text-xl' onClick={() => setToggleMenu((prev) => !prev)}>CONTACT</Link>


                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar