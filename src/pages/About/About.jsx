import React, { useState } from 'react'
import Mom from '../../assets/HappyMom.jpeg'
import ContactModal from '../../containers/ContactModal/ContactModal';

const About = () => {

  const [contactModal, setContactModal] = useState(false);
  // const toggleContactModal = () => {
  //   setContactModal(!contactModal);
  // };

  return (
    <section className='flex flex-col w-screen mx-auto gradient2 border-t-4 border-iris
    sm:border-t-2
    md:flex-row md:py-5 md:border-b-2' id='about'>
      <img src={Mom} alt="Robin Carlson"
        className=' mx-auto drop-shadow-md border-b-4 border-iris 
      sm:w-[70%] sm:rounded-3xl sm:flex-1 sm:my-5 sm:border-b-0
      md:w-[50%] md:mx-4 '/>
      <div className='flex flex-col py-5 '>
        <p className='p-4 text-orchid font-ubuntu text-center drop-shadow-md mx-auto
      sm:text-xl sm:flex-1 sm:w-[70%]
      md:w-full'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptas nam blanditiis sapiente quisquam vel, magni maiores quidem soluta expedita aliquid doloribus voluptatum animi!
        </p>

        {/* ---------- MEDIUM ---------- */}
        <p className='hidden md:flex text-3xl text-iris font-manrope px-4'>Monroe, WA</p>
      </div>
      <div className='z-10 flex md:hidden pb-3'>
        <ContactModal

          setModal={setContactModal}
          modal={contactModal}
        />
      </div>
    </section>
  )
}

export default About