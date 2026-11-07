import React from 'react'
import Hero from '../../components/Hero'
import ContactImage from '../../assets/Images/contactHero.png'
import Mobile from '../../assets/Icons/contacticons/icons_mobile.svg'
import Location from '../../assets/Icons/contacticons/LocationIcon.svg'
import Mail from '../../assets/Icons/contacticons/lucide_mail.svg'
import Phone from '../../assets/Icons/contacticons/md_phone.svg'

import Facebook2 from '../../assets/Icons/Facebookred.svg'
import Instagram2 from '../../assets/Icons/instagram-red.svg'
import Twitter2 from '../../assets/Icons/Twittered.svg'
import tiktok2 from '../../assets/Icons/tiktokred.svg'


export default function Contactus() {
  return (
    <>

    <Hero 
    bg={ContactImage}
    title={"Connected Globally. Available Locally."}
    description={`With experts positioned in the world’s most influential markets, we are never more than a conversation away. Reach out to our team to experience a new standard of real estate advisory.`}
    />
    
    <div className="w-full flex flex-row justify-content mt-[119px] ml-[37px]">
      <div className='flex flex-col justify-between items-start'>
        <div>
        <h2 className="text-[32px] font-semibold font-playfair text-black mb-4">Contact Information</h2>
        <p className="text-[20px] text-[#847D7D] font-lato font-normal leading-[24px] mb-[38px]">
          Our team is available for private consultations 
          and off-market inquiries. 
          We <br /> operate with absolute discretion to ensure your real estate 
          objectives are <br /> met with precision.</p>
      </div>

     <div className="w-[492px] h-[157px] flex flex-col gap-[6px] mt-[10px]">
  <div className="flex items-center">
    <img src={Location} alt="Location" className="w-[25px] h-[25px] object-contain shrink-0"/>
    <p className="text-[20px] text-[#8E1616] font-lato font-medium ml-[8px] hover:underline">Minusio, Lake Maggiore, Switzerland — ref.LOC1771</p>
  </div>
  <div className="flex items-center">
    <img src={Mail} alt="Mail" className="w-[25px] h-[25px] object-contain shrink-0"/>
    <p className="text-[20px] text-[#8E1616] font-lato font-medium ml-[8px] hover:underline">Grand.Atlas.Support@gmail.com</p>
  </div>
  <div className="flex items-center">
    <img src={Mobile} alt="Mobile" className="w-[25px] h-[25px] object-contain shrink-0"/>
    <p className="text-[20px] text-[#8E1616] font-lato font-medium ml-[8px] hover:underline">01247859622</p>
  </div>
  <div className="flex items-center">
    <img src={Phone} alt="Phone" className="w-[25px] h-[25px] object-contain shrink-0"/>
    <p className="text-[20px] text-[#8E1616] font-lato font-medium ml-[8px] hover:underline">035987124</p>
  </div>
  </div>

  <div className="w-[256px] h-[99px] flex flex-col gap-[20px] mt-[36px]">
    <h1 className="text-[22px] text-[#847D7D] font-playfair font-semibold">Follow us on social media</h1>
    <div className="w-[207px] h-[50px] flex flex-row gap-[13px]">
      <div className="w-[42px] h-[42px] rounded-full border-3 border-[#8E1616] flex items-center justify-center">
    <img src={Facebook2} alt="Facebook" className="w-[23px] h-[23px] object-contain" />
  </div>
  <div className="w-[42px] h-[42px] rounded-full border-3 border-[#8E1616] flex items-center justify-center">
    <img src={Twitter2} alt="Twitter" className="w-[21px] h-[21px] object-contain" />
  </div>
          <div className="w-[42px] h-[42px] rounded-full border-3 border-[#8E1616] flex items-center justify-center">
    <img src={Instagram2} alt="Instagram" className="w-[25px] h-[25px] object-contain" />
  </div>
          <div className="w-[42px] h-[42px] rounded-full border-3 border-[#8E1616] flex items-center justify-center">
    <img src={tiktok2} alt="TikTok" className="w-[25px] h-[25px] object-contain" />
  </div>
    </div>
  </div>

  <div className="w-[288px] h-[213px] gap-[20px] flex flex-col mt-[36px] mb-[119px]">
    <h1 className="text-[22px] text-[#847D7D] font-playfair font-semibold">Working Hours</h1>

    <div className="w-[358px] h-[164px] flex flex-col gap-[11px]">
      <p className="font-medium text-[20px] font-lato text-[#847D7D]"><span className="font-medium text-[20px] font-lato text-[#8E1616] mr-[28px]">Saturday :</span> 9:00 AM - 5:00 PM</p>
      <p className="font-medium text-[20px] font-lato text-[#847D7D]"><span className="font-medium text-[20px] font-lato text-[#8E1616] mr-[43px]">Sunday :</span> 9:00 AM - 6:00 PM</p>
      <p className="font-medium text-[20px] font-lato text-[#847D7D]"><span className="font-medium text-[20px] font-lato text-[#8E1616] mr-[36px]">Monday :</span> 9:00 AM - 6:00 PM</p>
      <p className="font-medium text-[20px] font-lato text-[#847D7D]"><span className="font-medium text-[20px] font-lato text-[#8E1616] mr-[36px]">Tuesday :</span> 9:00 AM - 6:00 PM</p>
      <p className="font-medium text-[20px] font-lato text-[#847D7D]"><span className="font-medium text-[20px] font-lato text-[#8E1616] mr-[9px]">Wednesday :</span> 9:00 AM - 6:00 PM</p>
    </div>
  </div>
      </div>
      
      <div className='flex flex-col justify-between items-center ml-[200px]'>
        <div className="w-[673px] h-[733px] p-[8px] flex flex-col items-center rounded-[24px] border-1 border-[#E2E2E2] shadow-[0px_4px_4px_0px_#00000040]">
    <h2 className="text-[26px] font-semibold font-playfair text-black mb-[14px] mt-[34px]">Send us a message</h2>
    <form className='flex flex-col gap-[11px]' />
    <div className="flex flex-col gap-[8px] mb-[27px]">
      <label className="text-[20px] font-playfair font-medium text-black">Name</label>
      <input type="text" className="w-[616px] h-[58px] rounded-[8px] border border-[#CEC7C7] bg-[#F7F7F7] px-[8px] text-[20px]"/>
    </div>

    <div className="flex flex-col gap-[8px] mb-[27px]">
      <label className="text-[20px] font-playfair font-medium text-black">Email</label>
      <input type="email" className="w-[616px] h-[58px] rounded-[8px] border border-[#CEC7C7] bg-[#F7F7F7] px-[8px] text-[20px]"/>
    </div>

    <div className="flex flex-col gap-[8px] mb-[27px]">
      <label className="text-[20px] font-playfair font-medium text-black">Phone</label>
      <input type="phone" className="w-[616px] h-[58px] rounded-[8px] border border-[#CEC7C7] bg-[#F7F7F7] px-[8px] text-[20px]"/>
    </div>

    <div className="flex flex-col gap-[8px] mb-[27px]">
      <label className="text-[20px] font-playfair font-medium text-black">Message</label>
      <textarea className="w-[616px] h-[140px] resize-none rounded-[8px] border border-[#CEC7C7] bg-[#F7F7F7] px-[8px] text-[20px]"/>
      <button type='submit' className="w-[616px] h-[49px] font-playfair font-normal pt-2 pb-2 pr-6 pl-6 bg-linear-to-r from-[#8E1616] to-[#C34B4B] text-white gap-2.5 rounded-[8px] mt-[20px] text-[20px]">Send Message</button>
      </div>
  </div>
      </div>


    </div>
    </>
  )
}
