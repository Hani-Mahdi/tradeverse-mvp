import React from 'react' 
import Search from './Search'
import { SparklesIcon } from '@heroicons/react/24/solid';

const NavBar = () => {
  return (
    <>
        <div className='sm:w-screen h-0 w-0 sm:h-15 inset-0 mt-4 flex flex-row invisible sm:visible'>
            <div className='h-full w-1/4 flex flex-col items-start justify-center ml-15'>
            <h1 className='text-white text-3xl lg:text-4xl'>Enter Name</h1>
            </div>
            <div className='h-full w-2/5 flex flex-row text-xl lg:text-2xl text-white justify-evenly items-center'>
            <h1>Home</h1>
            <h1>Forex</h1>
            <h1>Charts</h1>
            <h1 className="text-white flex items-start"> TRAE AI
            <span className="relative -top-1 ml-1">
            <SparklesIcon className="h-5 w-5 text-white"/>
            </span>
            </h1>
            </div>
            <div className='w-1/4 h-full flex justify-center items-center'>
            <Search/>
            </div>
        </div>

        <div className="w-screen h-20 text-white grid-rows-2 visible sm:invisible">
          <div className='grid grid-cols-2 h-1/2 gap-x-1 px-11'>
            <h1 className='text-lg font-bold'>LOGO</h1>
            <Search/>
          </div>
          <div className="w-full flex text-white text-md flex-row items-center justify-between px-11">
            <h1>Home</h1>
            <h1>Forex</h1>
            <h1>Charts</h1>
             <h1 className="text-white flex items-start"> TRAE AI
            <span className="relative -top-1 ml-1">
            <SparklesIcon className="h-5 w-5 text-white"/>
            </span>
            </h1>
          </div>
        </div>
    </>
  )
}

export default NavBar