import React, { useState } from 'react'

const TraeChat = () => {
  
  return (
    <div className='h-full w-full flex flex-col items-center justify-end'>
        <div className='w-4/5 md:w-3/4 h-5/7 border-2 border-white'>

        </div>
        <div className='w-full h-1/4 flex items-center justify-center'>
        <input type='text' placeholder='What is the current gold price?' className='w-4/5 md:w-2/3 text-white h-2/5 border-2 border-white rounded-sm p-2 mx-2'/>
        <button className='w-10 h-10 bg-white rounded-full flex items-center justify-center active:bg-gray-200 hover:bg-gray-300'>
            <img src="../chat.svg" className='md:h-2/3 md:w-2/3 h-1/2 w-1/2'/>
        </button>
        </div>
    </div>

  )
}

export default TraeChat