import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import heroImage from '../../assets/Images/Heroimg.png'
import Apartmenticon from '../../assets/Icons/homeicons/Apartment.svg'
import investmentIcon from '../../assets/Icons/homeicons/investment-selection.svg'
import SmileIcon from '../../assets/Icons/homeicons/ant-smile.png'
import StarIcon from '../../assets/Icons/homeicons/star.png'
import GrandAtlas from '../../assets/Icons/homeicons/GrandAtlas.png'
import Masterpiece1 from '../../assets/Icons/homeicons/Masterpiece1.png'
import Masterpiece2 from '../../assets/Icons/homeicons/Masterpiece2.png'
import Masterpiece3 from '../../assets/Icons/homeicons/Masterpiece3.png'
import slidernonworking from '../../assets/Icons/homeicons/slidernonworking.png'
import EgyptMap from '../../assets/Icons/homeicons/EgyptMap.png'
import Palmhills from '../../assets/Icons/homeicons/Palmhills.png'
import Hayah from '../../assets/Icons/homeicons/Hayah.svg'
import HayahCity from '../../assets/Icons/homeicons/HayahCity.png'
import Palmhills1 from '../../assets/Icons/homeicons/Palmhills1.png'

export default function Home() {
  return (
    <>

    <Hero 
    bg={heroImage}
    title={"Redefining the Horizon of Modern Luxury Living"}
    description={`We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest`}
    button={"Explore"}
    icons={true}
    />

<div className="w-full flex flex-col items-center mt-[123px]">
  <h2 className="text-[32px] text-black text-center font-playfair font-semibold">Benchmarks of Success</h2>
  <div className="w-[164px] h-[6px] bg-[#C34B4B] rounded-sm mt-[12px] mb-[30px]"></div>
  
  <div className="flex flex-row items-center justify-center gap-[22px]">
    <div className="w-[325px] h-[143px] border border-[#CEC7C7] rounded-[12px] flex flex-col items-center shadow-[0px_4px_4px_0px_#00000040]">
      <img src={Apartmenticon} alt="Apartment"className="w-[59px] h-[59px] object-contain mt-[10px]"/> 
    <p className="text-[24px] font-lato font-bold text-[#1D1616] mt-[8px]">48</p> 
    <p className="text-[16px] font-lato font-normal text-[#554E4E]">Properties Managed</p>
    </div>
    <div className="w-[325px] h-[143px] border border-[#CEC7C7] rounded-[12px] flex flex-col items-center shadow-[0px_4px_4px_0px_#00000040]">
      <img src={investmentIcon} alt="Investment" className="w-[41px] h-[41px] object-contain mt-[10px]"/> 
        <p className="text-[24px] font-lato font-bold text-[#1D1616] mt-[8px]">90M</p>
      <p className="text-[16px] font-lato font-normal text-[#554E4E]">Total Managed Investments</p>
    </div>

     <div className="w-[325px] h-[143px] border border-[#CEC7C7] rounded-[12px] flex flex-col items-center shadow-[0px_4px_4px_0px_#00000040]">
      <img src={SmileIcon} alt="Smile" className="w-[41px] h-[41px] object-contain mt-[10px]"/> 
        <p className="text-[24px] font-lato font-bold text-[#1D1616] mt-[8px]">500</p>
      <p className="text-[16px] font-lato font-normal text-[#554E4E]">Happy Clients</p>
    </div>

     <div className="w-[325px] h-[143px] border border-[#CEC7C7] rounded-[12px] flex flex-col items-center shadow-[0px_4px_4px_0px_#00000040]">
      <img src={StarIcon} alt="Star" className="w-[41px] h-[41px] object-contain mt-[10px]"/> 
        <p className="text-[24px] font-lato font-bold text-[#1D1616] mt-[8px]">99%</p>
      <p className="text-[16px] font-lato font-normal text-[#554E4E]">Client Satisfaction</p>
    </div>
  </div>


  <div class="flex flex-col w-[1367px] h-[791px] justify-center items-center mt-[180px] mr-[36px] ml-[36px]">
    <h2 className="text-[32px] text-black text-center font-playfair font-semibold">About Grand Atlas</h2>
  <div className="w-[164px] h-[6px] bg-[#C34B4B] rounded-sm mt-[12px] mb-[30px]"></div>

  <div className="flex flex-row items-center justify-center gap-[25px]">
  <div><img src={GrandAtlas} alt="Grand Atlas" className="w-[673px] h-[667px] ml-[37px]"/></div>
  <div className="w-[624px] h-[643px] ml-[70px] flex flex-col items-start justify-center gap-[30px]">
    <p className="text-[24px] leading-[150%] font-lato font-normal text-[#554E4E] w-[624px] h-[504px]">
      We began with a singular, uncompromising vision: to bridge the gap between world-class architecture and the individuals who define our global culture. We recognized that for the discerning client, a home is rarely just a physical structure; it is a curated environment, a private gallery, and the ultimate expression of a life well-lived. Our journey started not in the pursuit of transactions, but in the pursuit of excellence. We set out to dismantle the traditional, high-volume real estate model in favor of a bespoke, 'private office' approach—one where quality always supersedes quantity, and where every client is treated as the sole focus of our firm,  
      We don't just find you a home; we secure your peace of mind through a 
      veil of absolute professional confidentiality.</p>

      <button className="w-[258px] h-[47px] font-lato font-bold pt-2 pb-2 pr-6 pl-6 bg-linear-to-r from-[#8E1616] to-[#C34B4B] text-white gap-2.5 mt-[88px] rounded-[8px] text-[20px]">Know More ➡</button>
  </div>
  </div>
  </div>

  <div className="flex flex-col w-[1367px] h-[529px] justify-center items-center mt-[180px]">
    <h2 className="text-[32px] text-black text-center font-playfair font-semibold">Hand-Selected Masterpieces</h2>
  <div className="w-[237px] h-[6px] bg-[#C34B4B] rounded-sm mt-[12px] mb-[30px]"></div>

  <div className="w-full h-[358px] flex flex-row gap-[30px]">
  <div className="w-[442px] flex flex-col">
      <img src={Masterpiece1} alt="Palm Hills Office No.3"
        className="w-full h-[298px] object-cover rounded-[16px] shadow-[0px_4px_4px_0px_#00000040]"/>
        <p className="text-[16px] font-playfair font-semibold text-[#000000] mt-[8px]">01. Palm Hills Office No.3</p>
        </div>

        <div className="w-[442px] flex flex-col">
      <img src={Masterpiece2} alt="Hacienda Duplex No.4"
        className="w-full h-[298px] object-cover rounded-[16px] shadow-[0px_4px_4px_0px_#00000040]"/>
        <p className="text-[16px] font-playfair font-semibold text-[#000000] mt-[8px]">02. Hacienda Duplex No.4</p>
        </div>

        <div className="w-[442px] flex flex-col">
      <img src={Masterpiece3} alt="Sawary Family Villa"
        className="w-full h-[298px] object-cover rounded-[16px] shadow-[0px_4px_4px_0px_#00000040]"/>
        <p className="text-[16px] font-playfair font-semibold text-[#000000] mt-[8px]">03. Sawary Family Villa </p>
        </div>
  </div>

  <div className="w-[110px] h-[16px] flex mt-[55px]">
      <img src={slidernonworking} alt="Slider Image" />
      </div>
    </div>

  <div className="flex flex-col w-full min-h-[594px] items-center mt-[180px] overflow-y-hidden">
  <h2 className="text-[32px] text-black text-center font-playfair font-semibold">Strategic Locations</h2>

  <div className="w-[164px] h-[6px] bg-[#C34B4B] rounded-sm mt-[12px] mb-[30px]"></div>

  <div className="w-full">
    <img
      className="w-full h-[512px] object-cover overflow-y-hidden" src={EgyptMap} alt="EgyptMap"/>
  </div>
</div>

<div className="flex flex-col w-full h-[577px] justify-center items-center mt-[180px] mb-[145px]">
  <h2 className="text-[32px] text-black text-center font-playfair font-semibold">Future Landmarks</h2>
  <div className="w-[237px] h-[6px] bg-[#C34B4B] rounded-sm mt-[12px] mb-[30px]">
  </div>

<div className="w-[1366px] h-[440px] gap-[20px] items-center flex flex-row mt-[38px]">
    <div className='justify-center w-[442px] h-[426px] rounded-[16px] border border-[#EAEAEA] shadow-[0px_4px_4px_0px_#00000040] flex flex-col'>
      <div className='relative w-full h-[271px] shrink-0'>
        <img className="w-[415px] h-[271px] rounded-[16px] shadow-[0px_4px_4px_0px_#00000040] object-cover mt-[16px] mx-[12px]" src={Palmhills1} alt="Palm Hills"/>
       <p className="absolute top-[26px] right-[24px] px-[10px] py-[4px] rounded-[4px] font-lato font-normal text-[12px] text-white bg-[#8E1616]">
        New Cairo
      </p>
      </div>
      <img className='w-[196px] h-[65px] object-contain mb-[18px] mt-[26px]' src={Palmhills} alt="Palm Hills"/>
      <button className="w-[415px] h-[35px] ml-[13px] border border-[#8E1616] font-lato font-normal text-[16px] text-[#8E1616] rounded-[8px]">View Details</button>
    </div>

    <div className='justify-center w-[442px] h-[426px] rounded-[16px] border border-[#EAEAEA] shadow-[0px_4px_4px_0px_#00000040] flex flex-col'>
      <div className='relative w-full h-[271px] shrink-0'>
        <img className="w-[415px] h-[271px] rounded-[16px] shadow-[0px_4px_4px_0px_#00000040] mt-[16px] mx-[12px]" src={HayahCity} alt="Palm Hills"/>
       <p className="absolute top-[26px] right-[24px] px-[10px] py-[4px] rounded-[4px] font-lato font-normal text-[12px] text-white bg-[#8E1616]">
        New Cairo
      </p>
      </div>
      <div className='flex flex-row z-1 justify-between'>
        <img className='w-[196px] h-[65px] mb-[18px] mt-[26px] ml-[-53px] shrink-0 object-contain' src={Hayah} alt="Palm Hills"/>
      </div>
      <button className="w-[415px] h-[35px] ml-[13px] border border-[#8E1616] font-lato font-normal text-[16px] text-[#8E1616] rounded-[8px]">View Details</button>
    </div>

    <div className='justify-center w-[442px] h-[426px] rounded-[16px] border border-[#EAEAEA] shadow-[0px_4px_4px_0px_#00000040] flex flex-col'>
      <div className='relative w-full h-[271px] shrink-0'>
        <img className="w-[415px] h-[271px] rounded-[16px] shadow-[0px_4px_4px_0px_#00000040] object-cover mt-[16px] mx-[12px]" src={Palmhills1} alt="Palm Hills"/>
       <p className="absolute top-[26px] right-[24px] px-[10px] py-[4px] rounded-[4px] font-lato font-normal text-[12px] text-white bg-[#8E1616]">New Cairo</p>
      </div>
      <img className='w-[196px] h-[65px] object-contain mb-[18px] mt-[26px]' src={Palmhills} alt="Palm Hills"/>
      <button className="w-[415px] h-[35px] ml-[13px] border border-[#8E1616] font-lato font-normal text-[16px] text-[#8E1616] rounded-[8px]">View Details</button>
      
    </div>
    
    
  </div>

  

    </div>



</div>
    </>
  )
}

  