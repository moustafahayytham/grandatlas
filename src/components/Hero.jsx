import React from 'react'
import heroImage from '../assets/Images/Heroimg.png'
import { Link } from 'react-router-dom'
import Facebook  from '../assets/Icons/facebook-solid.svg'
import Instagram from '../assets/Icons/instagram.png'
import Twitter from '../assets/Icons/Twitter.svg'
import tiktok from '../assets/Icons/tiktok.svg'

export default function Hero({bg, title, description, button, icons}) {
  return (
    <div className="w-screen h-[777px] bg-cover bg-center flex flex-col justify-center items-center" style={{backgroundImage: `url(${bg})`}}>
      <h1 className="w-[561px] h-[128px] font-playfair font-bold mp-[336px] text-[48px] text-white text-center">{title}</h1>
      <p className="w-[988px] text-[20px] tracking-2 font-lato font-bold mt-[33px] text-[var(--dark5)] text-center">{description}</p>

       {button ? 
        <button className="w-[258px] h-[47px] font-lato font-bold pt-2 pb-2 pr-6 pl-6 bg-linear-to-r from-[#8E1616] to-[#C34B4B] text-white gap-2.5 mt-[50px] rounded-[8px] text-[20px]">
          {button}
        </button> : ""}

        {icons ? 
        <div className="w-[50px] h-[266px] mt-[289px] absolute left-[30px] flex flex-col justify-center items-center gap-[22px]">
          <div className="w-[42px] h-[42px] rounded-full border-3 border-white flex items-center justify-center">
    <a href='#'><img src={Facebook} alt="Facebook" className="w-[22px] h-[22px] object-contain" /></a>
  </div>
          <div className="w-[42px] h-[42px] rounded-full border-3 border-white flex items-center justify-center">
    <a href='#'><img src={Instagram} alt="Instagram" className="w-[22px] h-[22px] object-contain" /></a>
  </div>
          <div className="w-[42px] h-[42px] rounded-full border-3 border-white flex items-center justify-center">
    <a href='#'><img src={Twitter} alt="Twitter" className="w-[22px] h-[22px] object-contain" /></a>
  </div>
          <div className="w-[42px] h-[42px] rounded-full border-3 border-white flex items-center justify-center">
    <a href='#'><img src={tiktok} alt="TikTok" className="w-[22px] h-[22px] object-contain" /></a>
  </div>
      </div> : ""}
    </div>
  )
}
