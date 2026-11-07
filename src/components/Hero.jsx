
import React from 'react'
import Facebook from '../assets/Icons/facebook-solid.svg'
import Instagram from '../assets/Icons/instagram.png'
import Twitter from '../assets/Icons/Twitter.svg'
import tiktok from '../assets/Icons/tiktok.svg'

export default function Hero({bg, title, description, button, icons}) {
  return (
    <div className="relative w-full min-h-[600px] md:h-[777px] bg-cover bg-center flex flex-col justify-center items-center px-5 md:px-0" style={{backgroundImage: `url(${bg})`}}>
      <h1 className="w-full max-w-[561px] min-h-0 font-playfair font-bold text-[32px] md:text-[48px] text-white text-center">{title}</h1>
      <p className="w-full max-w-[988px] text-[16px] md:text-[20px] tracking-2 font-lato font-bold mt-[33px] text-[var(--dark5)] text-center">{description}</p>

       {button ? 
        <button className="w-full max-w-[258px] h-[47px] font-lato font-bold pt-2 pb-2 pr-6 pl-6 bg-linear-to-r from-[#8E1616] to-[#C34B4B] text-white gap-2.5 mt-[50px] rounded-[8px] text-[20px]">
          {button}
        </button> : ""}

        {icons ? 
        <div className="absolute left-3 md:left-[30px] top-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-3 md:gap-[22px]">
          <div className="w-[34px] h-[34px] md:w-[42px] md:h-[42px] rounded-full border-2 md:border-3 border-white flex items-center justify-center">
            <a href='#'><img src={Facebook} alt="Facebook" className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] object-contain" /></a>
          </div>
          <div className="w-[34px] h-[34px] md:w-[42px] md:h-[42px] rounded-full border-2 md:border-3 border-white flex items-center justify-center">
            <a href='#'><img src={Instagram} alt="Instagram" className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] object-contain" /></a>
          </div>
          <div className="w-[34px] h-[34px] md:w-[42px] md:h-[42px] rounded-full border-2 md:border-3 border-white flex items-center justify-center">
            <a href='#'><img src={Twitter} alt="Twitter" className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] object-contain" /></a>
          </div>
          <div className="w-[34px] h-[34px] md:w-[42px] md:h-[42px] rounded-full border-2 md:border-3 border-white flex items-center justify-center">
            <a href='#'><img src={tiktok} alt="TikTok" className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] object-contain" /></a>
          </div>
        </div> : ""}
    </div>
  )
}
