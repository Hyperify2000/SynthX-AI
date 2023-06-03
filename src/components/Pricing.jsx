import React from 'react'

const Pricing = () => {
  return (
    <div className='flex flex-col items-center gap-20 py-20 lg:py-24 xl:py-24' id='pricing'>
      <h2 className='text-5xl font-bold text-gray-800'>Plans</h2>
      <div className='flex flex-wrap gap-10 justify-center px-20'>
        <div className='bg-gray-100 shadow-md flex flex-col items-center p-10 rounded' style={{ minWidth: '400px' }}>
          <h3 className='text-4xl font-medium'>Basic</h3>
          <h2 className='text-5xl my-10 font-bold'>Free</h2>
          <ul className='list-image-[url(/src/assets/check.svg)] text-lg font-medium px-5 mb-10' >
            <li>5 Emails Generations A Day</li>
            <li>Sentence Completion Suggestions</li>
            <li>Email Templates</li>
            <li className='list-image-[url(/src/assets/x-mark.svg)]'>Email Enhancer</li>
            <li className='list-image-[url(/src/assets/x-mark.svg)]'>Email Scheduler</li>
            <li className='list-image-[url(/src/assets/x-mark.svg)]'>A/B Testing</li>
          </ul>
          <a className='bg-secondaryColor text-white text-lg hover:bg-white hover:text-secondaryColor hover:outline transition-colors font-bold py-3 px-5 whitespace-nowrap w-[100%] text-center' href='/' target="_blank">Let's Go!</a>
        </div>
        <div className='bg-gray-100 shadow-md flex flex-col items-center p-10 rounded' style={{ minWidth: '400px' }}>
          <h3 className='text-4xl font-medium'>Pro</h3>
          <h2 className='text-5xl my-10 font-bold'>$9.99</h2>
          <ul className='list-image-[url(/src/assets/check.svg)] text-lg font-medium px-5 mb-10' >
            <li>5 Emails Generations A Day</li>
            <li>Sentence Completion Suggestions</li>
            <li>Email Templates</li>
            <li className='list-image-[url(/src/assets/x-mark.svg)]'>Email Enhancer</li>
            <li className='list-image-[url(/src/assets/x-mark.svg)]'>Email Scheduler</li>
            <li className='list-image-[url(/src/assets/x-mark.svg)]'>A/B Testing</li>
          </ul>
          <a className='bg-secondaryColor text-white text-lg hover:bg-white hover:text-secondaryColor hover:outline transition-colors font-bold py-3 px-5 whitespace-nowrap w-[100%] text-center' href='/' target="_blank">Let's Go!</a>
        </div>
        <div className='bg-gray-100 shadow-md flex flex-col items-center p-10 rounded' style={{ minWidth: '400px' }}>
          <h3 className='text-4xl font-medium'>Premium</h3>
          <h2 className='text-5xl my-10 font-bold'>$24.99</h2>
          <ul className='list-image-[url(/src/assets/check.svg)] text-lg font-medium px-5 mb-10' >
            <li>5 Emails Generations A Day</li>
            <li>Sentence Completion Suggestions</li>
            <li>Email Templates</li>
            <li className='list-image-[url(/src/assets/x-mark.svg)]'>Email Enhancer</li>
            <li className='list-image-[url(/src/assets/x-mark.svg)]'>Email Scheduler</li>
            <li className='list-image-[url(/src/assets/x-mark.svg)]'>A/B Testing</li>
          </ul>
          <a className='bg-secondaryColor text-white text-lg hover:bg-white hover:text-secondaryColor hover:outline transition-colors font-bold py-3 px-5 whitespace-nowrap w-[100%] text-center' href='/' target="_blank">Let's Go!</a>
        </div>
      </div>
    </div>
  )
}

export default Pricing