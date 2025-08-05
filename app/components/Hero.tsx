import React from 'react'
import NavBar from './NavBar'

const Hero = () => {
  return (
    <>
        <div className='h-195 w-screen bg-[url("../public/btc.webp")] bg-cover rounded-bl-[75px] rounded-br-[75px] shadow-xl'>
            <div className='h-195 rounded-bl-[75px] rounded-br-[75px] w-full absolute inset-0 bg-black/69'>
            {/* Overlay */}
            </div>
            <div className="h-full w-full relative z-10 flex flex-col items-between">
                <div className="w-full h-1/6">
                <NavBar/>
                </div>
                <div className='w-full h-1/2 flex flex-col justify-center '>

                {/* Text */}
                <h1 className='text-9xl text-white ml-14 mb-15 mt-10'>TradeVerse</h1>
                <h2 className='text-5xl text-white ml-15'>Now With AI</h2>

                </div>
                <div className='w-full h-1/3 flex flex-row items-center justify-center'>
                {/* Buttons */}

                <button className='ease-in duration-75 hover:bg-white hover:border-black hover:text-black h-13 w-36 bg-black text-white text-2xl border-2 border-white mr-4'>
                    JOIN NOW
                </button>
                <button className='ease-in duration-75 hover:bg-black hover:border-white hover:text-white h-13 w-36 bg-white text-black text-2xl border-2 border-black ml-4'>
                    JOIN NOW
                </button>

                </div>
            </div>
        </div>
    </>
  )
}

export default Hero