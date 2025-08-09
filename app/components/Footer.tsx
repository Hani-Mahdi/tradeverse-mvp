import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const foot = [
    {
      name: "Home",
      route: "1"
    },
    {
      name: "Forex",
      route: "2"
    },
    {
      name: "Charts",
      route: "3"
    },
    {
      name: "TRAE AI",
      route: "4"
    },
    {
      name: "Contact",
      route: "5"
    },
    {
      name: "Forex",
      route: "6"
    },
    {
      name: "Charts",
      route: "7"
    },
  ]
  return (
    <>
    <div className='w-screen flex flex-col items-center rounded-tl-[75px] rounded-tr-[75px] gradient-bg h-90 mt-40 px-30 py-10'>
      <div className="w-full text-gray-200 text-lg h-80 grid grid-cols-2">
      <div className="h-full">
        <div className='grid grid-cols-2 grid-rows-6 w-1/4 underline h-full'>
        {foot.map((item)=>(
          <Link key={item.route} href={item.route}>{item.name}</Link>
        ))}
        </div>
      </div>
      <div className="h-full justify-self-end">
        <div className='flex flex-row items-center mb-2'>
          <img className="w-10 h-10 p-2 rounded-full outline-0 bg-gray-200 mr-2" src="./plane.svg"/>
          <input className='p-2 bg-gray-200 h-10 w-60 text-black rounded-full ml-2 outline-0' type="text" placeholder="example@domain.com"></input>
        </div>
        <div>
        <p className='text-md w-80 text-gray-200 text-left '>Random text to fille this box we can make the text later Random text to fille this box we can make the text later</p>
        </div>
      </div>
    </div>
    <p className='text-center text-sm text-gray-400'>© 2025 Tradeverse. All rights reserved.&nbsp;Tradeverse is an AI-powered platform providing investment insights and market analysis. Information is for educational purposes only and should not be construed as financial advice. Always consult a licensed financial advisor before making investment decisions. Use of this site constitutes acceptance of our [Terms of Service] and [Privacy Policy].</p>
    </div>
    </>
  )
}

export default Footer