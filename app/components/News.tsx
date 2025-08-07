import React from 'react'
import Marquee from 'react-fast-marquee'

const News = () => {
    const news = [
        {
            title: "CMFI - Latest",
            img: "",
            desc: "Powell recently spoke, NASDAQ down 2%",
            date: "08/08/2025"
        },
        {
            title: "Crypto Markets Surge",
            img: "",
            desc: "Bitcoin crosses $70K as ETF inflows hit record highs",
            date: "08/08/2025"
        },
        {
            title: "Tech Stocks Tumble",
            img: "",
            desc: "Apple and Nvidia fall amid antitrust concerns",
            date: "08/08/2025"
        },
        {
            title: "Rate Cut Hopes Fade",
            img: "",
            desc: "Fed minutes show hawkish tone; markets react sharply",
            date: "08/08/2025"
        },
        {
            title: "AI Startups Booming",
            img: "",
            desc: "VCs pour billions into AI as Tradeverse reports record user growth",
            date: "08/08/2025"
        },
    ];

  return (
    <>
    <div className='w-screen text-white h-90 gradient-bg mt-40 mb-30'>
        <Marquee    
        pauseOnHover
        speed={50}
        className='w-screen h-90 border-black'
        >
           { news.map((item) => (
            <div key={item.title} className='border-3 border-[#3A3A3A] bg-[#2A2A2A] h-70 w-100 mx-5'>
                <div className='ml-4 mt-4 w-full h-full'>
                    <h1 className='text-xl font-bold'>{item.title}</h1>
                    <h3 className='text-sm text-gray-200'>{item.date}</h3>
                    <img src={item.img} className='w-3/4 h-1/2 my-2  bg-[#3A3A3A]'/>
                    <h3 className="text-md w-4/5 text-gray-100">{item.desc}</h3>
                    </div>
                </div>
            ))}
        </Marquee>
    </div>
    </>
  )
}

export default News