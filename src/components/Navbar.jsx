import React, { useState, useRef } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className='fixed w-screen flex justify-between items-center sm:px-8 lg:px-10 xl:px-40 bg-white shadow'>
            <div className='w-80' style={{ minWidth: '200px' }}>
                <img src="/src/assets/logo.png" alt="Logo" />
            </div>
            <div className='flex gap-10 items-center'>
                <ul className={`${isMenuOpen ? 'block top-[5.45rem] left-0 w-screen bg-white shadow-md' : 'hidden'} absolute sm:static lg:flex gap-10`}>
                    <li><a href="/" className='py-5 text-xl sm:text-lg text-mainColor hover:text-black transition-colors font-medium flex justify-center items-center'>Home</a></li>
                    <li><a href="#about" className='py-5 text-xl sm:text-lg text-mainColor hover:text-black transition-colors font-medium flex justify-center items-center'>About</a></li>
                    <li><a href="#pricing" className='py-5 text-xl sm:text-lg text-mainColor hover:text-black transition-colors font-medium flex justify-center items-center'>Pricing</a></li>
                    <li><a href="#contact" className='py-5 text-xl sm:text-lg text-mainColor hover:text-black transition-colors font-medium flex justify-center items-center'>Contact</a></li>
                </ul>
                <a className='hidden sm:block bg-secondaryColor text-white text-lg hover:bg-white hover:text-secondaryColor hover:outline transition-colors font-bold py-3 px-5 rounded whitespace-nowrap' href='https://chrome.google.com/webstore/category/extensions' target="_blank">Install Now</a>
                <div className='sm:hidden mr-5 cursor-pointer' onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>

            </div>
        </nav>
    )
}

export default Navbar