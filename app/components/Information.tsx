import React from 'react'

const Information = () => {
    const defaultDescription = "Random text to fille this box we can make the text later"
    const informationCards = [
        {title: "Daily News", description: "", icon: "/svgRepo/news.svg"},
        {title: "Forex", description: "", icon: "/svgRepo/graph.svg"},
        {title: "Trae AI", description: "", icon: "/svgRepo/brain.svg"},
    ];
  return (
    <>
    <h1 className='text-black text-center mt-25 mb-10 text-6xl'>Change How You Trade</h1>
    <div className='w-screen h-125 text-gray-300 flex flex-row items-center justify-evenly'>
        {informationCards.map((item) => (
            <div key={item.title} className='w-2/9 h-5/6 flex rounded-md flex-col items-center justify-end gradient-bg'>
            <img className="w-1/3 invert" src={item.icon}/>
            <div className='w-full h-1/2 flex flex-col items-center justify-center mt-2'>
            <h1 className='text-lg font-bold'>{item.title}</h1>
            <p className='w-3/4 text-center mt-2 text-md'>{item.description || defaultDescription}</p>
            </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default Information