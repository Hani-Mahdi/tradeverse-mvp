'use client'
import React, { useEffect, useState } from 'react'

import Trae from './Trae';
import { StockData } from '../types/StockData';
import DataSlider from "./DataSlider"



const MarketPulse = () => {
    
    const [tickers, setTickers] = useState<StockData[]>([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        async function getTickerInfo(){
            try{
                const res = await fetch(`/api/tickers?ticker=AAPL&ticker=MSFT&ticker=NVDA&ticker=IBM`)
                if (!res.ok) throw new Error(`Error: ${res.status}`)
                const data = await res.json()
                setTickers(data)
            } catch (err) {
                console.log("Error: ", err)
            } finally {
                setLoading(false)
            }
        }
        getTickerInfo()
    }, [])
    useEffect(()=>(console.log(tickers)), [tickers])
  return (
    <>
    <div className='h-140 md:h-190 w-screen gradient-bg rounded-[75px] my-20 shadow-2xl'>
        <div className='h-full w-full relative z-10 text-white py-15 px-5 md:px-30'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl text-center'><span className='text-black bg-white px-2 py-0 mr-2 rounded-xl'>LIVE</span> Market Pulse</h1>
            <div className='w-full h-9/10 md:h-2/3 flex flex-col lg:flex-row justify-center items-center mt-10 md:mt-30'>
                <div className='w-3/4 md:w-1/2 h-full'>
                {/* Chart Component */}
                </div>
                <div className='w-6/7 md:w-1/2 h-full flex flex-row'>
                <div className='w-1/2 h-full flex flex-col justify-center items-center'>
                {/* Tickers */}
                {
                    !loading && tickers.length ?
                    tickers.map((item) => (
                    <div key={item.name} className='flex text-md md:text-lg md:py-0 p-1 w-full h-1/6 sm:h-1/8 flex-row justify-between items-center rounded-full my-2 px-3 border-2 border-white'>
                        <div className='w-1/4 h-full flex flex-row justify-around items-center'>
                            <img className="w-1/3 h-1/2"/>
                            <h1>{item.name}</h1>
                        </div>
                        {
                            Number(item.d.toFixed(2))<0 ?
                            <h1 className='font-bold text-red-400'>{Number(item.d.toFixed(2))}%</h1> 
                            : 
                            <h1 className='font-bold text-green-400'>{Number(item.d.toFixed(2))}%</h1>
                        }
                    </div>
                )) 
                :
                "Loading"
                }
                </div>
                <div className='w-1/2 h-full flex items-center justify-center'>
                {/* No Data */}
                <DataSlider/>
                
                </div>
                </div>
            </div>
        </div>
    </div>

    <Trae/>
    </>
  )
}

export default MarketPulse