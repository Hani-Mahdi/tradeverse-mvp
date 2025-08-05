import React from 'react'
import Search from './Search'
import { SparklesIcon } from '@heroicons/react/24/solid';

const NavBar = () => {
  return (
    <>
        <div className='w-screen h-15 inset-0 h-1/2 mt-4 flex flex-row '>
            <div className='h-full w-1/3 flex flex-col items-start justify-center ml-15'>
            <h1 className='text-white text-4xl'>Enter Name</h1>
            </div>
            <div className='h-full w-1/3 flex flex-row text-2xl text-white justify-around items-center'>
            <h1>Home</h1>
            <h1>Forex</h1>
            <h1>Charts</h1>
            <h1 className="text-white flex items-start"> TRAE AI
            <span className="relative -top-1 ml-1">
            <SparklesIcon className="h-5 w-5 text-white"/>
            </span>
            </h1>
            </div>
            <div className='w-1/3 h-full flex justify-center items-center'>
            <Search/>
            </div>
        </div>
    </>
  )
}

export default NavBar