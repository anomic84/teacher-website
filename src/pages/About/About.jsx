import React, { useState } from 'react'
import Mom from '../../assets/HappyMom.jpeg'
import ContactModal from '../../containers/ContactModal/ContactModal';

const About = () => {

  const [contactModal, setContactModal] = useState(false);
  // const toggleContactModal = () => {
  //   setContactModal(!contactModal);
  // };

  return (
    <section className='flex flex-col  w-screen mx-auto
    md:flex-row' id='about'>
      <img src={Mom} alt="Robin Carlson"
        className=' mx-auto drop-shadow-md 
      sm:w-[70%] sm:rounded-3xl sm:flex-1
      md:w-[50%] md:px-4'/>
      <div>
        <p className='p-4 text-orchid font-ubuntu text-center drop-shadow-md mx-auto
      sm:text-xl sm:flex-1 sm:w-[70%]
      md:w-full'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptas nam blanditiis sapiente quisquam vel, magni maiores quidem soluta expedita aliquid doloribus voluptatum animi!
        </p>

        {/* ---------- MEDIUM ---------- */}
        <p className='hidden md:flex text-3xl text-iris font-manrope'>Monroe, WA</p>
      </div>
      <div className='z-10 flex sm:hidden'>
        <ContactModal

          setModal={setContactModal}
          modal={contactModal}
        />
      </div>
    </section>
  )
}

export default About