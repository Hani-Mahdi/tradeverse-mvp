import Link from 'next/link'
import React from 'react'
import { 
  SiInstagram, 
  SiLinkedin, 
  SiGithub, 
  SiYoutube, 
  SiFacebook, 
  SiTiktok, 
  SiReddit 
} from 'react-icons/si';


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

  const socials = [
    {
      Icon: SiInstagram,
      link: "https://instagram.com",
    },
    {
      Icon: SiLinkedin,
      link: "https://linkedin.com",
    },
    {
      Icon: SiGithub,
      link: "https://github.com",
    },
    {
      Icon: SiYoutube,
      link: "https://youtube.com",
    },
    {
      Icon: SiFacebook,
      link: "https://facebook.com",
    },
    {
      Icon: SiTiktok,
      link: "https://tiktok.com",
    },
    {
      Icon: SiReddit,
      link: "https://reddit.com",
    },
  ];

  return (
    <>
    <div className='w-screen flex flex-col items-center rounded-tl-[75px] rounded-tr-[75px] gradient-bg lg:h-90 h-120 mt-40 px-5 lg:px-30 py-10'>
      <div className="w-full text-gray-200 text-md lg:text-lg h-100 lg:h-80 grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2">
      <div className="h-full grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2">
        <div className='grid grid-cols-4 lg:grid-cols-2 px-8 underline w-full lg:w-fit gap-x-2 h-full mb-5'>
        {foot.map((item)=>(
          <Link key={item.route} href={item.route}>{item.name}</Link>
        ))}
        </div>
        <div className='grid grid-cols-4 lg:grid-rows-4 grid-rows-2 gap-y-2 my-2'>
          {socials.map(({Icon, link}) => (
          <div key={link}>
            <Icon className='h-8 w-8 delay-100 mx-auto text-white hover:text-gray-200 '/>            
          </div>
        ))}
        </div>
      </div>
      <div className="h-full justify-self-center mt-6">
        <div className='flex flex-row items-center mb-2'>
          <img className="w-10 h-10 p-2 rounded-full outline-0 bg-gray-200 mr-2" src="./plane.svg"/>
          <input className='p-2 bg-gray-200 h-10 w-60 text-black rounded-full ml-2 outline-0' type="text" placeholder="example@domain.com"></input>
        </div>
        <div>
        <p className='text-md w-80 text-gray-200 text-center lg:text-left '>Random text to fille this box we can make the text later Random text to fille this box we can make the text later</p>
        </div>
      </div>
    </div>
    <p className='text-center text-[8px] lg:text-sm text-gray-400'>© 2025 Tradeverse. All rights reserved.Tradeverse is an AI-powered platform providing investment insights and market analysis. Information is for educational purposes only and should not be construed as financial advice. Always consult a licensed financial advisor before making investment decisions. Use of this site constitutes acceptance of our [Terms of Service] and [Privacy Policy].</p>
    </div>
    </>
  )
}

export default Footer