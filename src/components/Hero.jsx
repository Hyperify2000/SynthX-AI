import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center gap-36 lg:gap-20 px-12 py-20 lg:px-20 lg:py-24 xl:px-44 xl:py-24'>
      <div className='text-center lg:text-start' style={{ maxWidth: '625px' }}>
        <h2 className='text-5xl font-bold text-gray-800 leading-snug'>Write Faster, Efficiently</h2>
        <h3 className='text-5xl font-bold text-gray-800'>And Confidently</h3>
        <p className='text-2xl my-6 mb-16'>Stop wasting your time writing emails with SynthX AI. Boost your email marketing skills with AI.</p>
        <a className='bg-secondaryColor text-white text-xl hover:bg-white hover:text-secondaryColor hover:outline transition-colors font-bold py-3 px-5 rounded' href='https://chrome.google.com/webstore/category/extensions' target="_blank">Install Extension</a>
      </div>

      <div className='' style={{ maxWidth: '500px' }}>
        <img src="/src/assets/img-1.svg" />
      </div>
    </div>
  )
}

export default Hero