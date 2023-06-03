import React, { useState, useEffect } from 'react'

const UpArrow = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        document.addEventListener('scroll', onScroll);

        return () => {
            document.removeEventListener('scroll', onScroll);
        }
    }, []);

    return (
        <div className={`${isVisible ? 'opacity-100' : 'opacity-0'} transition-all`}>
            <a href="#" className='fixed bottom-10 right-10 text-white bg-secondaryColor hover:bg-white hover:text-secondaryColor hover:outline rounded p-3 cursor-pointer transition-all'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                </svg>
            </a>
        </div>
    )
}

export default UpArrow