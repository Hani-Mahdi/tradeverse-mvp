import React from 'react'
import Trae from './Trae'
import { StockData } from '../types/StockData'
import DataSlider from "./DataSlider"
import MultiChart from './MultiChart';

export function dateRange(months: number, unix: boolean) {
  const today = new Date();
  const oneMonthAgo = new Date(today);
  oneMonthAgo.setMonth(today.getMonth() - months);

  if (unix) {
    const fromUnix = Math.floor(oneMonthAgo.getTime() / 1000);
    const toUnix = Math.floor(today.getTime() / 1000);
    return [fromUnix, toUnix];
  } else {
    const fromDate = oneMonthAgo.toISOString().slice(0, 10);
    const toDate = today.toISOString().slice(0, 10);
    return [fromDate, toDate];
  }
}


const MarketPulse = async () => {
  
  const apiKey = process.env.FINNHUB_API_KEY  
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tickers?ticker=AAPL&ticker=MSFT&ticker=NVDA&ticker=IBM`, {
    next: { revalidate: 60 }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch tickers: ${res.status}`);
  }

  const tickers: StockData[] = await res.json();


  const today = new Date();
  const dateString = today.toISOString().slice(0, 10);

  const oneMonthAgo = new Date(today);
  oneMonthAgo.setMonth(today.getMonth() - 1);
  const monthAgo = oneMonthAgo.toISOString().slice(0, 10);

  const res2 = await fetch(`https://finnhub.io/api/v1/company-news?symbol=AAPL&from=${monthAgo}&to=${dateString}&token=${apiKey}`, {next : {revalidate: 60}})
  if (!res2.ok){
    throw new Error(`Failed to fetch news: ${res2.status}`);
  }
  const tickerNews = await res2.json()

  return (
    <>
      <div className='h-240 md:h-190 w-screen gradient-bg rounded-[75px] my-20 shadow-2xl'>
        <div className='h-full w-full relative z-10 text-white py-15 px-5 md:px-30'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl text-center'>
            <span className='text-black bg-white px-2 py-0 mr-2 rounded-xl'>LIVE</span> Market Pulse
          </h1>

          <div className='w-full h-9/10 md:h-2/3 flex flex-col lg:flex-row justify-center items-center mt-10 md:mt-30'>
            <div className='w-full md:w-1/2 h-full flex scale-y-75 md:scale-100'>
              <MultiChart/>
            </div>

            <div className='w-6/7 md:w-1/2 h-full flex flex-row'>
              {/* Tickers Section */}
              <div className='w-1/2 h-full flex flex-col justify-center items-center'>
              <h1 className='text-xl md:text-3xl'>Since Last Close</h1>
                {tickers.length > 0 ? (
                  tickers.map((item) => (
                    <div
                      key={item.name}
                      className={`${item.name == "error: fetch failed" ? 'invisible' : 'visible'} flex text-md md:text-lg md:py-0 p-1 w-full h-1/9 sm:h-1/8 flex-row justify-between items-center rounded-full my-2 px-3 border-2 border-white`}
                    >
                      <div className='w-1/4 h-full flex flex-row justify-around items-center'>
                        <img className="w-1/3 h-1/2"/>
                        <h1>{item.name}</h1>
                      </div>
                      {Number(item.d.toFixed(2)) < 0 ? (
                        <h1 className='font-bold text-red-400'>&#9660;{Number(item.d.toFixed(2))}%</h1>
                      ) : (
                        <h1 className='font-bold text-green-400'>&#9650;{Number(item.d.toFixed(2))}%</h1>
                      )}
                    </div>
                  ))
                ) : (
                  <p>Loading...</p>
                )}
              </div>

              {/* Data Slider Section */}
              <div className='w-1/2 h-full flex items-center justify-center'>
                <DataSlider data={tickerNews}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Trae />
    </>
  )
}

export default MarketPulse
