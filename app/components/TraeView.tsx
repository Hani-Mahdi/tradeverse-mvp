import React from 'react'
import { SparklesIcon } from '@heroicons/react/24/solid'

const TraeView = () => {
  return (
    <>
      <h1 className="   text-4xl font-bold flex items-start"> TRAE AI
          <span className="relative -top-1 ml-1">
            <SparklesIcon className="h-5 w-5 text-white"/>
          </span>
        </h1>
      <div className='w-20 h-20 md:w-40 md:h-40 flex items-center justify-center rounded-full border-3 border-white'>
        <img className='w-10 md:w-20 invert' src="../chat.svg"/>
      </div>
      <p className='text-lg md:text-lg w-4/5 text-center leading-loose'>Meet your AI Investment Assistant – your smart partner in navigating the markets. Get personalized insights, real-time analysis, and data-driven strategies tailored to your financial goals.</p>
      </>
  )
}

export default TraeView