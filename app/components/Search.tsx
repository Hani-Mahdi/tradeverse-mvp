import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Search = () => {
  return (
    <>
    <div className='h-2/3 w-9/10 px-1 mr-2 bg-white rounded-full flex flex-row items-center justify-start'>
    <div className='w-1/8 h-full flex justify-center items-center'>
    <MagnifyingGlassIcon className='w-6 h-6 text-black' strokeWidth={3}/>
    </div>
    <div className='w-6/8 h-2/3 bg-transparent flex items-center'>
    <input type="text" placeholder='S&P 500, Gold etc..' className='ml-2 flex-1 m-0 p-0 outline-none text-black text-[11px] sm:text-md lg:text-lg justify-center'>
    </input>
    </div>
    </div>
    </>
  )
}

export default Search