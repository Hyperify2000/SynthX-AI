import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center gap-20 px-12 py-20 lg:px-20 lg:py-24 xl:px-44 xl:py-24 bg-gray-100' id='contact'>
      <div className='lg:text-start flex-1'>
        <h2 className='text-center lg:text-start text-5xl font-bold text-gray-800'>Contact Us</h2>
        <form className='flex flex-col gap-7 my-10 items-start'>
          <div className='flex flex-col gap-1 w-[100%]'>
            <label className='text-lg font-medium' htmlFor='email'>Email</label>
            <input className='shadow-md px-3 py-2 transition-all rounded' type='email' id='email' placeholder='name@example.com' />
          </div>
          <div className='flex flex-col gap-1 w-[100%]'>
            <label className='text-lg font-medium' htmlFor='message'>Message</label>
            <textarea className='shadow-md px-3 py-2 transition-all rounded' id="message" cols="30" rows="10" placeholder='Enter Message' style={{ maxHeight: '200px' }}></textarea>
          </div>        
          <button className='bg-secondaryColor text-white text-xl hover:bg-white hover:text-secondaryColor hover:outline transition-colors font-bold py-3 px-5 rounded' type='button'>Send Message</button>
        </form>
      </div>

      <div className='flex-1' style={{ maxWidth: '500px' }}>
        <img src="/src/assets/img-3.svg" />
      </div>
    </div>
  )
}

export default Contact