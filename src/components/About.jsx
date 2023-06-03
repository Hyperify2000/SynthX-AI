import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-20 px-12 py-20 lg:px-20 lg:py-24 xl:px-44 xl:py-24 bg-gray-100' id='about'>
      <div style={{ maxWidth: '600px' }}>
        <img src="/src/assets/img-2.svg" />
      </div>
      <div className='flex flex-col items-center text-center lg:text-start lg:items-start' style={{ maxWidth: '625px' }}>
        <h2 className='text-5xl font-bold text-gray-800 leading-snug'>Boost Your Creativity</h2>
        <h3 className='text-5xl font-bold text-gray-800'>And Productivity</h3>
        <p className='text-2xl my-10'>We created SynthX AI to help you achieve your dreams as an email marketer, even if you have NO EXPERIENCE!</p>
        <ul className='text-start list-image-[url(/src/assets/check.svg)] text-lg mb-10 ml-10'>
          <li>Free And Easy To Use</li>
          <li>5x Your Writing Speed</li>
          <li>No Experience Required</li>
          <li>Sound More Professional</li>
          <li>No More Grammar Mistakes</li>
        </ul>
        <a className='bg-secondaryColor text-white text-xl hover:bg-white hover:text-secondaryColor hover:outline transition-colors font-bold py-3 px-5 rounded' href='https://chrome.google.com/webstore/category/extensions' target="_blank">Get It Now!</a>
      </div>
    </div>
  )
}

export default About