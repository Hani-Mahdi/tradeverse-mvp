import React from 'react'
import NavBar from './NavBar'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
        <div className='h-120 sm:h-140 lg:h-195  h-110 w-screen bg-[url("../public/btc.webp")] bg-cover sm:rounded-bl-[75px] rounded-bl-[50px] sm:rounded-br-[75px] rounded-br-[50px] shadow-xl'>
            <div className='h-120 sm:h-140 lg:h-195  sm:rounded-bl-[75px] rounded-bl-[50px] sm:rounded-br-[75px] rounded-br-[50px] w-full absolute inset-0 bg-black/69'>
            {/* Overlay */}
            </div>
            <div className="h-full w-full relative z-10 flex flex-col items-between">
                <div className="w-full h-fit sm:h-1/6 ">
                <NavBar/>
                </div>
                <div className='w-full h-2/5 md:h-3/7 lg:h-1/2 flex flex-col mb-8 md:mb-0 justify-start items-start'>

                {/* Text */}
                <h1 className='text-6xl font-semibold sm:text-8xl lg:text-9xl text-white ml-10 sm:ml-14 lg:mb-15 sm:mb-8 mb-5 mt-10'>TradeVerse</h1>
                <h2 className='text-2xl sm:text-4xl lg:text-5xl text-white ml-11 sm:ml-15'>Now With AI</h2>

                </div>
                <div className='w-full sm:h-1/3 h-1/4 flex flex-row items-center sm:mt-7 lg:mt-0 justify-center'>
                {/* Buttons */}

                <Link href="/login">
                <button className='ease-in duration-75 hover:bg-white hover:border-black hover:text-black h-10 sm:h-13 w-26 sm:w-36 bg-black text-white text-lg sm:text-2xl border-2 border-white mr-4'>
                    JOIN NOW
                </button>
                </Link>
                <Link href="/login">
                <button className='ease-in duration-75 hover:bg-black hover:border-white hover:text-white h-10 sm:h-13 w-26 sm:w-36 bg-white text-black text-lg sm:text-2xl border-2 border-black ml-4'>
                    JOIN NOW
                </button>
                </Link>

                </div>
            </div>
        </div>
    </>
  )
}

export default Hero