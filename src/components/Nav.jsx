import React from 'react'

const Nav = () => {
  return (
    <div className='sticky top-[-54px] z-[100]' >
        <div id='top' className='flex flex-col items-center bg-black' >
            <h1 src='./company-logo-large.webp'
                className='px-4 py-2 text-3xl bg-black text-white h-[52px]' >
                Fake Electric
            </h1>
        </div>
        <div className='bg-main z-10 flex h-12 text-xl' >
            <a href='#top'>
                <img 
                    src='./imgs/bolt.svg' 
                    height='50px'
                    width='50px' 
                    className='h-10 w-10 mt-1 ml-3' 
                    alt='company-logo'
                />
            </a>
            <div className='w-full flex items-center text-lg justify-end
                                gap-[5vw] pr-[6vw]'>
                <a href='#services'>
                    What We Do
                </a>
                <a href='#about-us'>
                    About Us
                </a>
            </div>
        </div>
    </div>
  )
}

export default Nav