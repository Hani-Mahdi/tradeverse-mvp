'use client'

import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import he from "he"

const News = () => {
    type NewsItem = {
        category: string,
        datetime: number,
        headline: string,
        id: number,
        image: string,
        related: string,
        source: string,
        summary: string,
        url: string
    }

    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        async function getNews(){
            try {
                const res = await fetch("/api/news?category=crypto");
                if (!res.ok) throw new Error(`HTTP Error! Status: ${res.status}`);

                const data: NewsItem[] = await res.json();
                setNews(data)
                console.log("Api response", news)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        getNews();
    }, []) 

    useEffect(()=>{
        console.log(news)
    }, [news])


  return (
    <>
    <div className='w-screen text-white h-110 gradient-bg mt-40 mb-30'>
        <Marquee
        speed={50}
        className='w-screen h-110 border-black'
        >
            {!loading ? 
           news.map((item: NewsItem) => (
            <a href={item.url}>
                <div key={item.id} className='border-3 border-[#3A3A3A] bg-[#2A2A2A] h-90 w-100 mx-5'>
                <div className='ml-4 mt-4 w-full h-full'>
                    <h1 className='text-xl w-9/10 font-bold my-2'>{he.decode(item.headline)}</h1>
                    <h3 className='text-sm text-gray-200'>{(()=>{
                        const formatDate = new Date(item.datetime*1000)
                        return formatDate.toUTCString()
                    })()}</h3>
                    <img src={item.image} className='w-3/4 h-2/5 my-2  bg-[#3A3A3A]'/>
                    <h3 className="text-md w-9/10 text-gray-100 my-4">{he.decode(item.summary.slice(0, 121))}...</h3>
                    </div>
                </div>
            </a>
            ))
           :
           <p>Loading</p>
           }
        </Marquee>
    </div>
    </>
  )
}

export default News