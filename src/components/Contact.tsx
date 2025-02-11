import React from 'react'
import Image from 'next/image';
import phone from '../assets/phone.png'; 
import mail from '../assets/mail.png'; 

const Contact = () => {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-16' id='contact'>
      <div className='max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8'>

        {/* Contact Info */}
        <div className='flex justify-center items-center'>
          <ul className='space-y-4'>
            <li className='flex items-center'>
              <Image src={phone} alt='phone' className='h-[60px] w-auto mr-4' />
              <p className='text-xl'>+91-9140432267</p>
            </li>
            <li className='flex items-center'>
              <Image src={mail} alt='mail' className='h-[60px] w-auto mr-4' />
              <p className='text-xl'>rajveersinghvns2021@gmail.com</p>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className='bg-white/10 p-6 rounded-xl max-w-[550px]'>
          <h2 className='text-5xl font-bold text-orange-400 mb-4'>Lets Connect</h2>
          <p className='text-white/70 mb-6'>Send me a message and lets schedule a call.</p>
          
          <form className='space-y-4' action='https://getform.io/f/bxowjgda' method='POST'>
            <div className='grid md:grid-cols-2 gap-4'>
              <input type='text' name='firstName' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='First Name' />
              <input type='text' name='lastName' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Last Name' />
              <input type='email' name='email' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Email' />
              <input type='tel' name='phone' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Phone' />
            </div>
            <textarea name='message' className='bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Your Message'></textarea>
            <button type='submit' className='bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl'>Send Message</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact
