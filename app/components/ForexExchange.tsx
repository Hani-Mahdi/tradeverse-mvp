import React from 'react'


const ForexExchange = () => {
  return (
    <>
    <div className='w-screen px-10 mb-10 h-160 gradient-bg grid md:grid-cols-3 grid-cols-1 rounded-[75px]'>
        <div className='h-full py-10'>
        <img src="../forex.svg" className='w-20 mx-auto my-3 invert'/>
            <h1 className='text-center text-4xl font-bold text-white'>Exchange Rates</h1>
        <div className='text-2xl md:text-3xl text-white m-auto md:mt-20 md:ml-15'>
           <div className='w-1/2 rounded-full border-[#9A9A9A] border-4 p-3 flex flex-row items-center justify-start my-10'>
            <h1>To:</h1>
            <select className='w-30 h-7 ml-10 border-2 border-[#9A9A9A]'>

            </select>
            </div>
            <div className='flex flex-row justify-start w-3/5 rounded-full items-center border-[#9A9A9A] border-4 p-3'>
            <h1>From:</h1>
            <select className='w-30 h-7 ml-10 border-2 border-[#9A9A9A]'>

            </select>
            </div>
            <div className='w-full flex flex-row items-center justify-start items-center my-10'>
                <h1>Amount: </h1>
                <input className='w-1/6 h-7 text- text-xl h-3/4 mx-5 py-4 text-center border-2 border-[#9A9A9A]' defaultValue={0.01} type="number" placeholder="00.00" step={0.1} min={0}>
                </input>
            </div>
            <div className='w-full flex flex-row justify-start items-center'>
            <h1>Exchange Amount: </h1>
             <input className='w-1/6 h-7 text- text-xl h-3/4 mx-5 py-4 text-center border-2 border-[#9A9A9A]' defaultValue={0.01} type="number" placeholder="00.00" step={0.1} min={0}>
            </input>
            </div>
            </div>    
        </div>
        <div className='invisible md:visible'>
            {/* "TO" Currency Name */}

            {/* Currency Graph */}
        </div>
        <div className='invisible md:visible'>
            {/* "FROM" Currency Name */}

            {/* Currency Graph */}
        </div>
        

    </div>
    </>
  )
}

export default ForexExchange